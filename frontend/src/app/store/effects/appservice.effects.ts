import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators';

import { IAppService } from '../../models/interfaces/appservice.interface';
import { AppServiceService } from '../../services/appservice.service';
import * as fromActions from '../actions/appservice.actions';


@Injectable()
export class AppServiceEffects {

  constructor(
    private service: AppServiceService,
    private actions$: Actions) {}

  @Effect()
  listAppServices$: Observable<Action> = this.actions$.pipe(
    ofType<fromActions.ListAppServiceAction>(fromActions.AppServiceActionType.LIST_APPSERVICES),
    map((action: fromActions.ListAppServiceAction) => action.payload),
    switchMap((application_id) =>
      this.service.list_by_parent(application_id).pipe(
        map((response: IAppService[]) => new fromActions.ListAppServiceSuccessAction({appservices: response})),
        catchError((error) => of(new fromActions.ListAppServiceFailAction(error)))
      )
    )
  );

  @Effect()
  getAppService$: Observable<Action> = this.actions$.pipe(
    ofType<fromActions.GetAppServiceAction>(fromActions.AppServiceActionType.GET_APPSERVICE),
    map((action: fromActions.GetAppServiceAction) => action.payload),
    switchMap((appservice: IAppService) => this.service.get(appservice.serviceCode).pipe(
      map((response: IAppService) => new fromActions.GetAppServiceSuccessAction({appservice: response})),
      catchError(error => of(new fromActions.GetAppServiceFailAction(error)))
      )
    )
  );

  @Effect()
  addAppService$: Observable<Action> = this.actions$.pipe(
    ofType<fromActions.AddAppServiceAction>(fromActions.AppServiceActionType.ADD_APPSERVICE),
    map((action: fromActions.AddAppServiceAction) => action.payload),
    switchMap((appservice) => this.service.add(appservice).pipe(
      map((response: IAppService) => new fromActions.AddAppServiceSuccessAction({appservice: response})),
      catchError(error => of(new fromActions.AddAppServiceFailAction(error)))
      )
    )
  );

  @Effect()
  updateAppService$: Observable<Action> = this.actions$.pipe(
    ofType<fromActions.UpdateAppServiceAction>(fromActions.AppServiceActionType.UPDATE_APPSERVICE),
    map((action: fromActions.UpdateAppServiceAction) => action.payload),
    switchMap((appservice) => this.service.update(appservice).pipe(
      map((response: IAppService) => new fromActions.UpdateAppServiceSuccessAction({appservice: response})),
      catchError(error => of(new fromActions.UpdateAppServiceFailAction(error)))
      )
    )
  );

  @Effect()
  deleteAppService$: Observable<Action> = this.actions$.pipe(
    ofType<fromActions.DeleteAppServiceAction>(fromActions.AppServiceActionType.DELETE_APPSERVICE),
    map((action: fromActions.DeleteAppServiceAction) => action.payload),
    switchMap((appservice: IAppService) => this.service.delete(appservice.serviceCode).pipe(
      map(() => new fromActions.DeleteAppServiceSuccessAction()),
      catchError(error => of(new fromActions.DeleteAppServiceFailAction(error)))
      )
    )
  );
}
