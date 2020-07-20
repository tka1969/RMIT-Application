import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators';

import { IApplication } from '../../models/interfaces/application.interface';
import { ApplicationService } from '../../services/application.service';
import * as fromActions from '../actions/application.actions';


@Injectable()
export class ApplicationEffects {

  constructor(
    private service: ApplicationService,
    private actions$: Actions) {}

  @Effect()
  listApplications$: Observable<Action> = this.actions$.pipe(
    ofType<fromActions.ListApplicationAction>(fromActions.ApplicationActionType.LIST_APPLICATIONS),
    switchMap(() =>
      this.service.list().pipe(
        map((response: IApplication[]) => new fromActions.ListApplicationSuccessAction({applications: response})),
        catchError((error) => of(new fromActions.ListApplicationFailAction(error)))
      )
    )
  );

  @Effect()
  getApplication$: Observable<Action> = this.actions$.pipe(
    ofType<fromActions.GetApplicationAction>(fromActions.ApplicationActionType.GET_APPLICATION),
    map((action: fromActions.GetApplicationAction) => action.payload),
    switchMap((application: IApplication) => this.service.get(application.appCode).pipe(
      map((response: IApplication) => new fromActions.GetApplicationSuccessAction({application: response})),
      catchError(error => of(new fromActions.GetApplicationFailAction(error)))
      )
    )
  );

  @Effect()
  addApplication$: Observable<Action> = this.actions$.pipe(
    ofType<fromActions.AddApplicationAction>(fromActions.ApplicationActionType.ADD_APPLICATION),
    map((action: fromActions.AddApplicationAction) => action.payload),
    switchMap((application) => this.service.add(application).pipe(
      map((response: IApplication) => new fromActions.AddApplicationSuccessAction({application: response})),
      catchError(error => of(new fromActions.AddApplicationFailAction(error)))
      )
    )
  );

  @Effect()
  updateApplication$: Observable<Action> = this.actions$.pipe(
    ofType<fromActions.UpdateApplicationAction>(fromActions.ApplicationActionType.UPDATE_APPLICATION),
    map((action: fromActions.UpdateApplicationAction) => action.payload),
    switchMap((application) => this.service.update(application).pipe(
      map((response: IApplication) => new fromActions.UpdateApplicationSuccessAction({application: response})),
      catchError(error => of(new fromActions.UpdateApplicationFailAction(error)))
      )
    )
  );

  @Effect()
  deleteApplication$: Observable<Action> = this.actions$.pipe(
    ofType<fromActions.DeleteApplicationAction>(fromActions.ApplicationActionType.DELETE_APPLICATION),
    map((action: fromActions.DeleteApplicationAction) => action.payload),
    switchMap((application: IApplication) => this.service.delete(application.appCode).pipe(
      map(() => new fromActions.DeleteApplicationSuccessAction()),
      catchError(error => of(new fromActions.DeleteApplicationFailAction(error)))
      )
    )
  );
}
