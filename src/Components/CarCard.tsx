import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FullHeart, EmptyHeart } from "./Icons/Commons";
const Wrapper = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1.5fr 1fr;
  background-color: white;
`;

const CarImageOverLayContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  transition: 0.2s ease-in-out;
  opacity: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 20px;
  color: white;
  & > svg {
    margin-right: 10px;
  }
`;

const CarImageContainer = styled.div`
  display: grid;
  overflow: hidden;
  position: relative;
  &:hover {
    & > ${CarImageOverLayContainer} {
      opacity: 1;
    }
  }
`;
const CarImage = styled.div<{ url: string }>`
  background-image: ${props => `url(${props.url})`};
  background-position: center;
  background-size: cover;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CarInfoContainer = styled.div`
  padding: 10px 1px;
  & > div {
    margin-bottom: 10px;
  }
`;

const CarName = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

const CarPrice = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

const CarDetailList = styled.div`
  display: flex;
`;

const CarDetailItem = styled.div`
  margin-right: 20px;
`;

interface ICarCardProps {
  company: string;
  model: string;
  detailModel: string;
  year: number;
  fuel: string;
  price: number;
  picture: string;
  isWishList: boolean;
  carDistanceDriven: number;
  no: number;
}

const CarCard: React.FunctionComponent<ICarCardProps> = ({
  company,
  model,
  detailModel,
  year,
  fuel,
  price,
  picture,
  isWishList,
  carDistanceDriven,
  no
}) => {
  const [isWishListS, setIsWishListS] = useState(isWishList);
  const toggleWishList = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishListS(!isWishListS);
  };
  return (
    <Link to={`/search/${no}`}>
      <Wrapper>
        <CarImageContainer>
          <CarImage url={picture}></CarImage>
          <CarImageOverLayContainer onClick={toggleWishList}>
            {isWishListS ? (
              <>
                <FullHeart></FullHeart> 찜취소
              </>
            ) : (
              <>
                <EmptyHeart fill={"#FFF"}></EmptyHeart>찜하기
              </>
            )}
          </CarImageOverLayContainer>
        </CarImageContainer>
        <CarInfoContainer>
          <CarName>{`${company} ${model} ${detailModel}`}</CarName>
          <CarDetailList>
            <CarDetailItem>{year}</CarDetailItem>
            <CarDetailItem>{carDistanceDriven}</CarDetailItem>
            <CarDetailItem>{fuel}</CarDetailItem>
          </CarDetailList>
          <CarPrice>{price}만원</CarPrice>
        </CarInfoContainer>
      </Wrapper>
    </Link>
  );
};

export default CarCard;
