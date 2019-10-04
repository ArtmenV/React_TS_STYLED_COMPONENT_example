export const DELETE_MODELDETAIL = "DELETE_MODELDETAIL";
export const ADD_MODELDETAIL = "ADD_MODELDETAIL";
export const ADD_COMPANY = "ADD_COMPANY";
export const DELETE_COMPANY = "DELETE_COMPANY";
export const ADD_MODEL = "ADD_MODEL";
export const DELETE_MODEL = "DELETE_MODEL";
export const CLEAR_SESSIONSTORAGE = "CLEAR_SESSIONSTORAGE";

export interface ISearchPageState {
  modelDetail: string;
  company: string;
  model: string;
}
interface DeleteModelAction {
  type: typeof DELETE_MODEL;
  model: string;
}
interface AddModelAction {
  type: typeof ADD_MODEL;
  model: string;
}
interface AddCompanyAction {
  type: typeof ADD_COMPANY;
  company: string;
}
interface DeleteCompanyAction {
  type: typeof DELETE_COMPANY;
  company: string;
}
interface DeleteModelDetailAction {
  type: typeof DELETE_MODELDETAIL;
  modelDetail: string;
}

interface AddModelDetailAction {
  type: typeof ADD_MODELDETAIL;
  modelDetail: string;
}
interface ClearSessionStorage {
  type: typeof CLEAR_SESSIONSTORAGE;
}
export type SearchActionType =
  | DeleteModelDetailAction
  | AddModelDetailAction
  | AddCompanyAction
  | DeleteCompanyAction
  | DeleteModelAction
  | AddModelAction
  | ClearSessionStorage;
