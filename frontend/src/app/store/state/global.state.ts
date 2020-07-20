import { ApplicationState, initialApplicationState } from './application.state';
import { AppServiceState, initialAppServiceState } from './appservice.state';
import { SolrQueryState, initialSolrQueryState } from './solr-query.state';

export interface GlobalState {
    application: ApplicationState;
    appservice: AppServiceState;
    solrquery: SolrQueryState;
}

export const initialGlobalState: GlobalState = {
    application: initialApplicationState,
    appservice: initialAppServiceState,
    solrquery: initialSolrQueryState
};
