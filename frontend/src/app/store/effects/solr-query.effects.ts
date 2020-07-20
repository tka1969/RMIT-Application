import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators';

import { SolrQueryService } from '../../services/solr-query.service';
import * as fromActions from '../actions/solr-query.actions';
import { ISolrResponse } from 'src/app/models/interfaces/solr-response.interface';


@Injectable()
export class SolrQueryEffects {

  constructor(
    private service: SolrQueryService,
    private actions$: Actions) {}

  @Effect()
  solrAppCodeQuery$: Observable<Action> = this.actions$.pipe(
    ofType<fromActions.SolrQueryAction>(fromActions.SolrQueryActionType.SOLR_QUERY),
    switchMap((action) =>
      this.service.search(action.selectedQuery, action.searchTerm).pipe(
        map((response: ISolrResponse) => new fromActions.SolrQuerySuccessAction({solrresponse: response})),
        catchError((error) => of(new fromActions.SolrQueryFailAction(error)))
      )
    )
  );
}
