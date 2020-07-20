  
import { ActionReducerMap } from '@ngrx/store';
import { GlobalState } from './state/global.state';
import { applicationReducer } from './reducers/application.reducers';
import { appserviceReducer } from './reducers/appservice.reducers';
import { solrqueryReducer } from './reducers/solr-query.reducers';

export const reducers: ActionReducerMap<GlobalState> = {
    application: applicationReducer,
    appservice: appserviceReducer,
    solrquery: solrqueryReducer,
};
