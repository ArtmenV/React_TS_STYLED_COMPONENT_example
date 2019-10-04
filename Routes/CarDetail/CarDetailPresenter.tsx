import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Theme from "../../src/Styles/Theme";
import FatText from "../../src/Components/Commons/FatText";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import Button from "../../src/Components/Commons/Button";
import { Checkbox } from "../../src/Components/Icons/Commons";
import CarState from "../../src/Components/CarState";
const Wrapper = styled.div`
  padding: 0px 140px;
  padding-top: 150px;
  background-color: ${Theme.bgColor};
`;

const CarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 500px;
  margin-bottom: 100px;
  background-color: white;
  box-shadow: ${Theme.boxShadowThree};
`;

const CarImageContainer = styled.div`
  flex: 6;
  min-width: 360px;
  min-height: 500px;
  display: grid;
  grid-template-rows: 7.5fr 2.5fr;
`;

const ContentTitle = styled.div`
  font-weight: 600;
  font-size: 30px;
  padding-bottom: 15px;
  color: #333333;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const SelectedCarImage = styled.div<{ url: string }>`
  background-image: ${props => `url(${props.url})`};
  /* background-color: yellow; */
  background-position: center;
  background-size: cover;
`;

const CarImageList = styled.div`
  background-color: greenyellow;
`;

const CarImageItem = styled.div<{ url: string }>`
  /* background-image: ${props => `url(${props.url})`}; */

`;

const CarInfoContainer = styled.div`
  flex: 4;
  min-width: 360px;
  min-height: 400px;
  display: grid;
  grid-template-rows: 1.5fr 7fr 1.5fr;
`;

const CarInfoHeader = styled.div`
  font-size: 35px;
  font-weight: 600;
  align-self: center;
  padding: 20px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const CarInfoContent = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
`;

const CarPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarPrice = styled.div`
  font-size: 50px;
  font-weight: 900;
  & > span {
    font-size: 25px;
    font-weight: 600;
  }
`;

const CarTagContainer = styled.div`
  padding: 10px 20px;
  background-color: #fbfbfb;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 20px;
`;

const CarTag = styled.div`
  align-self: center;
  text-align: center;
  font-size: 13px;
  color: #666;
  font-weight: 600;
  padding: 5px 8px;
  background-color: white;
  border-radius: 4px;
`;
const CarInfoButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 20px;
  & > a:first-child {
    margin-right: 10px;
  }
`;

const CarInfoWishListButton = styled.div``;

const CarDetailContainer = styled.div`
  box-shadow: ${Theme.boxShadowThree};
  display: flex;
  border: ${Theme.boxBorder};
  padding: 30px;
  padding-top: 50px;

  flex-direction: column;
  & > div {
    margin-bottom: 20px;
  }
  margin-bottom: 50px;
`;

const CarOptionList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-auto-rows: 100px;
  grid-gap: 20px;
`;

const CarOptionItem = styled.div`
  font-weight: 500;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CarOptionContainer = styled.div`
  position: relative;
  &:hover {
    & > div:nth-child(2) {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const CarOptionOverLayConatiner = styled.div`
  transform: scale(0);
  opacity: 0;
  transition: 0.03s ease-in-out;
  transition: opacity 0.1s ease-in-out;
  background-color: white;
  position: absolute;
  top: -280px;
  left: -70px;
  width: 250px;
  overflow: hidden;
  height: 250px;
  border: ${Theme.boxBorder};
  border-radius: 5px;
  display: grid;
  grid-template-rows: 1.5fr 1fr;
  padding: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const CarOptionOverLayImage = styled.div<{ imageURL: string }>`
  background-image: ${props => `url(${props.imageURL})`};
  background-position: center;
  background-size: cover;
`;

const CarOptionOverLayDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 14px;
  line-height: 1.2;
  & > span {
    margin-bottom: 10px;
  }
`;

const CarPerformance = styled.div`
  min-height: 500px;
  background-color: wheat;
`;

const CarInsurance = styled.div`
  min-height: 300px;
  background-color: darkgreen;
