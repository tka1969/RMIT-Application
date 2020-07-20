import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()
export class BaseService<T> {

  constructor(public httpclient: HttpClient, public service: String) {}

  protected getServiceV1Url(): string {
    return environment.apiUrl + environment.apiV1 + this.service + '/';
  }

  list(): Observable<T[]> {
    return this.httpclient.get<T[]>(this.getServiceV1Url() + 'list');
  }

  list_by_parent(parent_id: any): Observable<T[]> {
    return this.httpclient.get<T[]>(this.getServiceV1Url() + 'list_by_parent/' + parent_id);
  }

  get(id: any): Observable<T> {
    return this.httpclient.get<T>(this.getServiceV1Url() + 'get/' + id);
  }

  add(param: T): Observable<T> {
    return this.httpclient.post<T>(this.getServiceV1Url() + 'add', param);
  }

  update(param: T): Observable<T> {
    return this.httpclient.post<T>(this.getServiceV1Url() + 'update', param);
  }

  delete(id: any): Observable<T> {
    return this.httpclient.delete<T>(this.getServiceV1Url() + 'delete/' + id);
  }
}
