export const SCROLL_DOWN = "SCROLL_DOWN";

/* ScrollDown */
export interface IHeaderState {
  isScrollDown: boolean;
}
interface ScrollDownAction {
  type: typeof SCROLL_DOWN;
  isScrollDown: boolean;
}

export type HeaderActionType = ScrollDownAction;
