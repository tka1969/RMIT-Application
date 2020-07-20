import { ISolrResponse } from 'src/app/models/interfaces/solr-response.interface';


export interface SolrQueryState {
  solrQuery: ISolrResponse;
  solrQueryLoading: boolean;
  solrQueryLoaded: boolean;
  solrQueryFailed: boolean;
};

export const initialSolrQueryState: SolrQueryState = {
  solrQuery: null,
  solrQueryLoading: false,
  solrQueryLoaded: false,
  solrQueryFailed: false,
};
