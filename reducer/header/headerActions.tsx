import { SCROLL_DOWN, HeaderActionType } from "./headerTypes";

const ScrollDownAction = (isScrollDown: boolean): HeaderActionType => {
  return {
    type: SCROLL_DOWN,
    isScrollDown
  };
};

export default ScrollDownAction;
