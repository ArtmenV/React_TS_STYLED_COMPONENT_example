import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Button from "../../src/Components/Commons/Button";
import Theme from "../../src/Styles/Theme";

const Wrapper = styled.div`
  padding-top: 150px;
`;

const BuyCarInfoBox = styled.div`
  min-height: 60vh;
  background-color: lightgray;
  padding: 100px;
`;

const BuyCarInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  height: 30vh;
`;

const CarImage = styled.div<{ url: string }>`
  background-image: ${props => `url(${props.url})`};
  background-position: center;
  background-size: cover;
`;

const CarInfo = styled.div`
  height: 100%;
  padding: 0px 40px;
  background-color: white;
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  /* background-color: blue; */
  align-items: center;
`;

const CarInfoCarNameContainer = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const CarInfoCarTagContainer = styled.div`
  display: flex;
  & > div {
    border-right: 1px solid rgba(0, 0, 0, 0.3);
  }
  & > div:last-child {
    border-right: none;
  }
`;

const CarInfoCarPriceContainer = styled.div`
  justify-self: flex-end;
  font-size: 22px;
  font-weight: 600;
  & > span {
    font-size: 14px;
    font-weight: 500;
  }
`;

const PaymentBox = styled.div`
  background-color: #f0f0f0;
  padding: 100px;
`;

const PaymentFormContainer = styled.div`
  box-shadow: ${Theme.boxShadow};
  background-color: white;
  padding: 50px;
  margin-top: -150px;
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

