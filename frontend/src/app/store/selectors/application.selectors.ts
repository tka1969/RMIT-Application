import { createSelector, createFeatureSelector } from '@ngrx/store';

import { ApplicationState } from '../state/application.state';
import * as fromReducers from '../reducers/application.reducers';


export const selectorApplicationState = createFeatureSelector<ApplicationState>('application');


/* Applications*/
// Application List
export const selectorListApplication = createSelector(
  selectorApplicationState,
  fromReducers.stateListApplication
);
export const selectorListApplicationLoading = createSelector(
  selectorApplicationState,
  fromReducers.stateListApplicationLoading
);
export const selectorListApplicationLoaded = createSelector(
  selectorApplicationState,
  fromReducers.stateListApplicationLoaded
);
export const selectorListApplicationFailed = createSelector(
  selectorApplicationState,
  fromReducers.stateListApplicationFailed
);

// Application Get
export const selectorApplication = createSelector(
  selectorApplicationState,
  fromReducers.stateApplication
);
export const selectorApplicationLoading = createSelector(
  selectorApplicationState,
  fromReducers.stateApplicationLoading
);
export const selectorApplicationLoaded = createSelector(
  selectorApplicationState,
  fromReducers.stateApplicationLoaded
);
export const selectorApplicationFailed = createSelector(
  selectorApplicationState,
  fromReducers.stateApplicationFailed
);

// Application Add
export const selectorAddApplication = createSelector(
  selectorApplicationState,
  fromReducers.stateAddApplication
);
export const selectorAddApplicationLoading = createSelector(
  selectorApplicationState,
  fromReducers.stateAddApplicationLoading
);
export const selectorAddApplicationLoaded = createSelector(
  selectorApplicationState,
  fromReducers.stateAddApplicationLoaded
);
export const selectorAddApplicationFailed = createSelector(
  selectorApplicationState,
  fromReducers.stateAddApplicationFailed
);

// Application update
export const selectorUpdateApplication = createSelector(
  selectorApplicationState,
  fromReducers.stateUpdateApplication
);
export const selectorUpdateApplicationLoading = createSelector(
  selectorApplicationState,
  fromReducers.stateUpdateApplicationLoading
);
export const selectorUpdateApplicationLoaded = createSelector(
  selectorApplicationState,
  fromReducers.stateUpdateApplicationLoaded
);
export const selectorUpdateApplicationFailed = createSelector(
  selectorApplicationState,
  fromReducers.stateUpdateApplicationFailed
);

// Application delete
export const selectorDeleteApplicationLoading = createSelector(
  selectorApplicationState,
  fromReducers.stateDeleteApplicationLoading
);
export const selectorDeleteApplicationLoaded = createSelector(
  selectorApplicationState,
  fromReducers.stateDeleteApplicationLoaded
);
export const selectorDeleteApplicationFailed = createSelector(
  selectorApplicationState,
  fromReducers.stateDeleteApplicationFailed
);

