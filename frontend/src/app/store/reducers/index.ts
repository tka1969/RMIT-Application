import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAppService from './appservice.reducers';
import * as fromApplication from './application.reducers';
import * as fromSolrQuery from './solr-query.reducers';

import * as stateApplication from '../state/application.state';
import * as stateAppService from '../state/appservice.state';
import * as stateSolrQuery from '../state/solr-query.state';


export interface State {
  [fromApplication.appserviceRoomFeatureKey]: stateApplication.ApplicationState;
  [fromAppService.appserviceFeatureKey]: stateAppService.AppServiceState;
  [fromSolrQuery.solrqueryFeatureKey]: stateSolrQuery.SolrQueryState;
}

export const reducers: ActionReducerMap<State> = {
  [fromAppService.appserviceFeatureKey]: fromAppService.appserviceReducer,
  [fromApplication.appserviceRoomFeatureKey]: fromApplication.applicationReducer,
  [fromSolrQuery.solrqueryFeatureKey]: fromSolrQuery.solrqueryReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
