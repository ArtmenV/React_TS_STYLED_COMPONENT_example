import HeaderReducer from "./header/headerReducer";
import SearchPageReducer from "./searchPage/searchPageReducer";
import AuthReducer from "./auth/authReducer";
import MyPageReducer from "./myPage/myPageReducer";
import { IMyPageState } from "./myPage/myPageTypes";
import { combineReducers } from "redux";
import { IHeaderState } from "./header/headerTypes";
import { ISearchPageState } from "./searchPage/searchPageTypes";
import { IAuthState } from "./auth/authTypes";
export interface rootState {
  HeaderReducer: IHeaderState;
  SearchPageReducer: ISearchPageState;
  AuthReducer: IAuthState;
  MyPageReducer: IMyPageState;
}
// store는 1개니깐, rootState를 참조하지 않으면 안됌.
const rootReducer = combineReducers({
  HeaderReducer,
  SearchPageReducer,
  AuthReducer,
  MyPageReducer
});
export default rootReducer;
