import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IAppService } from '../models/interfaces/appservice.interface';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService extends BaseService<IAppService> {

  constructor(public httpclient: HttpClient) {
    super(httpclient, 'appservice');
  }
}