`;

interface CarOption {
  id: string;
  name: string;
  imageURL: string;
  desc: string;
}

// type PathParamsType = {
//   param1: string;
// };

// type PropsType = RouteComponentProps<PathParamsType> & {
//   carOptions: CarOption[];
// };

// 컨테이너에서

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

interface ICarDetailPresenterProps {
  carOptions: CarOption[];
  carOwnerInfo: IcarOwnerInfo;
  carBasicInfo: IcarBasicInfo;
  carTotalState: IcarTotalState;
  carInsuranceHistory: IcarInsuranceHistory;
  price: number;
  picture: string[];
}

interface PathParamsProps {
  id: string;
}

const CarDetailPresenter: React.FunctionComponent<
  ICarDetailPresenterProps & RouteComponentProps<PathParamsProps>
> = ({
  carOptions,
  match,
  location,
  history,
  carOwnerInfo,
  carBasicInfo,
  carTotalState,
  carInsuranceHistory,
  price,
  picture
}) => {
  console.log(
    carOwnerInfo,
    carBasicInfo,
    carTotalState,
    carInsuranceHistory,
    price,
    picture
  );
  return (
    <Wrapper>
      {carOwnerInfo &&
        carBasicInfo &&
        carTotalState &&
        carInsuranceHistory &&
        price &&
        picture && (
          <>
            <CarContainer>
              <CarImageContainer>
                <SelectedCarImage url={picture[0]}></SelectedCarImage>
                <CarImageList>
                  <CarImageItem url={"r"}></CarImageItem>
                </CarImageList>
              </CarImageContainer>
              <CarInfoContainer>
                <CarInfoHeader>
                  {carBasicInfo.company}
                  {carBasicInfo.model}
                  {carBasicInfo.detailModel}
                </CarInfoHeader>
                <CarInfoContent>
                  <CarPriceContainer>
                    <CarPrice>
                      {price >= 1000
                        ? `${Math.floor(price / 1000)},${price % 1000}`
                        : price}
                      <span>만원</span>
                    </CarPrice>
                  </CarPriceContainer>
                  <CarTagContainer>
                    <CarTag>{carBasicInfo.year}연식</CarTag>
                    <CarTag>{carTotalState.distanceDriven}km</CarTag>
                    <CarTag>{carBasicInfo.transmission}</CarTag>
                    <CarTag>{carBasicInfo.fuel}</CarTag>
                    <CarTag>{carBasicInfo.guaranteeType}</CarTag>
                  </CarTagContainer>
                </CarInfoContent>
                <CarInfoButtonContainer>
                  <Link to={`/buycar/${match.params.id}`}>
                    <Button
                      text={"구매"}
                      size={"14"}
                      onClick={() => null}
                    ></Button>
                  </Link>
                  <Link to={`/buycar/${match.params.id}`}>
                    <Button
                      text={"찜하기"}
                      size={"14"}
                      onClick={() => null}
                    ></Button>
                  </Link>
                </CarInfoButtonContainer>
              </CarInfoContainer>
            </CarContainer>
            <CarDetailContainer>
              <ContentTitle>옵션정보</ContentTitle>
              <CarOptionList>
                {carOptions &&
                  carOptions.map((carOption: CarOption, index: number) => (
                    <CarOptionContainer key={index}>
                      <CarOptionItem key={carOption.id}>
                        {carOption.name}
                      </CarOptionItem>
                      <CarOptionOverLayConatiner>
                        <CarOptionOverLayImage
                          imageURL={carOption.imageURL}
                        ></CarOptionOverLayImage>
                        <CarOptionOverLayDesc>
                          <FatText size={15} text={carOption.name}></FatText>
                          {carOption.desc}
                        </CarOptionOverLayDesc>
                      </CarOptionOverLayConatiner>
                    </CarOptionContainer>
                  ))}
              </CarOptionList>
              <ContentTitle>차량점검 기록부</ContentTitle>
              <CarState
                carOwnerInfo={carOwnerInfo}
                carBasicInfo={carBasicInfo}
                carTotalState={carTotalState}
                carInsuranceHistory={carInsuranceHistory}
              ></CarState>
              {/* <CarPerformance></CarPerformance>
              <CarInsurance></CarInsurance> */}
            </CarDetailContainer>
          </>
        )}
    </Wrapper>
  );
};

export default withRouter(CarDetailPresenter);
