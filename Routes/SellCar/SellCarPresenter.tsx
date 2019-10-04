import React, { FunctionComponent, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import Button from "../../src/Components/Commons/Button";
import Theme from "../../src/Styles/Theme";
import FatText from "../../src/Components/Commons/FatText";
import FaqSlider from "../../src/Components/SellCar/Faqslider";
import CarState from "../../src/Components/CarState";
import process1 from "../../src/assets/image/sell_process_1.png";
import process2 from "../../src/assets/image/sell_process_2.png";
import process3 from "../../src/assets/image/sell_process_3.png";
const Wrapper = styled.div`
  margin-top: 120px;
`;

const SellCarContainer = styled.div<{ url: string }>`
  background-repeat: no-repeat;
  background-position-x: -200px;
  background-size: 1800px 570px;
  background-image: ${props => `url(${props.url})`};
  background-color: #939aad;
  min-height: 65vh;
  display: grid;
  grid-template-rows: 200px 1.5fr;
  padding: 100px;
  padding-bottom: 0px;
`;

const SellCarTitle = styled.div`
  text-align: center;
  color: #fffff0;

  font-size: 40px;
  font-weight: 600;
  & > span {
    font-weight: 600;
    font-size: 22px;
    margin-top: 25px;
  }
`;

const SellCarFormContainer = styled.form`
  background-color: white;
  box-shadow: none;
  border-radius: ${Theme.boxBorder};
  padding: 40px;
  margin-bottom: -50px;
  border-radius: 5px;
  box-shadow: ${Theme.boxShadow};
  z-index: 10;
  & > div {
    margin-bottom: 30px;
  }
`;

const Text = styled.div`
  padding: 5px;
`;

const CarCertiFormTitle = styled.div`
  font-weight: 600;
  font-size: 30px;
  padding-bottom: 15px;
  color: #333333;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const CarCertiForm = styled.form`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  align-items: center;
  margin-bottom: 30px;
  margin-bottom: 30px;
  background-color: ${Theme.bgColor};
  padding: 30px 50px;
  border-radius: 10px;
  box-shadow: ${Theme.boxShadow};
`;

const CarCertiItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  color: #666666;
  font-weight: 600;
  font-size: 15px;
  & > div:first-child {
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  padding: 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 90%;
  font-size: 12px;
`;

const FormTitle = styled.div<{ isAuth: boolean }>`
  font-size: 20px;
  font-weight: 600;
  padding: 10px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  opacity: ${props => (props.isAuth ? 1 : 0.4)};

  color: ${props => (props.isAuth ? "black" : "#888")};
`;

const CarOwnerNameInput = styled(Input)``;

const CarOwnerPhoneNumberInput = styled(Input)``;

const CarNumberInput = styled(Input)``;

const CarPriceInput = styled(Input)``;

const PickUpDateInput = styled(Input)``;

const PickUpAddressInput = styled(Input)``;

const CarPerformance = styled.div`
  padding: 50px;
  min-height: 100px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ApplicationFormContainer = styled.div<{ isAuth: boolean }>`
  color: #666666;
  font-weight: 600;
  font-size: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  background-color: ${Theme.bgColor};
  padding: 30px 50px;
  border-radius: 10px;
  box-shadow: ${Theme.boxShadow};
  opacity: ${props => (props.isAuth ? 1 : 0.4)};
  color: ${props => (props.isAuth ? "black" : "#888")};
`;

const ApplicationFormItem = styled.div``;

const SellCarProcess = styled.div`
  padding: 100px;
  background-color: #f7f7f7;
  min-height: 100vh;
  position: relative;
`;

const PhoneAuthContainer = styled.div``;

const PhoneAuthContainerInputContainer = styled.div`
  margin-top: 5px;
  padding: 0px 5px;
  background-color: white;
  display: flex;
  align-items: center;
`;

const PhoneAuthInput = styled(Input)`
  border: none;
  width: 90px;
`;

const PhoneAuthTime = styled.span<{ isPhoneAuthIng: boolean }>`
  font-size: 13px;
  color: ${props => (props.isPhoneAuthIng ? "#eb2f06" : "lightgray")};
`;

const BaseTimeLine = styled.div`
  /* top: 5%; */
  left: 50%;
  position: absolute;
  height: 100%;
  background-color: #e7e7e7;
  width: 4px;
`;

const CurrentTimeLine = styled.div<{ processNumber: number }>`
  transition: 0.6s ease-in-out;
  height: ${props =>
    props.processNumber > 0
      ? `${400 * (props.processNumber - 1) + 28}px`
      : "0px"};
  background-color: ${Theme.blueColor};
`;

const ProcessColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 400px;
  overflow: visible;
`;

const ProcessTextContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  padding-top: 20px;
  position: relative;
  line-height: 1.4;
  font-weight: 600;
  color: #969696;
`;

const ProcessRightTextContainer = styled(ProcessTextContainer)`
  grid-template-columns: 3fr 7fr;
`;

const ProcessLeftTextContainer = styled(ProcessTextContainer)`
  grid-template-columns: 7fr 3fr;
  text-align: right;
`;

const ProcessTitleContainer = styled.div``;

const ProcessTitle = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: ${Theme.blueColor};
`;

const ProcessSubTitle = styled.div`
  margin-top: 10px;
  line-height: 1.5;
`;

const ProcessDot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid ${Theme.blueColor};
  background-color: white;
  position: absolute;
  top: 25.5px;
`;

const ProcessLeftDot = styled(ProcessDot)`
  left: -4.5px;
`;
const ProcessRightDot = styled(ProcessDot)`
  right: -9.5px;
`;

const ProcessTextLine = styled.div`
  border-top: 2px solid ${Theme.blueColor};
  margin: 0px 16px;
  margin-top: 10px;
`;

const ProcessImageContainer = styled.div<{ url: string }>`
  background-image: ${props => `url(${props.url})`};
  background-position: center;
  background-position-y: center;
  background-size: 1600px 700px;
  background-repeat: no-repeat;
  margin: 20px;
  position: relative;
  top: -40px;
  /* background-color: goldenrod; */
`;
const SellCarFAQContainer = styled.div`
  padding: 30px;
  margin: 0px 100px;
  margin-top: -70px;
  margin-bottom: 50px;
  background-color: white;
  display: grid;
  grid-gap: 20px;
  min-height: 45vh;
  grid-template-rows: 70px 1fr;
  border-radius: 5px;
  box-shadow: ${Theme.boxShadow};
  z-index: 11;
  position: relative;
  & > div:nth-child(1) > div {
    margin-top: 20px;
  }
`;

const Faqcolumn = styled.div``;

interface IUseInput {
  value: string;
  setValue: (value: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IcarOwnerInfo {
  ownerName: string;
  ownerPhoneNumber: string;
}
interface IcarBasicInfo {
  company: string;
  model: string;
  detailModel: string;
  year: string;
  number: string;
  inspectionValiDate: string;
  firstRegisterDate: string;
  transmission: string;
  fuel: string;
  chassisNumber: string;
  guaranteeType: string;
  primeMoverType: string;
}

interface IcarTotalState {
  instrumentPanelState: string;
  distanceDriven: string;
  carNumberShowState: string;
  exhaustGas: string;
  tuning: string;
  specialRecode: string;
  carUsageChange: string;
  colorState: string;
}

interface IcarInsuranceHistory {
  carNumberChangeCount: string;
  carMyAccidentCount: string;
  carAnotherAccidentCount: string;
}

interface IcarState {
  carOwnerInfo: IcarOwnerInfo;
  carBasicInfo: IcarBasicInfo;
  carTotalState: IcarTotalState;
  carInsuranceHistory: IcarInsuranceHistory;
}

interface ISellCarPresenterProps {
  onWheel: (e: React.WheelEvent) => void;
  currentTimeLineRef: any;
  sellCarProcessRef: any;
  ProcessCardHeight: number;
  processNumber: number;
  userNameInput: IUseInput;
  phoneNumberInput: IUseInput;
  carNumberInput: IUseInput;
  onUserFormSubmit: (e: React.FormEvent) => void;
  onApplicationFormSubmit: (e: React.FormEvent) => void;
  carPriceInput: IUseInput;
  pickUpDateInput: IUseInput;
  pickUpAddressInput: IUseInput;
  isAuth: boolean;
  carState: IcarState;
  isPhoneAuthIng: boolean;
  phoneAuthTime: number;
  secretKeyInput: IUseInput;
}

const SellCarPresenter: FunctionComponent<ISellCarPresenterProps> = ({
  onWheel,
  currentTimeLineRef,
  sellCarProcessRef,
  ProcessCardHeight,
  processNumber,
  userNameInput,
  phoneNumberInput,
  carNumberInput,
  onUserFormSubmit,
  onApplicationFormSubmit,
  carPriceInput,
  pickUpDateInput,
  pickUpAddressInput,
  isAuth,
  carState,
  isPhoneAuthIng,
  phoneAuthTime,
  secretKeyInput
}) => {
  console.log(processNumber);
  return (
    <Wrapper onWheel={onWheel}>
      {/* <img src={process}></img> */}
      <SellCarContainer
        url={
          "https://www.kcar.com/resources/images/index/pc_index_visual_0926.jpg"
        }
      >
        <SellCarTitle>
          {`1분만에 차팔기는 블록카!`}
          <br></br>
          <span>픽업부터 입고, 관리 판매까지 직접</span>
        </SellCarTitle>
        <SellCarFormContainer onSubmit={onApplicationFormSubmit}>
          <CarCertiFormTitle>간편신청</CarCertiFormTitle>
          <FormTitle isAuth={true}>본인 인증 </FormTitle>
          <CarCertiForm onSubmit={onUserFormSubmit}>
            <CarCertiItem>
              <Text> {"이름"}</Text>{" "}
              <CarOwnerNameInput
                disabled={isPhoneAuthIng}
                {...userNameInput}
                placeholder="이름을 입력해주세요."
              ></CarOwnerNameInput>
            </CarCertiItem>
            <CarCertiItem>
              <Text> {"휴대폰 번호"}</Text>
              <CarOwnerPhoneNumberInput
                disabled={isPhoneAuthIng}
                {...phoneNumberInput}
                placeholder={"핸드폰 번호. (ex. 01012345678)"}
              ></CarOwnerPhoneNumberInput>
            </CarCertiItem>
            <CarCertiItem>
              <Text> {"차량 번호"}</Text>{" "}
              <CarNumberInput
                disabled={isPhoneAuthIng}
                {...carNumberInput}
                placeholder={"차량번호 (ex. 52오2525)"}
              ></CarNumberInput>
            </CarCertiItem>
            <PhoneAuthContainer>
              {isPhoneAuthIng ? (
                <Button size={"14"} text={"인증번호 확인"}></Button>
              ) : (
                <Button size={"14"} text={"인증요청"}></Button>
              )}

              <PhoneAuthContainerInputContainer>
                <PhoneAuthInput
                  {...secretKeyInput}
                  placeholder="인증번호"
                ></PhoneAuthInput>
                <PhoneAuthTime isPhoneAuthIng={isPhoneAuthIng}>
                  {`0${Math.floor(phoneAuthTime / 60)}`} :
                  {phoneAuthTime % 60 < 10
                    ? ` 0${phoneAuthTime % 60}`
                    : ` ${phoneAuthTime % 60}`}
                </PhoneAuthTime>
              </PhoneAuthContainerInputContainer>
            </PhoneAuthContainer>
          </CarCertiForm>
          <FormTitle isAuth={isAuth}>차량 성능점검기록부 </FormTitle>
          <CarPerformance>
            {isAuth && carState ? (
              <CarState
                carOwnerInfo={carState.carOwnerInfo}
                carBasicInfo={carState.carBasicInfo}
                carTotalState={carState.carTotalState}
                carInsuranceHistory={carState.carInsuranceHistory}
              ></CarState>
            ) : (
              "차량 성능점검기록부는 본인인증을 해야 열람가능 합니다. "
            )}
          </CarPerformance>
          <FormTitle isAuth={isAuth}>구매정보</FormTitle>
          <ApplicationFormContainer isAuth={isAuth}>
            <ApplicationFormItem>
              <Text> {"가격"}</Text>
              <CarPriceInput
                disabled={!isAuth}
                {...carPriceInput}
              ></CarPriceInput>
            </ApplicationFormItem>
            <ApplicationFormItem>
              <Text> {"픽업 날짜"}</Text>
              <PickUpDateInput
                disabled={!isAuth}
                {...pickUpDateInput}
                type="date"
              ></PickUpDateInput>
            </ApplicationFormItem>
            <ApplicationFormItem>
              <Text> {"픽업 주소"}</Text>
              <PickUpAddressInput
                disabled={!isAuth}
                {...pickUpAddressInput}
                type="address"
              ></PickUpAddressInput>
            </ApplicationFormItem>
          </ApplicationFormContainer>

          <Button size={"25"} text={"신청하기"}></Button>
        </SellCarFormContainer>
      </SellCarContainer>
      <SellCarProcess ref={sellCarProcessRef}>
        <BaseTimeLine>
          <CurrentTimeLine
            processNumber={processNumber}
            ref={currentTimeLineRef}
          ></CurrentTimeLine>
        </BaseTimeLine>
        <ProcessColumn data-aos="fade-in">
          <ProcessImageContainer
            url={process1}
            data-aos="fade-up"
          ></ProcessImageContainer>
          <ProcessRightTextContainer data-aos="fade-in">
            <ProcessLeftDot></ProcessLeftDot>
            <ProcessTextLine></ProcessTextLine>
            <ProcessTitleContainer>
              <ProcessTitle>1. 판매 차량 소유주 본인 인증</ProcessTitle>
              <ProcessSubTitle>
                {`개인 정보 및 차량번호 입력 차량번호를 입력하시면`}
                <br></br>{" "}
                {`차량 정보를
                확인하실 수 있습니다.`}
              </ProcessSubTitle>
            </ProcessTitleContainer>
          </ProcessRightTextContainer>
        </ProcessColumn>
        <ProcessColumn>
          <ProcessLeftTextContainer data-aos="fade-in">
            <ProcessRightDot></ProcessRightDot>
            <ProcessTitleContainer>
              <ProcessTitle>2. 가격 결정 및 픽업 장소, 시간 선택</ProcessTitle>
              <ProcessSubTitle>
                {`차량 점검 기록부를 확인하신 후에 가격을 정하시고 `}
                <br></br> {`픽업 날짜와 시간을 선택하실 수 있습니다.`}
              </ProcessSubTitle>
            </ProcessTitleContainer>
            <ProcessTextLine></ProcessTextLine>
          </ProcessLeftTextContainer>
          <ProcessImageContainer
            url={process2}
            data-aos="fade-left"
          ></ProcessImageContainer>
        </ProcessColumn>
        <ProcessColumn>
          <ProcessImageContainer
            url={process3}
            data-aos="fade-right"
          ></ProcessImageContainer>
          <ProcessRightTextContainer data-aos="fade-in">
            <ProcessLeftDot></ProcessLeftDot>
            <ProcessTextLine></ProcessTextLine>
            <ProcessTitleContainer>
              <ProcessTitle>3. 판매 신청 확인</ProcessTitle>
              <ProcessSubTitle>
                {`판매신청 완료 후 `}
                <br></br> {`정보를 확인하실 수 있습니다. `}
              </ProcessSubTitle>
            </ProcessTitleContainer>
          </ProcessRightTextContainer>
        </ProcessColumn>
        <ProcessColumn>
          <ProcessLeftTextContainer data-aos="fade-in">
            <ProcessRightDot></ProcessRightDot>
            <ProcessTitleContainer>
              <ProcessTitle>4. 전문 기사님의 차량진단 및 서류작성</ProcessTitle>
              <ProcessSubTitle>
                {`픽업 날 전문 기사님이 방문하여 차량을 진단하고`}
                <br></br> {`손쉽게 서류를 작성하실 수 있도록 도와드립니다.`}
              </ProcessSubTitle>
            </ProcessTitleContainer>
            <ProcessTextLine></ProcessTextLine>
          </ProcessLeftTextContainer>
          <ProcessImageContainer
            url={process1}
            data-aos="flip-right"
          ></ProcessImageContainer>
        </ProcessColumn>
        <ProcessColumn>
          <ProcessImageContainer
            url={process1}
            data-aos="fade-up"
          ></ProcessImageContainer>
          <ProcessRightTextContainer data-aos="fade-in">
            <ProcessLeftDot></ProcessLeftDot>
            <ProcessTextLine></ProcessTextLine>
            <ProcessTitleContainer>
              <ProcessTitle>1. 판매 차량 소유주 본인 인증</ProcessTitle>
              <ProcessSubTitle>
                {`개인 정보 및 차량번호 입력 차량번호를 입력하시면`}
                <br></br>{" "}
                {`차량 정보를
                확인하실 수 있습니다.`}
              </ProcessSubTitle>
            </ProcessTitleContainer>
          </ProcessRightTextContainer>
        </ProcessColumn>
      </SellCarProcess>
      <SellCarFAQContainer>
        <Faqcolumn>
          <FatText size={30} text={"내차 팔기 FAQ"}></FatText>
          <Text>{"팔기 전에 확인해보세요!"}</Text>
        </Faqcolumn>
        <FaqSlider></FaqSlider>
      </SellCarFAQContainer>
    </Wrapper>
  );
};
export default SellCarPresenter;
