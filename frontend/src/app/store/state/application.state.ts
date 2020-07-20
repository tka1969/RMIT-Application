import { IApplication } from '../../models/interfaces/application.interface';

export interface ApplicationState {
  listApplication: IApplication[];
  listLoading: boolean;
  listLoaded: boolean;
  listFailed: boolean;

  itemApplication: IApplication;
  itemLoading: boolean;
  itemLoaded: boolean;
  itemFailed: boolean;

  addApplication: IApplication;
  addLoading: boolean;
  addLoaded: boolean;
  addFailed: boolean;

  updateApplication: IApplication;
  updateLoading: boolean;
  updateLoaded: boolean;
  updateFailed: boolean;

  deleteApplication: IApplication;
  deleteLoading: boolean;
  deleteLoaded: boolean;
  deleteFailed: boolean;
};

export const initialApplicationState: ApplicationState = {
  listApplication: [],
  listLoading: false,
  listLoaded: false,
  listFailed: false,

  itemApplication: null,
  itemLoading: false,
  itemLoaded: false,
  itemFailed: false,

  addApplication: null,
  addLoading: false,
  addLoaded: false,
  addFailed: false,

  updateApplication: null,
  updateLoading: false,
  updateLoaded: false,
  updateFailed: false,

  deleteApplication: null,
  deleteLoading: false,
  deleteLoaded: false,
  deleteFailed: false
};
