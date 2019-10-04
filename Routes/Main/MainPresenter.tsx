import React, { FunctionComponent, useRef } from "react";
import styled from "styled-components";
import MainBanner from "../../src/Components/MainBanner";
import Button from "../../src/Components/Commons/Button";
import FatText from "../../src/Components/Commons/FatText";
import CarCard from "../../src/Components/CarCard";
import Theme from "../../src/Styles/Theme";
import { SearchIcon } from "../../src/Components/Icons/Commons";
const Wrapper = styled.div`
  width: 100%;
  margin-top: 70px;
  padding-top: 80px;
`;

const SearchCarContainer = styled.div`
  background-color: lightgray;
  padding: 0px 140px;
`;

const SearchFormContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px 40px;
  box-shadow: ${Theme.boxShadow};
  position: relative;
  bottom: -20px;
  background-color: rgba(255, 255, 255, 0.9);
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0px;
  border-bottom: 2px solid ${Theme.blueColor};
`;

const SearchColumnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const SearchInputTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  & > span {
    color: ${Theme.blueColor};
  }
`;

const SearchInput = styled.input`
  margin-left: 15px;
  width: 300px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  &::placeholder {
    color: lightgray;
  }
  &:focus {
    outline: none;
  }
`;

const SearchPreFilterList = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  align-items: center;
  & > div:last-child {
    margin-left: 20px;
    width: 200px;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.6);
`;

const PreFilterItem = styled.div`
  /* width: 200px; */
`;

const LatestRegisteredCarListContainer = styled.div`
  padding: 50px 140px;
`;

const LatestRegisteredCarListHeader = styled.div`
  padding: 10px 12px;
  border-bottom: 1px solid black;
`;
const LatestRegisteredCarList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
  grid-auto-rows: 350px;
`;

interface fabricCar {
  carData: string;
  carNumber: string;
  createdAt: string;
  expiredAt: string;
  name?: any;
  phone?: any;
}

interface car {
  car: fabricCar;
  car_no: string;
  create_date: string;
  no: number;
  picture: string;
  price: number;
  seller: number;
  state: string;
}
interface select {
  value: any;
  setValue: React.Dispatch<any>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
interface company {
  en: string;
  kr: string;
  companyModels: string[];
}

interface modelDetail {
  model: string;
  carModelDetails: string[];
}

interface IMainPresenterProps {
  carList: car[];
  setIsSearchPreFilterListOpen: any;
  isSearchPreFilterListOpen: boolean;
  submitToSessionStorage: (
    company: string,
    model: string,
    modelDetail: string
  ) => void;
  companySelect: select;
  modelSelect: select;
  modelDetailSelect: select;
  companys: company[];
  modelDetails: modelDetail[];
  onCompanyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onModelSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const MainPresenter: FunctionComponent<IMainPresenterProps> = ({
  carList,
  submitToSessionStorage,
  companySelect,
  modelSelect,
  modelDetailSelect,
  companys,
  modelDetails,
  onCompanyChange,
  onModelSelectChange
}) => {
  console.log(carList);
  return (
    <Wrapper>
      <MainBanner></MainBanner>
      <SearchCarContainer>
        <SearchFormContainer>
          <SearchColumnContainer>
            <SearchInputTitle>
              블록카에서 판매하는 차 총{" "}
              <span>{carList && carList.length}대</span>
            </SearchInputTitle>
            <SearchInputContainer>
              <SearchIcon></SearchIcon>
              <SearchInput placeholder="모델 명을 입력해주세요."></SearchInput>
            </SearchInputContainer>
          </SearchColumnContainer>
          <SearchPreFilterList>
            <PreFilterItem>
              <Select value={companySelect.value} onChange={onCompanyChange}>
                {companys.map(company => {
                  return <option value={company.kr}>{company.kr}</option>;
                })}
              </Select>
            </PreFilterItem>
            <PreFilterItem>
              <Select value={modelSelect.value} onChange={onModelSelectChange}>
                {companys.map(company => {
                  if (companySelect.value === company.kr) {
                    return company.companyModels.map(carModel => (
                      <option value={carModel}>{carModel}</option>
                    ));
                  }
                })}
              </Select>
            </PreFilterItem>
            <PreFilterItem>
              <Select {...modelDetailSelect}>
                {modelDetails.map(modelDetail => {
                  if (modelSelect.value === modelDetail.model) {
                    return modelDetail.carModelDetails.map(carModelDetail => {
                      return (
                        <option value={carModelDetail}>{carModelDetail}</option>
                      );
                    });
                  }
                })}
              </Select>
            </PreFilterItem>
            <PreFilterItem>
              <Button
                size="md"
                text={"검색하기"}
                onClick={() =>
                  submitToSessionStorage(
                    companySelect.value,
                    modelSelect.value,
                    modelDetailSelect.value
                  )
                }
              ></Button>
            </PreFilterItem>
          </SearchPreFilterList>
        </SearchFormContainer>
      </SearchCarContainer>
      <LatestRegisteredCarListContainer>
        <LatestRegisteredCarListHeader>
          <FatText size={30} text="최근 등록 차량" />
        </LatestRegisteredCarListHeader>
        <LatestRegisteredCarList>
          {carList &&
            carList.length > 0 &&
            carList.map(carItem => {
              console.log(carItem);
              if (carItem.car && carItem.car.carData) {
                console.log(JSON.parse(carItem.car.carData));
                const carBasicInfo = JSON.parse(carItem.car.carData)
                  .carBasicInfo;
                const carDistanceDriven = JSON.parse(carItem.car.carData)
                  .carTotalState.distanceDriven;
                const company = carBasicInfo.company;
                const model = carBasicInfo.model;
                const detailModel = carBasicInfo.detailModel;
                const year = carBasicInfo.year;
                const fuel = carBasicInfo.fuel;
                const price = carItem.price;
                const picture = carItem.picture.includes(",")
                  ? carItem.picture[0]
                  : carItem.picture;
                // console.log(
                //   company,
                //   model,
                //   detailModel,
                //   year,
                //   fuel,
                //   price,
                //   picture,
                //   carDistanceDriven
                // );
                return (
                  <CarCard
                    no={carItem.no}
                    company={company}
                    model={model}
                    detailModel={detailModel}
                    year={year}
                    fuel={fuel}
                    price={price}
                    picture={picture}
                    isWishList={false}
                    carDistanceDriven={carDistanceDriven}
                  ></CarCard>
                );
              }
            })}
        </LatestRegisteredCarList>
      </LatestRegisteredCarListContainer>
    </Wrapper>
  );
};

export default MainPresenter;
