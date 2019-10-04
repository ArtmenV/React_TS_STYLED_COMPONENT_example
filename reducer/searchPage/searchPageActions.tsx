import {
  SearchActionType,
  DELETE_MODELDETAIL,
  ADD_MODELDETAIL,
  ADD_MODEL,
  DELETE_MODEL,
  ADD_COMPANY,
  DELETE_COMPANY,
  CLEAR_SESSIONSTORAGE
} from "./searchPageTypes";

export const deleteModelDetailAction = (
  modelDetail: string
): SearchActionType => {
  return {
    type: DELETE_MODELDETAIL,
    modelDetail
  };
};
export const addModelDetailAction = (modelDetail: string): SearchActionType => {
  return {
    type: ADD_MODELDETAIL,
    modelDetail
  };
};
export const addModelAction = (model: string): SearchActionType => {
  return {
    type: ADD_MODEL,
    model
  };
};
export const deleteModelAction = (model: string): SearchActionType => {
  return {
    type: DELETE_MODEL,
    model
  };
};
export const addCompanyAction = (company: string): SearchActionType => {
  return {
    type: ADD_COMPANY,
    company
  };
};
export const deleteCompanyAction = (company: string): SearchActionType => {
  return {
    type: DELETE_COMPANY,
    company
  };
};
export const clearSessionStorage = (): SearchActionType => {
  return {
    type: CLEAR_SESSIONSTORAGE
  };
};
