// action의 type의 type
export const TOGGLE_SIGNUP_POPUP = "TOGGLE_SIGNUP_POPUP";
export const TOGGLE_SIGNIN_POPUP = "TOGGLE_SIGNIN_POPUP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// authReducer의 initialState type
export interface IAuthState {
  isSignUpPopUpShow: boolean;
  isSignInPopUpShow: boolean;
  loggedInUser: user;
}

// actionCreator 의 type
interface showSignUpPopUpAction {
  type: typeof TOGGLE_SIGNUP_POPUP;
  isSignUpPopUpShow: boolean;
}

interface showSignUpPopInAction {
  type: typeof TOGGLE_SIGNIN_POPUP;
  isSignInPopUpShow: boolean;
}

export interface user {
  id: string;
  seq: number;
  type: string;
}

interface logInAction {
  type: typeof LOGIN;
  user: user;
}

interface logOutAction {
  type: typeof LOGOUT;
}

export type AuthActionType =
  | showSignUpPopUpAction
  | showSignUpPopInAction
  | logOutAction
  | logInAction;
