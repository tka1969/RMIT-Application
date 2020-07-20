import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IApplication } from '../models/interfaces/application.interface';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class ApplicationService extends BaseService<IApplication> {

  constructor(public httpclient: HttpClient) {
    super(httpclient, 'application');
  }
}
