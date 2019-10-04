import {
  DELETE_MODELDETAIL,
  DELETE_MODEL,
  DELETE_COMPANY,
  ADD_MODELDETAIL,
  SearchActionType,
  ISearchPageState,
  ADD_MODEL,
  ADD_COMPANY,
  CLEAR_SESSIONSTORAGE
} from "./searchPageTypes";

const initialState: ISearchPageState = {
  modelDetail: "",
  company: "",
  model: ""
};
const searchPageReducer = (
  state = initialState,
  action: SearchActionType
): ISearchPageState => {
  // console.log("state >> ", state);
  //   console.log("deleteModelDetail");
  switch (action.type) {
    case DELETE_MODELDETAIL: {
      // console.log("delete modelDetail reducer 들어옴");
      return {
        ...state,
        modelDetail: null
      };
    }
    case DELETE_MODEL: {
      console.log("delete model reducer 들어옴");
      return {
        ...state,
        model: null
      };
    }
    case DELETE_COMPANY: {
      console.log("delete company reducer 들어옴");
      return {
        ...state,
        company: null
      };
    }
    case ADD_MODELDETAIL: {
      console.log("addModelDetail Reducer 들어옴!!");
      return {
        ...state,
        modelDetail: action.modelDetail
      };
    }
    case ADD_MODEL: {
      console.log("addModel Reducer들어옴!!");
      return {
        ...state,
        model: action.model
      };
    }
    case ADD_COMPANY: {
      console.log("ADD_COMAPNY Reducer들어옴!!");
      return {
        ...state,
        company: action.company
      };
    }
    case CLEAR_SESSIONSTORAGE: {
      console.log("clearSessionStorage들어옴!!");
      window.sessionStorage.clear();
      return {
        ...state,
        model: null,
        company: null,
        modelDetail: null
      };
    }
    default:
      return state;
  }
};
export default searchPageReducer;
