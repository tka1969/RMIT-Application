import { IAppService } from '../../models/interfaces/appservice.interface';


export interface AppServiceState {

  listAppService: IAppService[];
  listLoading: boolean;
  listLoaded: boolean;
  listFailed: boolean;

  itemAppService: IAppService;
  itemLoading: boolean;
  itemLoaded: boolean;
  itemFailed: boolean;

  addAppService: IAppService;
  addLoading: boolean;
  addLoaded: boolean;
  addFailed: boolean;

  updateAppService: IAppService;
  updateLoading: boolean;
  updateLoaded: boolean;
  updateFailed: boolean;

  deleteAppService: IAppService;
  deleteLoading: boolean;
  deleteLoaded: boolean;
  deleteFailed: boolean;
};

export const initialAppServiceState: AppServiceState = {
  listAppService: [],
  listLoading: false,
  listLoaded: false,
  listFailed: false,

  itemAppService: null,
  itemLoading: false,
  itemLoaded: false,
  itemFailed: false,

  addAppService: null,
  addLoading: false,
  addLoaded: false,
  addFailed: false,

  updateAppService: null,
  updateLoading: false,
  updateLoaded: false,
  updateFailed: false,

  deleteAppService: null,
  deleteLoading: false,
  deleteLoaded: false,
  deleteFailed: false
};

