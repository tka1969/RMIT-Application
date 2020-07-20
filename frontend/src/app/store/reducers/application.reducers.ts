import { initialApplicationState, ApplicationState } from '../state/application.state';
import { APPLICATION_ACTIONS, ApplicationActionType } from '../actions/application.actions';

export const appserviceRoomFeatureKey = 'application';

export function applicationReducer(state = initialApplicationState, action: APPLICATION_ACTIONS): ApplicationState {
    switch (action.type) {
      case ApplicationActionType.LIST_APPLICATIONS: {
        return {
            ...state,
            listLoading: true,
            listLoaded: false,
            listFailed: false,
            listApplication: []
          };
      }
      case ApplicationActionType.LIST_APPLICATIONS_SUCCESS: {
        return {
          ...state,
          listLoading: false,
          listLoaded: true,
          listFailed: false,
          listApplication: action.payload.applications
        };
      }
      case ApplicationActionType.LIST_APPLICATIONS_FAIL: {
        return {
          ...state,
          listLoading: false,
          listLoaded: false,
          listFailed: true,
          listApplication: []
        };
      }

      case ApplicationActionType.GET_APPLICATION: {
        return {
            ...state,
            itemLoading: true,
            itemLoaded: false,
            itemFailed: false,
            itemApplication: null
          };
      }
      case ApplicationActionType.GET_APPLICATION_SUCCESS: {
        return {
          ...state,
          itemLoading: false,
          itemLoaded: true,
          itemFailed: false,
          itemApplication: action.payload.application
        };
      }
      case ApplicationActionType.GET_APPLICATION_FAIL: {
        return {
          ...state,
          itemLoading: false,
          itemLoaded: false,
          itemFailed: true,
          itemApplication: null
        };
      }
    
      case ApplicationActionType.ADD_APPLICATION: {
        return {
            ...state,
            addLoading: true,
            addLoaded: false,
            addFailed: false,
            addApplication: null
          };
      }
      case ApplicationActionType.ADD_APPLICATION_SUCCESS: {
        return {
          ...state,
          addLoading: false,
          addLoaded: true,
          addFailed: false,
          addApplication: action.payload.application
        };
      }
      case ApplicationActionType.ADD_APPLICATION_FAIL: {
        return {
          ...state,
          addLoading: false,
          addLoaded: false,
          addFailed: true,
          addApplication: null
        };
      }
    
      case ApplicationActionType.UPDATE_APPLICATION: {
        return {
            ...state,
            updateLoading: true,
            updateLoaded: false,
            updateFailed: false,
            updateApplication: null
          };
      }
      case ApplicationActionType.UPDATE_APPLICATION_SUCCESS: {
        return {
          ...state,
          updateLoading: false,
          updateLoaded: true,
          updateFailed: false,
          updateApplication: action.payload.application
        };
      }
      case ApplicationActionType.UPDATE_APPLICATION_FAIL: {
        return {
          ...state,
          updateLoading: false,
          updateLoaded: false,
          updateFailed: true,
          updateApplication: null
        };
      }
    
      case ApplicationActionType.DELETE_APPLICATION: {
        return {
            ...state,
            deleteLoading: true,
            deleteLoaded: false,
            deleteFailed: false
          };
      }
      case ApplicationActionType.DELETE_APPLICATION_SUCCESS: {
        return {
          ...state,
          deleteLoading: false,
          deleteLoaded: true,
          deleteFailed: false
        };
      }
      case ApplicationActionType.DELETE_APPLICATION_FAIL: {
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

// Application list
export const stateListApplication = (state: ApplicationState) => state.listApplication;
export const stateListApplicationLoading = (state: ApplicationState) => state.listLoading;
export const stateListApplicationLoaded = (state: ApplicationState) => state.listLoaded;
export const stateListApplicationFailed = (state: ApplicationState) => state.listFailed;

// Application
export const stateApplication = (state: ApplicationState) => state.itemApplication;
export const stateApplicationLoading = (state: ApplicationState) => state.itemLoading;
export const stateApplicationLoaded = (state: ApplicationState) => state.itemLoaded;
export const stateApplicationFailed = (state: ApplicationState) => state.itemFailed;

// Application Add
export const stateAddApplication = (state: ApplicationState) => state.addApplication;
export const stateAddApplicationLoading = (state: ApplicationState) => state.addLoading;
export const stateAddApplicationLoaded = (state: ApplicationState) => state.addLoaded;
export const stateAddApplicationFailed = (state: ApplicationState) => state.addFailed;

// Application update
export const stateUpdateApplication = (state: ApplicationState) => state.updateApplication;
export const stateUpdateApplicationLoading = (state: ApplicationState) => state.updateLoading;
export const stateUpdateApplicationLoaded = (state: ApplicationState) => state.updateLoaded;
export const stateUpdateApplicationFailed = (state: ApplicationState) => state.updateFailed;

// Application delete
export const stateDeleteApplicationLoading = (state: ApplicationState) => state.deleteLoading;
export const stateDeleteApplicationLoaded = (state: ApplicationState) => state.deleteLoaded;
export const stateDeleteApplicationFailed = (state: ApplicationState) => state.deleteFailed;
