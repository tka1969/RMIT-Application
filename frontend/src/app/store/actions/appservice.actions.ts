import { Action, createReducer, on } from '@ngrx/store';

import { IAppService } from '../../models/interfaces/appservice.interface';


export enum AppServiceActionType {
  LIST_APPSERVICES = '[APPSERVICES] Get AppService List',
  LIST_APPSERVICES_SUCCESS = '[APPSERVICES] Get AppService List Success',
  LIST_APPSERVICES_FAIL = '[APPSERVICES] Get AppService List Fail',

  GET_APPSERVICE = '[APPSERVICES] Get AppService',
  GET_APPSERVICE_SUCCESS = '[APPSERVICES] Get AppService Success',
  GET_APPSERVICE_FAIL = '[APPSERVICES] Get AppService Fail',

  ADD_APPSERVICE = '[APPSERVICES] Add AppService',
  ADD_APPSERVICE_SUCCESS = '[APPSERVICES] Add AppService Success',
  ADD_APPSERVICE_FAIL = '[APPSERVICES] Add AppService Fail',

  UPDATE_APPSERVICE = '[APPSERVICES] Update AppService',
  UPDATE_APPSERVICE_SUCCESS = '[APPSERVICES] Update AppService Success',
  UPDATE_APPSERVICE_FAIL = '[APPSERVICES] Update AppService Fail',

  DELETE_APPSERVICE = '[APPSERVICES] Delete AppService',
  DELETE_APPSERVICE_SUCCESS = '[APPSERVICES] Delete AppService Success',
  DELETE_APPSERVICE_FAIL = '[APPSERVICES] Delete AppService Fail',
}

export class ListAppServiceAction implements Action {
  public readonly type = AppServiceActionType.LIST_APPSERVICES;
  constructor(public payload: { parent_id: String }) {}
}

export class ListAppServiceSuccessAction implements Action {
  public readonly type = AppServiceActionType.LIST_APPSERVICES_SUCCESS;
  constructor(public payload: { appservices: IAppService[] }) {}
}

export class ListAppServiceFailAction implements Action {
  public readonly type = AppServiceActionType.LIST_APPSERVICES_FAIL;
  constructor(public error: any) {}
}


export class GetAppServiceAction implements Action {
  public readonly type = AppServiceActionType.GET_APPSERVICE;
  constructor(public payload: { serviceCode: String }) {}
}

export class GetAppServiceSuccessAction implements Action {
  public readonly type = AppServiceActionType.GET_APPSERVICE_SUCCESS;
  constructor(public payload: { appservice: IAppService }) {}
}

export class GetAppServiceFailAction implements Action {
  public readonly type = AppServiceActionType.GET_APPSERVICE_FAIL;
  constructor(public error: any) {}
}


export class AddAppServiceAction implements Action {
  public readonly type = AppServiceActionType.ADD_APPSERVICE;
  constructor(public payload: IAppService ) {}
}

export class AddAppServiceSuccessAction implements Action {
  public readonly type = AppServiceActionType.ADD_APPSERVICE_SUCCESS;
  constructor(public payload: { appservice: IAppService }) {}
}

export class AddAppServiceFailAction implements Action {
  public readonly type = AppServiceActionType.ADD_APPSERVICE_FAIL;
  constructor(public error: any) {}
}


export class UpdateAppServiceAction implements Action {
  public readonly type = AppServiceActionType.UPDATE_APPSERVICE;
  constructor(public payload: IAppService ) {}
}

export class UpdateAppServiceSuccessAction implements Action {
  public readonly type = AppServiceActionType.UPDATE_APPSERVICE_SUCCESS;
  constructor(public payload: { appservice: IAppService }) {}
}

export class UpdateAppServiceFailAction implements Action {
  public readonly type = AppServiceActionType.UPDATE_APPSERVICE_FAIL;
  constructor(public error: any) {}
}


export class DeleteAppServiceAction implements Action {
  public readonly type = AppServiceActionType.DELETE_APPSERVICE;
  constructor(public payload: { serviceCode: String }) {}
}

export class DeleteAppServiceSuccessAction implements Action {
  public readonly type = AppServiceActionType.DELETE_APPSERVICE_SUCCESS;
}

export class DeleteAppServiceFailAction implements Action {
  public readonly type = AppServiceActionType.DELETE_APPSERVICE_FAIL;
  constructor(public error: any) {}
}


export type APPSERVICE_ACTIONS =
  |  ListAppServiceAction
  |  ListAppServiceSuccessAction
  |  ListAppServiceFailAction

  |  GetAppServiceAction
  |  GetAppServiceSuccessAction
  |  GetAppServiceFailAction

  |  AddAppServiceAction
  |  AddAppServiceSuccessAction
  |  AddAppServiceFailAction

  |  UpdateAppServiceAction
  |  UpdateAppServiceSuccessAction
  |  UpdateAppServiceFailAction

  |  DeleteAppServiceAction
  |  DeleteAppServiceSuccessAction
  |  DeleteAppServiceFailAction
  ;
