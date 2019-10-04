import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LeftIcon, RightIcon } from "./Icons/DirectionIcon";

const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  background-color: green;
  height: 350px;
`;

interface IImageListContainerProps {
  moveSize: string;
  length: number;
  selectedImage: number;
}

const ImageListContainer = styled.div<IImageListContainerProps>`
  display: grid;
  transition: all ${props => (props.selectedImage === 0 ? "0s" : "1s")}
    ease-in-out;
  transform: translateX(-${props => props.selectedImage * 100}vw);
  grid-template-columns: ${props =>
    `repeat(${props.length},${props.moveSize});`};
`;
const Image = styled.div<{ moveSize: string; url: string }>`
  width: ${props => props.moveSize};
  height: 350px;
  background-image: ${props => `url(${props.url})`};
  background-position: center;
  background-size: cover;
`;

const ControlButton = styled.span`
  width: 40px;
  height: 40px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  position: absolute;
  bottom: 20px;
  cursor: pointer;
`;

const RightButtonContainer = styled(ControlButton)`
  right: 60px;
  font-weight: bold;
`;
const LeftButtonContainer = styled(ControlButton)`
  right: 100px;
  font-weight: bold;
  margin-right: 10px;
`;
const MainBanner: React.FunctionComponent = () => {
  const images = [
    "https://www.reborncar.co.kr/res/images/main/reborncar_yongin_PCrollingbanner.jpg",
    "https://www.reborncar.co.kr/res/images/main/visual04.png",
    "https://www.reborncar.co.kr/res/images/main/visual06_1.png",
    "https://www.reborncar.co.kr/res/images/main/visual08.jpg",
    "https://www.reborncar.co.kr/res/images/main/reborncar_yongin_PCrollingbanner.jpg"
  ];
  const [selectedImage, setSelectedImage] = useState(0);
  const moveSize = "100vw";
  const slideInterval = 4000;
  const slide = () => {
    if (selectedImage == images.length - 1) {
      setTimeout(() => {
        setSelectedImage(0);
      }, slideInterval);
    } else {
      setTimeout(() => {
        setSelectedImage(selectedImage + 1);
      }, slideInterval);
    }
  };

  useEffect(() => {
    slide();
  });

  return (
    <Wrapper>
      <ImageListContainer
        selectedImage={selectedImage}
        length={images.length}
        moveSize={moveSize}
      >
        {images.map(image => (
          <Image moveSize={moveSize} url={image}></Image>
        ))}
      </ImageListContainer>
      <LeftButtonContainer>
        <LeftIcon size={15} fill="rgba(0,0,0,0.4)"></LeftIcon>
      </LeftButtonContainer>
      <RightButtonContainer>
        <RightIcon size={15} fill="rgba(0,0,0,0.4)"></RightIcon>
      </RightButtonContainer>
    </Wrapper>
  );
};

export default MainBanner;
