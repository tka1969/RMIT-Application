
import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AppServiceState } from '../state/appservice.state';
import * as fromReducers from '../reducers/appservice.reducers';


export const selectorAppServiceState = createFeatureSelector<AppServiceState>('appservice');

/* AppServices*/
// AppService List
export const selectorListAppService = createSelector(
  selectorAppServiceState,
  fromReducers.stateListAppService
);
export const selectorListAppServiceLoading = createSelector(
  selectorAppServiceState,
  fromReducers.stateListAppServiceLoading
);
export const selectorListAppServiceLoaded = createSelector(
  selectorAppServiceState,
  fromReducers.stateListAppServiceLoaded
);
export const selectorListAppServiceFailed = createSelector(
  selectorAppServiceState,
  fromReducers.stateListAppServiceFailed
);

// AppService Get
export const selectorAppService = createSelector(
  selectorAppServiceState,
  fromReducers.stateAppService
);
export const selectorAppServiceLoading = createSelector(
  selectorAppServiceState,
  fromReducers.stateAppServiceLoading
);
export const selectorAppServiceLoaded = createSelector(
  selectorAppServiceState,
  fromReducers.stateAppServiceLoaded
);
export const selectorAppServiceFailed = createSelector(
  selectorAppServiceState,
  fromReducers.stateAppServiceFailed
);

// AppService Add
export const selectorAddAppService = createSelector(
  selectorAppServiceState,
  fromReducers.stateAddAppService
);
export const selectorAddAppServiceLoading = createSelector(
  selectorAppServiceState,
  fromReducers.stateAddAppServiceLoading
);
export const selectorAddAppServiceLoaded = createSelector(
  selectorAppServiceState,
  fromReducers.stateAddAppServiceLoaded
);
export const selectorAddAppServiceFailed = createSelector(
  selectorAppServiceState,
  fromReducers.stateAddAppServiceFailed
);

// AppService update
export const selectorUpdateAppService = createSelector(
  selectorAppServiceState,
  fromReducers.stateUpdateAppService
);
export const selectorUpdateAppServiceLoading = createSelector(
  selectorAppServiceState,
  fromReducers.stateUpdateAppServiceLoading
);
export const selectorUpdateAppServiceLoaded = createSelector(
  selectorAppServiceState,
  fromReducers.stateUpdateAppServiceLoaded
);
export const selectorUpdateAppServiceFailed = createSelector(
  selectorAppServiceState,
  fromReducers.stateUpdateAppServiceFailed
);

// AppService delete
export const selectorDeleteAppServiceLoading = createSelector(
  selectorAppServiceState,
  fromReducers.stateDeleteAppServiceLoading
);
export const selectorDeleteAppServiceLoaded = createSelector(
  selectorAppServiceState,
  fromReducers.stateDeleteAppServiceLoaded
);
export const selectorDeleteAppServiceFailed = createSelector(
  selectorAppServiceState,
  fromReducers.stateDeleteAppServiceFailed
);
