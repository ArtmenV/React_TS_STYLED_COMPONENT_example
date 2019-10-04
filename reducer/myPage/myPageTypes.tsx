export const TOGGLE_BUYCAR = "TOGGLE_BUYCAR";
export const TOGGLE_SELLCAR = "TOGGLE_SELLCAR";

export interface IMyPageState {
  buyCarSuccess: boolean;
  sellCarSuccess: boolean;
}

interface ToggleBuyCarSuccess {
  type: typeof TOGGLE_BUYCAR;
}

interface ToggleSellCarSuccess {
  type: typeof TOGGLE_SELLCAR;
}

export type MyPageActionType = ToggleBuyCarSuccess | ToggleSellCarSuccess;
