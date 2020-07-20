import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISolrResponse } from '../models/interfaces/solr-response.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SolrQueryService {

  constructor(public httpclient: HttpClient) {
  }

  private getV1Url(): string {
    return environment.apiUrl + environment.apiV1 + environment.solr;
  }

  search(selectedQuery:any, searchTerm: any): Observable<ISolrResponse> {
    return this.httpclient.get<ISolrResponse>(this.getV1Url() + selectedQuery + '/' + searchTerm);
  }
}
