import React, { FunctionComponent } from "react";
import styled from "styled-components";
import SearchResultTopBar from "../../src/Components/searchPage/SearchResultTopBar";
import CarCard from "../../src/Components/CarCard";
import Filter from "../../src/Components/searchPage/Filter";
const Wrapper = styled.div`
  width: 100%;
  display: grid;
  /* grid-auto-rows: 100vh; */
  grid-template-columns: 240px 1fr;
  color: ${props => props.theme.mainColor};
  margin-top: 120px;
`;
const ResultContainer = styled.div``;

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
const CarCardListContaienr = styled.div`
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 350px;
  grid-gap: 30px;
`;
interface ISearchPresenterProps {
  carList: car[];
}
const SearchPresenter: FunctionComponent<ISearchPresenterProps> = ({
  carList
}) => {
  window.scrollTo(0, 0);
  return (
    <Wrapper>
      <Filter />
      <ResultContainer>
        <SearchResultTopBar />
        <CarCardListContaienr>
          {carList &&
            carList.length > 0 &&
            carList.map(carItem => {
              // console.log(carItem);
              if (carItem.car && carItem.car.carData) {
                // console.log(JSON.parse(carItem.car.carData));
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
                //   picture
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
        </CarCardListContaienr>
      </ResultContainer>
    </Wrapper>
  );
};
export default SearchPresenter;
