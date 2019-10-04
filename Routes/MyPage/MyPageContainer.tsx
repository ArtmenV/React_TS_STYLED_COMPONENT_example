import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MyPagePresenter from "./MyPagePresenter";
import { rootState } from "../../reducer";
import {
  toggleSellCarAction,
  toggleBuyCarAction
} from "../../reducer/myPage/myPageActions";

const MyPageContainer = () => {
  const { buyCarSuccess, sellCarSuccess } = useSelector(
    (state: rootState) => state.MyPageReducer
  );
  const dispatch = useDispatch();
  const setToggleSellCar = () => {
    console.log("sssss");
    dispatch(toggleSellCarAction());
  };
  const setToggleBuyCar = () => {
    console.log("bbbbb");
    dispatch(toggleBuyCarAction());
  };
  return (
    <MyPagePresenter
      buyCarSuccess={buyCarSuccess}
      sellCarSuccess={sellCarSuccess}
      setToggleSellCar={setToggleSellCar}
      setToggleBuyCar={setToggleBuyCar}
    ></MyPagePresenter>
  );
};
export default MyPageContainer;
