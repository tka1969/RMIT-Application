import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

import { GlobalState } from 'src/app/store/state/global.state';
import { ISolrContent } from 'src/app/models/interfaces/solr-content.interface';
import * as selectorSolrQuery from '../../store/selectors/solr-query.selectors';
import { Router } from '@angular/router';
import { SolrQueryAction } from 'src/app/store/actions/solr-query.actions';
import { ISolrResponse } from 'src/app/models/interfaces/solr-response.interface';


@Component({
  selector: 'app-solr-query-list',
  templateUrl: './solr-query-list.component.html',
  styleUrls: ['./solr-query-list.component.scss']
})
export class SolrQueryListComponent implements  OnInit {

  selectedQuery: String;
  searchInput: String;
  displayedColumns: string[] = ['appCode', 'name', 'description', 'appGroup', 'appType', 'serviceCode', 'type', 'subType'];
  dataSource: MatTableDataSource<ISolrContent>;
  listLoaded$: Observable<boolean>;
  listLoading$: Observable<boolean>;
  error$: Observable<boolean>;

  constructor(private router: Router, public store: Store<GlobalState>) { }

  ngOnInit(): void {
    this.selectedQuery ='APPLICATION';

    this.store.pipe(select(selectorSolrQuery.selectorSolrQuery)).subscribe(solrresponse => this.initializeData(solrresponse));

    this.listLoaded$ = this.store.pipe(select(selectorSolrQuery.selectorSolrQueryLoaded));
    this.listLoading$ = this.store.pipe(select(selectorSolrQuery.selectorSolrQueryLoading));
    this.error$ = this.store.pipe(select(selectorSolrQuery.selectorSolrQueryFailed));
  }

  private loadSolrQuery(selectedQuery: String, searchTerm: String): void {
    this.store.dispatch(new SolrQueryAction(selectedQuery, searchTerm));
  }

  private initializeData(response: ISolrResponse): void {
    this.dataSource = new MatTableDataSource(response == null ? null : response.content);
  }

  public search(): void { 
    this.loadSolrQuery(this.selectedQuery, this.searchInput);
  } 

  public openHome() {
    this.router.navigateByUrl('/application-list');
  }  
}
