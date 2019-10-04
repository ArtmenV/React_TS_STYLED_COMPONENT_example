import {
  AuthActionType,
  TOGGLE_SIGNUP_POPUP,
  TOGGLE_SIGNIN_POPUP,
  LOGIN,
  LOGOUT,
  user
} from "./authTypes";

// actionCreator 정의
export const toggleSignUpPopUp = (
  isSignUpPopUpShow: boolean
): AuthActionType => {
  return {
    type: TOGGLE_SIGNUP_POPUP,
    isSignUpPopUpShow
  };
};

export const toggleSignInPopUp = (
  isSignInPopUpShow: boolean
): AuthActionType => {
  return {
    type: TOGGLE_SIGNIN_POPUP,
    isSignInPopUpShow
  };
};

export const logInAction = (user: user) => {
  return {
    type: LOGIN,
    user
  };
};

export const logOutAction = () => {
  return {
    type: LOGOUT
  };
};
