import {
  IAuthState,
  AuthActionType,
  TOGGLE_SIGNUP_POPUP,
  TOGGLE_SIGNIN_POPUP,
  LOGIN,
  LOGOUT
} from "./authTypes";

const initialState: IAuthState = {
  isSignUpPopUpShow: false,
  isSignInPopUpShow: false,
  loggedInUser: JSON.parse(sessionStorage.getItem("LoggedInUser"))
};

const authReducer = (
  state = initialState,
  action: AuthActionType
): IAuthState => {
  switch (action.type) {
    case TOGGLE_SIGNUP_POPUP:
      return {
        ...state,
        isSignUpPopUpShow: !state.isSignUpPopUpShow
      };
    case TOGGLE_SIGNIN_POPUP:
      return {
        ...state,
        isSignInPopUpShow: !state.isSignInPopUpShow
      };
    case LOGIN:
      sessionStorage.setItem("LoggedInUser", JSON.stringify(action.user));
      return {
        ...state,
        loggedInUser: action.user
      };
    case LOGOUT:
      sessionStorage.removeItem("LoggedInUser");
      return {
        ...state,
        loggedInUser: null
      };
    default:
      return state;
  }
};

export default authReducer;
