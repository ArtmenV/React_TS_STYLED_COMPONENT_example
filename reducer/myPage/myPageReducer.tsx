import {
  IMyPageState,
  MyPageActionType,
  TOGGLE_BUYCAR,
  TOGGLE_SELLCAR
} from "./myPageTypes";

const initialState: IMyPageState = {
  buyCarSuccess: true,
  sellCarSuccess: false
};

const myPageReducer = (
  state = initialState,
  action: MyPageActionType
): IMyPageState => {
  switch (action.type) {
    case TOGGLE_BUYCAR: {
      console.log("TOGGLE_BUYCAR");
      return {
        buyCarSuccess: true,
        sellCarSuccess: false
      };
    }
    case TOGGLE_SELLCAR: {
      console.log("TOGGLE_SELLCAR");
      return {
        buyCarSuccess: false,
        sellCarSuccess: true
      };
    }
    default: {
      return state;
    }
  }
};

export default myPageReducer;