const CarCertiForm = styled.form<{ isAuth: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 30px;
  background-color: ${Theme.bgColor};
  padding: 30px 50px;
  border-radius: 10px;
  box-shadow: ${Theme.boxShadow};
  color: ${props => (props.isAuth ? "black" : "#888")};
`;

const CarCertiItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
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

const CarOwnerNameInput = styled(Input)``;

const CarOwnerPhoneNumberInput = styled(Input)``;

const DeliveryDateInput = styled(Input)``;

const DeliveryAddressInput = styled(Input)``;

const ApplicationFormContainer = styled.div<{ isAuth: boolean }>`
  color: ${props => (props.isAuth ? "black" : "#888")};
  opacity: ${props => (props.isAuth ? 1 : 0.5)};
  font-weight: 600;
  font-size: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
  background-color: ${Theme.bgColor};
  padding: 30px 50px;
  border-radius: 10px;
  box-shadow: ${Theme.boxShadow};
`;

const ApplicationFormItem = styled.div``;

const BuyGuideContainer = styled.div`
  min-height: 100vh;
  background-color: darkgray;
  margin-bottom: 30px;
`;
const PaymentBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & > label {
    display: flex;
    font-size: 13px;
  }
`;

const CarTag = styled.div`
  align-self: center;
  text-align: center;
  font-size: 13px;
  color: #666;
  font-weight: 600;
  padding: 0px 8px;
  background-color: white;
`;
const BuyButton = styled.div`
  font-size: 17px;
  font-weight: 600;
  width: 13vw;
  padding: 10px 20px;
  background-color: ${Theme.blueColor};
  border-radius: 5px;
  text-align: center;
  color: white;
  cursor: pointer;
`;

const Text = styled.div``;

const CheckboxInput = styled.input``;

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

interface IUseInput {
  value: string;
  setValue: (value: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IBuyCarPresenter {
  userNameInput: IUseInput;
  phoneNumberInput: IUseInput;
  deliveryDateInput: IUseInput;
  deliveryAddressInput: IUseInput;
  isAuth: boolean;
  buyCarApplication: () => void;
  carOwnerInfo: IcarOwnerInfo;
  carBasicInfo: IcarBasicInfo;
  carTotalState: IcarTotalState;
  carInsuranceHistory: IcarInsuranceHistory;
  price: number;
  picture: string[];
  policyCheckbox: IUseInput;
}

const BuyCarPresenter: FunctionComponent<IBuyCarPresenter> = ({
  userNameInput,
  phoneNumberInput,
  deliveryDateInput,
  deliveryAddressInput,
  isAuth,
  buyCarApplication,
  carBasicInfo,
  carTotalState,
  carOwnerInfo,
  carInsuranceHistory,
  price,
  picture,
  policyCheckbox
}) => {
  return (
    <Wrapper>
      {carOwnerInfo &&
        carBasicInfo &&
        carTotalState &&
        carInsuranceHistory &&
        price &&
        picture && (
          <>
            <BuyCarInfoBox>
              <BuyCarInfoContainer>
                <CarImage url={picture[0]}></CarImage>
                <CarInfo>
                  <CarInfoCarNameContainer>
                    {carBasicInfo.company}
                    {carBasicInfo.model}
                    {carBasicInfo.detailModel}
                  </CarInfoCarNameContainer>
                  <CarInfoCarTagContainer>
                    <CarTag>{carBasicInfo.year}연식</CarTag>
                    <CarTag>{carTotalState.distanceDriven}km</CarTag>
                    <CarTag>{carBasicInfo.transmission}</CarTag>
                    <CarTag>{carBasicInfo.fuel}</CarTag>
                    <CarTag>{carBasicInfo.guaranteeType}</CarTag>
                  </CarInfoCarTagContainer>
                  <CarInfoCarPriceContainer>
                    {price >= 1000
                      ? `${Math.floor(price / 1000)},${price % 1000}`
                      : price}
                    <span>만원</span>
                  </CarInfoCarPriceContainer>
                </CarInfo>
              </BuyCarInfoContainer>
            </BuyCarInfoBox>
            <PaymentBox>
              <PaymentFormContainer>
                <FormTitle isAuth={true}>본인인증</FormTitle>
                <CarCertiForm isAuth={true} onSubmit={() => null}>
                  <CarCertiItem>
                    <Text> {"이름"}</Text>{" "}
                    <CarOwnerNameInput
                      {...userNameInput}
                      placeholder="이름을 입력해주세요."
                    ></CarOwnerNameInput>
                  </CarCertiItem>
                  <CarCertiItem>
                    <Text> {"휴대폰 번호"}</Text>
                    <CarOwnerPhoneNumberInput
                      {...phoneNumberInput}
                      placeholder={"핸드폰 번호. (ex. 01012345678)"}
                    ></CarOwnerPhoneNumberInput>
                  </CarCertiItem>
                  {/* <Button size={"14"} text={"인증하기"}></Button> */}
                </CarCertiForm>
                <FormTitle isAuth={true}>배송정보입력</FormTitle>
                <ApplicationFormContainer isAuth={true}>
                  <ApplicationFormItem>
                    <Text> {"배송 날짜"}</Text>
                    <DeliveryDateInput
                      {...deliveryDateInput}
                      disabled={!isAuth}
                      type="date"
                    ></DeliveryDateInput>
                  </ApplicationFormItem>
                  <ApplicationFormItem>
                    <Text> {"배송 주소"}</Text>
                    <DeliveryAddressInput
                      {...deliveryAddressInput}
                      disabled={!isAuth}
                      type="address"
                    ></DeliveryAddressInput>
                  </ApplicationFormItem>
                </ApplicationFormContainer>
                {/* <DeliveryContainer>
            <Text>수령 날짜 선택</Text>
            <CalendarContainer>달력</CalendarContainer>
          </DeliveryContainer> */}
                <BuyGuideContainer></BuyGuideContainer>
                <PaymentBtnContainer>
                  <label>
                    <CheckboxInput
                      {...policyCheckbox}
                      type="checkbox"
                    ></CheckboxInput>
                    약관에 동의합니다.
                  </label>
                  <BuyButton onClick={buyCarApplication}>구매</BuyButton>
                </PaymentBtnContainer>
              </PaymentFormContainer>
            </PaymentBox>
          </>
        )}
    </Wrapper>
  );
};

export default BuyCarPresenter;
