import React, { useEffect, FunctionComponent, useState } from "react";
import BuyCarPresenter from "./BuyCarPresenter";
import { RouteComponentProps } from "react-router-dom";
import useInput from "../../src/Components/Hooks/useInput";
import PostDetail from "../../services/post/PostDetail";
import requestKakaopay from "../../services/kakaopay/requestKakaopay";

interface MatchParams {
  id: string;
}

const BuyCarContainer: React.FunctionComponent<
  RouteComponentProps<MatchParams>
> = ({ match }) => {
  const userNameInput = useInput("한싸피");
  const phoneNumberInput = useInput("01012345678");
  const deliveryDateInput = useInput("");
  const [isAuth, setIsAuth] = useState(true);
  const deliveryAddressInput = useInput(
    "대전 광역시 유성구 삼성화재 유성연수원"
  );
  const [carBasicInfo, setCarBasicInfo] = useState();
  const [carTotalState, setCarTotalState] = useState();
  const [carOwnerInfo, setCarOwnerInfo] = useState();
  const [carInsuranceHistory, setCarInsuranceHistory] = useState();
  const [price, setPrice] = useState();
  const [picture, setPicture] = useState();
  const policyCheckbox = useInput(false);
  const buyCarApplication = async () => {
    if (userNameInput.value === "" || phoneNumberInput.value === "") {
      alert("개인정보를 입력해주세요.");
    } else if (
      deliveryDateInput.value === null ||
      deliveryAddressInput.value === ""
    ) {
      alert("배송 정보를 입력해주세요.");
    } else if (!policyCheckbox.value) {
      alert("약관에 동의해주세요");
      // 구매 신청 요청
    } else {
      const { data } = await requestKakaopay();
      const kakaopayUrl = data.split("redirect:")[1];
      const link = document.createElement("a");
      link.href = kakaopayUrl;
      link.click();
    }
  };

  const getCarDetail = async () => {
    const { data } = await PostDetail(Number(match.params.id));
    const carData = JSON.parse(data.car.carData);
    // const stringPicture = data.picture.includes(",") ? data.picture[0] : data.picture;
    let picture = data.picture.includes(",") ? data.picture : [data.picture];
    setCarBasicInfo(carData.carBasicInfo);
    setCarTotalState(carData.carTotalState);
    setCarOwnerInfo(carData.carOwnerInfo);
    setCarInsuranceHistory(carData.carInsuranceHistory);
    setPrice(data.price);
    setPicture(picture);
  };

  useEffect(() => {
    getCarDetail();
    window.scrollTo(0, 11);
  }, []);
  return (
    <BuyCarPresenter
      userNameInput={userNameInput}
      phoneNumberInput={phoneNumberInput}
      deliveryDateInput={deliveryDateInput}
      deliveryAddressInput={deliveryAddressInput}
      isAuth={isAuth}
      buyCarApplication={buyCarApplication}
      carBasicInfo={carBasicInfo}
      carTotalState={carTotalState}
      carOwnerInfo={carOwnerInfo}
      carInsuranceHistory={carInsuranceHistory}
      price={price}
      picture={picture}
      policyCheckbox={policyCheckbox}
    ></BuyCarPresenter>
  );
};

export default BuyCarContainer;
