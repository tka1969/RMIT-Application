import { Action } from '@ngrx/store';

import { ISolrResponse } from 'src/app/models/interfaces/solr-response.interface';

export enum SolrQueryActionType {
  SOLR_QUERY = '[SOLR_QUERY] SolrQuery',
  SOLR_QUERY_SUCCESS = '[SOLR_QUERY] SolrQuery Success',
  SOLR_QUERY_FAIL = '[SOLR_QUERY] SolrQuery Fail',
}

export class SolrQueryAction implements Action {
  public readonly type = SolrQueryActionType.SOLR_QUERY;
  constructor(public selectedQuery: String, public searchTerm: String) {}
}

export class SolrQuerySuccessAction implements Action {
  public readonly type = SolrQueryActionType.SOLR_QUERY_SUCCESS;
  constructor(public payload: { solrresponse: ISolrResponse }) {}
}

export class SolrQueryFailAction implements Action {
  public readonly type = SolrQueryActionType.SOLR_QUERY_FAIL;
  constructor(public error: any) {}
}

export type SOLRQUERY_ACTIONS =
  |  SolrQueryAction
  |  SolrQuerySuccessAction
  |  SolrQueryFailAction
  ;
