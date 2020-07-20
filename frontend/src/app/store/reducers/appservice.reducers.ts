import { initialAppServiceState, AppServiceState } from '../state/appservice.state';
import { APPSERVICE_ACTIONS, AppServiceActionType } from '../actions/appservice.actions';

export const appserviceFeatureKey = 'appservice';

export function appserviceReducer(state = initialAppServiceState, action: APPSERVICE_ACTIONS): AppServiceState {
    switch (action.type) {
      case AppServiceActionType.LIST_APPSERVICES: {
        return {
            ...state,
            listLoading: true,
            listLoaded: false,
            listFailed: false,
            listAppService: []
          };
      }
      case AppServiceActionType.LIST_APPSERVICES_SUCCESS: {
        return {
          ...state,
          listLoading: false,
          listLoaded: true,
          listFailed: false,
          listAppService: action.payload.appservices
        };
      }
      case AppServiceActionType.LIST_APPSERVICES_FAIL: {
        return {
          ...state,
          listLoading: false,
          listLoaded: false,
          listFailed: true,
          listAppService: []
        };
      }

      case AppServiceActionType.GET_APPSERVICE: {
        return {
            ...state,
            itemLoading: true,
            itemLoaded: false,
            itemFailed: false,
            itemAppService: null
          };
      }
      case AppServiceActionType.GET_APPSERVICE_SUCCESS: {
        return {
          ...state,
          itemLoading: false,
          itemLoaded: true,
          itemFailed: false,
          itemAppService: action.payload.appservice
        };
      }
      case AppServiceActionType.GET_APPSERVICE_FAIL: {
        return {
          ...state,
          itemLoading: false,
          itemLoaded: false,
          itemFailed: true,
          itemAppService: null
        };
      }
    
      case AppServiceActionType.ADD_APPSERVICE: {
        return {
            ...state,
            addLoading: true,
            addLoaded: false,
            addFailed: false,
            addAppService: null
          };
      }
      case AppServiceActionType.ADD_APPSERVICE_SUCCESS: {
        return {
          ...state,
          addLoading: false,
          addLoaded: true,
          addFailed: false,
          addAppService: action.payload.appservice
        };
      }
      case AppServiceActionType.ADD_APPSERVICE_FAIL: {
        return {
          ...state,
          addLoading: false,
          addLoaded: false,
          addFailed: true,
          addAppService: null
        };
      }
    
      case AppServiceActionType.UPDATE_APPSERVICE: {
        return {
            ...state,
            updateLoading: true,
            updateLoaded: false,
            updateFailed: false,
            updateAppService: null
          };
      }
      case AppServiceActionType.UPDATE_APPSERVICE_SUCCESS: {
        return {
          ...state,
          updateLoading: false,
          updateLoaded: true,
          updateFailed: false,
          updateAppService: action.payload.appservice
        };
      }
      case AppServiceActionType.UPDATE_APPSERVICE_FAIL: {
        return {
          ...state,
          updateLoading: false,
          updateLoaded: false,
          updateFailed: true,
          updateAppService: null
        };
      }
    
      case AppServiceActionType.DELETE_APPSERVICE: {
        return {
            ...state,
            deleteLoading: true,
            deleteLoaded: false,
            deleteFailed: false
          };
      }
      case AppServiceActionType.DELETE_APPSERVICE_SUCCESS: {
        return {
          ...state,
          deleteLoading: false,
          deleteLoaded: true,
          deleteFailed: false
        };
      }
      case AppServiceActionType.DELETE_APPSERVICE_FAIL: {
        return {
          ...state,
          deleteLoading: false,
          deleteLoaded: false,
          deleteFailed: true
        };
      }

      default:
        return state;
    }
  }


// AppService list
export const stateListAppService = (state: AppServiceState) => state.listAppService;
export const stateListAppServiceLoading = (state: AppServiceState) => state.listLoading;
export const stateListAppServiceLoaded = (state: AppServiceState) => state.listLoaded;
export const stateListAppServiceFailed = (state: AppServiceState) => state.listFailed;

// AppService
export const stateAppService = (state: AppServiceState) => state.itemAppService;
export const stateAppServiceLoading = (state: AppServiceState) => state.itemLoading;
export const stateAppServiceLoaded = (state: AppServiceState) => state.itemLoaded;
export const stateAppServiceFailed = (state: AppServiceState) => state.itemFailed;

// AppService Add
export const stateAddAppService = (state: AppServiceState) => state.addAppService;
export const stateAddAppServiceLoading = (state: AppServiceState) => state.addLoading;
export const stateAddAppServiceLoaded = (state: AppServiceState) => state.addLoaded;
export const stateAddAppServiceFailed = (state: AppServiceState) => state.addFailed;

// AppService update
export const stateUpdateAppService = (state: AppServiceState) => state.updateAppService;
export const stateUpdateAppServiceLoading = (state: AppServiceState) => state.updateLoading;
export const stateUpdateAppServiceLoaded = (state: AppServiceState) => state.updateLoaded;
export const stateUpdateAppServiceFailed = (state: AppServiceState) => state.updateFailed;

// AppService delete
export const stateDeleteAppServiceLoading = (state: AppServiceState) => state.deleteLoading;
export const stateDeleteAppServiceLoaded = (state: AppServiceState) => state.deleteLoaded;
export const stateDeleteAppServiceFailed = (state: AppServiceState) => state.deleteFailed;
