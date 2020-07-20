import { createSelector, createFeatureSelector } from '@ngrx/store';

import { SolrQueryState } from '../state/solr-query.state';
import * as fromReducers from '../reducers/solr-query.reducers';


export const selectorSolrQueryState = createFeatureSelector<SolrQueryState>('solr-query');

export const selectorSolrQuery = createSelector(
  selectorSolrQueryState,
  fromReducers.stateSolrQuery
);
export const selectorSolrQueryLoading = createSelector(
  selectorSolrQueryState,
  fromReducers.stateSolrQueryLoading
);
export const selectorSolrQueryLoaded = createSelector(
  selectorSolrQueryState,
  fromReducers.stateSolrQueryLoaded
);
export const selectorSolrQueryFailed = createSelector(
  selectorSolrQueryState,
  fromReducers.stateSolrQueryFailed
);
