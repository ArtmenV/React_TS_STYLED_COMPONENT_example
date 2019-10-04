import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import SellCarPresenter from "./SellCarPresenter";
import useInput from "../../src/Components/Hooks/useInput";

import { rootState } from "../../reducer";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import authSellUser from "../../services/auth/authSellUser";
import addSales from "../../services/sales/addSales";
import authPhone from "../../services/auth/authPhone";

interface ImatchProps {}

const SellCarContainer: FunctionComponent<RouteComponentProps<ImatchProps>> = ({
  history
}) => {
  const currentTimeLineRef = useRef(null);
  const sellCarProcessRef = useRef(null);
  const [processNumber, setProcessNumber] = useState(0);
  const { loggedInUser } = useSelector((state: rootState) => state.AuthReducer);
  // 인증을 위한 form input
  const userNameInput = useInput("한만섭");
  const phoneNumberInput = useInput("01077652362");
  const carNumberInput = useInput("99구9999");
  const ProcessCardHeight = 400;
  const [isAuth, setIsAuth] = useState(false);
  const [isPhoneAuthIng, setIsPhoneAuthIng] = useState(false);
  const [carState, setCarState] = useState();
  const [secretKey, setSecretKey] = useState();
  // 판매 신청을 위한 form input
  const carPriceInput = useInput(2000);
  const pickUpDateInput = useInput("");
  const secretKeyInput = useInput("");
  const pickUpAddressInput = useInput("대전 광역시 유성구 삼성화재 유성연수원");
  const [phoneAuthTime, setPhoneAuthTime] = useState(180);
  const generateRandom = () => {
    let randomNumber = "";
    for (let i = 0; i < 6; i++) {
      randomNumber = randomNumber + String(Math.floor(Math.random() * 9) + 1);
    }
    return randomNumber;
  };

  // 유저 신청 시 호출 함수
  const onUserFormSubmit = async (e: React.FormEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!loggedInUser) {
      alert("판매 신청은 로그인이 필요한 기능입니다.");
      return;
    } else if (isPhoneAuthIng) {
      if (secretKeyInput.value === secretKey) {
        alert("본인인증이 완료되었습니다.");
        const data = await authSellUser(
          userNameInput.value,
          phoneNumberInput.value,
          carNumberInput.value
        );
        setCarState(JSON.parse(data.carData));
        setIsPhoneAuthIng(false);
        setIsAuth(true);
      } else {
        alert("인증번호가 틀렸습니다. 다시 확인해주세요.");
      }
    } else {
      const data = await authSellUser(
        userNameInput.value,
        phoneNumberInput.value,
        carNumberInput.value
      );
      if (data === "") {
        alert("차량정보가 존재하지 않습니다. 다시 확인해주세요");
      } else {
        const ownerInfo = JSON.parse(data.carData).carOwnerInfo;
        if (
          userNameInput.value === ownerInfo.ownerName &&
          phoneNumberInput.value === ownerInfo.ownerPhoneNumber
        ) {
          alert("문자로 전송된 인증번호를 입력해주세요.");
          //핸드폰 번호 인증 안할 때
          setIsAuth(true);
          setCarState(JSON.parse(data.carData));
          console.log(generateRandom());

          //핸드폰 번호 인증할 때
          // const randomNumber = generateRandom();
          // const isSendSMS = await authPhone(
          //   randomNumber,
          //   phoneNumberInput.value
          // );
          // console.log(isSendSMS);
          // if (isSendSMS) {
          //   setSecretKey(randomNumber);
          //   setIsPhoneAuthIng(true);
          //   setPhoneAuthTime(phoneAuthTime - 1);
          // }
        } else {
          alert("핸드폰 번호 및 이름을 다시 확인해주세요.");
        }
      }
    }
  };

  const onApplicationFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("판매 신청 폼 제출");
    // console.log(loggedInUser);
    const data = await addSales(
      carPriceInput.value,
      pickUpDateInput.value,
      pickUpAddressInput.value,
      phoneNumberInput.value,
      loggedInUser.seq,
      carNumberInput.value,
      userNameInput.value
    );
    if (data) {
      history.push("sellcar/success");
    }
  };

  // 판매 프로세스 애니메이션을 위한 휠 이벤트
  const onWheel = (e: React.WheelEvent) => {
    const animationStartPosition =
      sellCarProcessRef.current.offsetTop - window.innerHeight * 0.9;
    if (window.pageYOffset < animationStartPosition) {
      setProcessNumber(0);
    } else if (
      window.pageYOffset > animationStartPosition &&
      window.pageYOffset < animationStartPosition + ProcessCardHeight
    ) {
      setProcessNumber(1);
    } else if (
      window.pageYOffset >= animationStartPosition + ProcessCardHeight &&
      window.pageYOffset < animationStartPosition + ProcessCardHeight * 2
    ) {
      setProcessNumber(2);
    } else if (
      window.pageYOffset >= animationStartPosition + ProcessCardHeight * 2 &&
      window.pageYOffset < animationStartPosition + ProcessCardHeight * 3
    ) {
      setProcessNumber(3);
    } else if (
      window.pageYOffset >= animationStartPosition + ProcessCardHeight * 3 &&
      window.pageYOffset < animationStartPosition + ProcessCardHeight * 4
    ) {
      setProcessNumber(4);
    }
    if (window.pageYOffset >= animationStartPosition + ProcessCardHeight * 4) {
      setProcessNumber(5);
    }
  };

  const countDown = () => {
    setTimeout(() => {
      setPhoneAuthTime(phoneAuthTime - 1);
    }, 1000);
  };
  useEffect(() => {
    if (isPhoneAuthIng && phoneAuthTime > 0) {
      countDown();
    }
  }, [phoneAuthTime]);

  return (
    <SellCarPresenter
      onWheel={onWheel}
      currentTimeLineRef={currentTimeLineRef}
      sellCarProcessRef={sellCarProcessRef}
      ProcessCardHeight={ProcessCardHeight}
      processNumber={processNumber}
      userNameInput={userNameInput}
      phoneNumberInput={phoneNumberInput}
      carNumberInput={carNumberInput}
      onUserFormSubmit={onUserFormSubmit}
      onApplicationFormSubmit={onApplicationFormSubmit}
      carPriceInput={carPriceInput}
      pickUpDateInput={pickUpDateInput}
      pickUpAddressInput={pickUpAddressInput}
      isAuth={isAuth}
      carState={carState}
      isPhoneAuthIng={isPhoneAuthIng}
      phoneAuthTime={phoneAuthTime}
      secretKeyInput={secretKeyInput}
    ></SellCarPresenter>
  );
};

export default SellCarContainer;
