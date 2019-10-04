import React, { useState } from "react";
import styled from "styled-components";
import { RightIcon, LeftIcon } from "../Icons/DirectionIcon";

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0px 30px;
`;

interface IFaqSlidercontainerProps {
  faqPageIndex: number;
  cardWidth: number;
}

const FaqSliderContainer = styled.div<IFaqSlidercontainerProps>`
  height: 100%;
  display: grid;
  grid-auto-columns: 280px;
  grid-auto-rows: 200px;
  grid-auto-flow: column;
  grid-gap: 20px;
  transition: 0.5s ease-in-out;
  transform: translateX(
    -${props => props.faqPageIndex * props.cardWidth + 20 * props.faqPageIndex}px
  );
`;

const FaqCardConatiner = styled.div`
  position: relative;
  &:hover > div:nth-child(2) {
    opacity: 1;
  }
`;

const Question = styled.div`
  background-color: #f5f5f5;
  height: 100%;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  padding-top: 30px;
  padding-left: 20px;
  background-image: url("http://www.ajsellcar.co.kr/_images/serviceinfo/bg_q.png");
  background-repeat: no-repeat;
  background-position: right top;
`;

const Answer = styled.div`
  padding: 10px;
  line-height: 1.3;
  transition: 0.2s ease-in-out;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0px;
  left: 0px;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: white;
  font-weight: 600;
  opacity: 0;
`;

interface IButtonProps {
  faqPageIndex: number;
  faqlength: number;
}

const Button = styled.div<IButtonProps>`
  width: 35px;
  height: 35px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 40%;
  cursor: pointer;
  z-index: 10;
`;

const LeftButton = styled(Button)`
  left: 0px;
  visibility: ${props => (props.faqPageIndex <= 0 ? "hidden" : "visible")};
`;
const RightButton = styled(Button)`
  right: 0px;
  visibility: ${props =>
    props.faqPageIndex >= props.faqlength - 3 ? "hidden" : "visible"};
`;

const Side = styled.div`
  width: 30px;
  height: 100%;
  background-color: white;
  position: absolute;
  top: 0px;
  cursor: pointer;
`;

const LeftSide = styled(Side)`
  left: 0px;
`;

const RightSide = styled(Side)`
  right: 0px;
`;

const FaqSlider = () => {
  const faqList = [
    {
      question: "고장난 차도 팔 수 있나요?",
      answer:
        " 방문 시 고장 증상에 대해 출품 기준에 문제가 없다고 판단될 경우 진행이 가능합니다."
    },
    {
      question: "계기판에 경고등이 켜져 있습니다.",
      answer:
        "계기판에 경고등이 있을 경우 해당 경고등에 대한 조치가 이루어 진 후 내차팔기 진행이 가능합니다."
    },
    {
      question: "제 차 가격은 어떻게 결정되나요?",
      answer:
        "차량 점검기록부의 차량상태 즉 옵션, 주행거리, 사고여부, 외관, 실내 상태에 따라 소유주가 직접 가격을 결정합니다."
    },
    {
      question: "내차 팔기는 어떻게 진행되나요?",
      answer:
        "본인인증을 통해서 신원확인 후 차량점검기록부를 확인해서 가격을 책정하시고 판매신청하시면 기사님이 차량을 픽업하러 갑니다. "
    },
    {
      question: "내차 사기는 어떻게 진행되나요?",
      answer:
        "본인인증을 통해서 신원확인 후 배송 날짜와 장소를 정해주시면 기사님이 차량을 직접 배송해드립니다."
    }
  ];
  const cardWidth = 280;
  const [faqPageIndex, setFaqPageIndex] = useState(0);

  const moveLeft = () => {
    setFaqPageIndex(faqPageIndex - 1);
  };
  const moveRight = () => {
    setFaqPageIndex(faqPageIndex + 1);
  };
  return (
    <Wrapper>
      <FaqSliderContainer cardWidth={cardWidth} faqPageIndex={faqPageIndex}>
        {faqList.map(faq => (
          <FaqCardConatiner>
            <Question>{faq.question}</Question>
            <Answer>{faq.answer}</Answer>
          </FaqCardConatiner>
        ))}
      </FaqSliderContainer>
      <LeftButton
        faqlength={faqList.length}
        faqPageIndex={faqPageIndex}
        onClick={moveLeft}
      >
        <LeftIcon></LeftIcon>
      </LeftButton>
      <RightButton
        faqlength={faqList.length}
        faqPageIndex={faqPageIndex}
        onClick={moveRight}
      >
        <RightIcon></RightIcon>
      </RightButton>
      <LeftSide></LeftSide>
      <RightSide></RightSide>
    </Wrapper>
  );
};

export default FaqSlider;
