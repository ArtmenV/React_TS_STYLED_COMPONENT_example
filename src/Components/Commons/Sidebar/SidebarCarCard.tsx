import React from "react";
import styled from "styled-components";
import Theme from "../../../Styles/Theme";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 4fr 2fr 2fr 2fr;
`;

const CarImage = styled.div<{ url: String }>`
  background-image: ${props => `url(${props.url})`};
  background-position: center;
  background-size: cover;
`;

const CarName = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const CarPrice = styled.div`
  color: ${Theme.blueColor};
  font-size: 22px;
`;

const CarInfoList = styled.div``;

const CarInfoItem = styled.div``;

interface ISidebarCarCard {
  url: String;
  name: String;
  price: number;
  infoList: String[];
}

const SidebarCarCard: React.FunctionComponent<ISidebarCarCard> = ({
  url,
  name,
  price,
  infoList
}) => {
  return (
    <Wrapper>
      <CarImage url={url}></CarImage>
      <CarName>{name}</CarName>
      <CarPrice>{price}</CarPrice>
      <CarInfoList>
        {infoList.map((info, index) => (
          <CarInfoItem key={index}>{info}</CarInfoItem>
        ))}
      </CarInfoList>
    </Wrapper>
  );
};

export default SidebarCarCard;
