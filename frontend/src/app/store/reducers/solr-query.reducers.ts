import { initialSolrQueryState, SolrQueryState } from '../state/solr-query.state';
import { SOLRQUERY_ACTIONS, SolrQueryActionType } from '../actions/solr-query.actions';

export const solrqueryFeatureKey = 'solr-query';

export function solrqueryReducer(state = initialSolrQueryState, action: SOLRQUERY_ACTIONS): SolrQueryState {
    switch (action.type) {
      case SolrQueryActionType.SOLR_QUERY: {
        return {
            ...state,
            solrQueryLoading: true,
            solrQueryLoaded: false,
            solrQueryFailed: false,
            solrQuery: null
          };
      }
      case SolrQueryActionType.SOLR_QUERY_SUCCESS: {
        return {
          ...state,
          solrQueryLoading: false,
          solrQueryLoaded: true,
          solrQueryFailed: false,
          solrQuery: action.payload.solrresponse
        };
      }
      case SolrQueryActionType.SOLR_QUERY_FAIL: {
        return {
          ...state,
          solrQueryLoading: false,
          solrQueryLoaded: false,
          solrQueryFailed: true,
          solrQuery: null
        };
      }

      default:
        return state;
    }
  }

// AppCodeQuery list
export const stateSolrQuery = (state: SolrQueryState) => state.solrQuery;
export const stateSolrQueryLoading = (state: SolrQueryState) => state.solrQueryLoading;
export const stateSolrQueryLoaded = (state: SolrQueryState) => state.solrQueryLoaded;
export const stateSolrQueryFailed = (state: SolrQueryState) => state.solrQueryFailed;
