import { Action, createReducer, on } from '@ngrx/store';

import { IApplication } from '../../models/interfaces/application.interface';


export enum ApplicationActionType {
  LIST_APPLICATIONS = '[APPLICATIONS] Get Application List',
  LIST_APPLICATIONS_SUCCESS = '[APPLICATIONS] Get Application List Success',
  LIST_APPLICATIONS_FAIL = '[APPLICATIONS] Get Application List Fail',

  GET_APPLICATION = '[APPLICATIONS] Get Application',
  GET_APPLICATION_SUCCESS = '[APPLICATIONS] Get Application Success',
  GET_APPLICATION_FAIL = '[APPLICATIONS] Get Application Fail',

  ADD_APPLICATION = '[APPLICATIONS] Add Application',
  ADD_APPLICATION_SUCCESS = '[APPLICATIONS] Add Application Success',
  ADD_APPLICATION_FAIL = '[APPLICATIONS] Add Application Fail',

  UPDATE_APPLICATION = '[APPLICATIONS] Update Application',
  UPDATE_APPLICATION_SUCCESS = '[APPLICATIONS] Update Application Success',
  UPDATE_APPLICATION_FAIL = '[APPLICATIONS] Update Application Fail',

  DELETE_APPLICATION = '[APPLICATIONS] Delete Application',
  DELETE_APPLICATION_SUCCESS = '[APPLICATIONS] Delete Application Success',
  DELETE_APPLICATION_FAIL = '[APPLICATIONS] Delete Application Fail',
}

export class ListApplicationAction implements Action {
  public readonly type = ApplicationActionType.LIST_APPLICATIONS;
}

export class ListApplicationSuccessAction implements Action {
  public readonly type = ApplicationActionType.LIST_APPLICATIONS_SUCCESS;
  constructor(public payload: { applications: IApplication[] }) {}
}

export class ListApplicationFailAction implements Action {
  public readonly type = ApplicationActionType.LIST_APPLICATIONS_FAIL;
  constructor(public error: any) {}
}


export class GetApplicationAction implements Action {
  public readonly type = ApplicationActionType.GET_APPLICATION;
  constructor(public payload: { appCode: String }) {}
}

export class GetApplicationSuccessAction implements Action {
  public readonly type = ApplicationActionType.GET_APPLICATION_SUCCESS;
  constructor(public payload: { application: IApplication }) {}
}

export class GetApplicationFailAction implements Action {
  public readonly type = ApplicationActionType.GET_APPLICATION_FAIL;
  constructor(public error: any) {}
}


export class AddApplicationAction implements Action {
  public readonly type = ApplicationActionType.ADD_APPLICATION;
  constructor(public payload: IApplication ) {}
}

export class AddApplicationSuccessAction implements Action {
  public readonly type = ApplicationActionType.ADD_APPLICATION_SUCCESS;
  constructor(public payload: { application: IApplication }) {}
}

export class AddApplicationFailAction implements Action {
  public readonly type = ApplicationActionType.ADD_APPLICATION_FAIL;
  constructor(public error: any) {}
}


export class UpdateApplicationAction implements Action {
  public readonly type = ApplicationActionType.UPDATE_APPLICATION;
  constructor(public payload: IApplication ) {}
}

export class UpdateApplicationSuccessAction implements Action {
  public readonly type = ApplicationActionType.UPDATE_APPLICATION_SUCCESS;
  constructor(public payload: { application: IApplication }) {}
}

export class UpdateApplicationFailAction implements Action {
  public readonly type = ApplicationActionType.UPDATE_APPLICATION_FAIL;
  constructor(public error: any) {}
}


export class DeleteApplicationAction implements Action {
  public readonly type = ApplicationActionType.DELETE_APPLICATION;
  constructor(public payload: { appCode: String }) {}
}

export class DeleteApplicationSuccessAction implements Action {
  public readonly type = ApplicationActionType.DELETE_APPLICATION_SUCCESS;
}

export class DeleteApplicationFailAction implements Action {
  public readonly type = ApplicationActionType.DELETE_APPLICATION_FAIL;
  constructor(public error: any) {}
}


export type APPLICATION_ACTIONS =
  |  ListApplicationAction
  |  ListApplicationSuccessAction
  |  ListApplicationFailAction

  |  GetApplicationAction
  |  GetApplicationSuccessAction
  |  GetApplicationFailAction

  |  AddApplicationAction
  |  AddApplicationSuccessAction
  |  AddApplicationFailAction

  |  UpdateApplicationAction
  |  UpdateApplicationSuccessAction
  |  UpdateApplicationFailAction

  |  DeleteApplicationAction
  |  DeleteApplicationSuccessAction
  |  DeleteApplicationFailAction
  ;

