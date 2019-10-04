import { TOGGLE_BUYCAR, MyPageActionType, TOGGLE_SELLCAR } from "./myPageTypes";

export const toggleBuyCarAction = (): MyPageActionType => {
  return {
    type: TOGGLE_BUYCAR
  };
};

export const toggleSellCarAction = (): MyPageActionType => {
  return {
    type: TOGGLE_SELLCAR
  };
};
