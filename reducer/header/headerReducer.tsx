import { SCROLL_DOWN, HeaderActionType, IHeaderState } from "./headerTypes";

const initialState: IHeaderState = {
  isScrollDown: false
};

const headerReducer = (
  state = initialState,
  action: HeaderActionType
): IHeaderState => {
  switch (action.type) {
    case SCROLL_DOWN: {
      return {
        ...state,
        isScrollDown: action.isScrollDown
      };
    }
    default:
      return state;
  }
};

export default headerReducer;
