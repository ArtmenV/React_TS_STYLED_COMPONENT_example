import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 120px;
`;
const MyPageTopBarSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 15vh;
  background-color: lightcyan;
`;
const StateInfoSection = styled.div`
  min-height: 35vh;
  color: white;
  border-bottom: 3px solid ${props => props.theme.blueColor};
`;
const SellCarStateContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgrey;
`;
const SellCarStateTitle = styled.div`
  padding: 0px 30%;
  font-size: 40px;
`;
const SellCarStateSubTitle = styled.div`
  font-size: 15px;
`;
const BuyCarStateContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgrey;
`;
const BuyCarStateTitle = styled(SellCarStateTitle)``;

const MyInfoListSection = styled.div`
  min-height: 70vh;
  margin: 0px 70px;
`;
const MySellCarListContainer = styled.div``;
const MyBuyCarListContainer = styled.div``;
const BuyCarMenuTitle = styled.div<{ buyCarSuccess: boolean }>`
  cursor: pointer;
  font-size: 30px;
  color: ${props =>
    props.buyCarSuccess ? props.theme.blueColor : "lightgrey"};
`;
const SellCarMenuTitle = styled.div<{ sellCarSuccess: boolean }>`
  cursor: pointer;
  font-size: 30px;
  color: ${props =>
    props.sellCarSuccess ? props.theme.blueColor : "lightgrey"};
`;
const CenterBar = styled.div`
  font-size: 30px;
  margin: 0px 20px;
  color: lightgrey;
`;
const BuyCarListTitle = styled.div`
  font-size: 30px;
  padding-top: 50px;
  padding-left: 50px;
  margin-bottom: 10px;
`;
const BuyCarListSubTitle = styled.div`
  font-size: 14px;
  padding-left: 50px;
  margin-bottom: 20px;
`;
const Line = styled.div`
  border-bottom: 1px solid lightgrey;
`;
const SellCarListTitle = styled(BuyCarListTitle)``;
const SellCarListSubTitle = styled(BuyCarListSubTitle)``;
const TopBarContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
  align-items: center;
`;
const TopBarTitle = styled.div`
  padding: 30px 0px;
  text-align: center;
`;
const CarInfoContainer = styled.div`
  min-height: 37vh;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
`;
const BoxProperty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageBox = styled.div`
  background-color: pink;
`;
const NowState = styled(BoxProperty)`
  background-color: brown;
`;
const CarNumber = styled(BoxProperty)`
  background-color: yellow;
`;
const CarModel = styled(BoxProperty)`
  background-color: goldenrod;
`;
const CarPrice = styled(BoxProperty)`
  background-color: red;
`;
interface IMyPagePresenterProps {
  buyCarSuccess: boolean;
  sellCarSuccess: boolean;
  setToggleSellCar: () => void;
  setToggleBuyCar: () => void;
}
const MyPagePresenter: FunctionComponent<IMyPagePresenterProps> = ({
  buyCarSuccess,
  sellCarSuccess,
  setToggleSellCar,
  setToggleBuyCar
}) => {
  return (
    <Wrapper>
      <MyPageTopBarSection>
        <BuyCarMenuTitle
          buyCarSuccess={buyCarSuccess}
          onClick={setToggleBuyCar}
        >
          내차사기
        </BuyCarMenuTitle>
        <CenterBar>|</CenterBar>
        <SellCarMenuTitle
          sellCarSuccess={sellCarSuccess}
          onClick={setToggleSellCar}
        >
          내차팔기
        </SellCarMenuTitle>
      </MyPageTopBarSection>
      <StateInfoSection>
        {sellCarSuccess && (
          <SellCarStateContainer>
            <SellCarStateTitle>내차팔기 조회</SellCarStateTitle>
            {/* <SellCarStateSubTitle>
              블록카에서 이용한 내차팔기 상태를 한눈에 확인하세요.
            </SellCarStateSubTitle> */}
          </SellCarStateContainer>
        )}
        {buyCarSuccess && (
          <BuyCarStateContainer>
            <BuyCarStateTitle>내차사기 조회</BuyCarStateTitle>
          </BuyCarStateContainer>
        )}
      </StateInfoSection>
      <MyInfoListSection>
        {sellCarSuccess && (
          <MySellCarListContainer>
            <SellCarListTitle>판매차량 목록</SellCarListTitle>
            <SellCarListSubTitle>
              고객님께서 최근 판매한 차량 내역입니다.
            </SellCarListSubTitle>
            <Line></Line>
            <TopBarContainer>
              <TopBarTitle>사진</TopBarTitle>
              <TopBarTitle>판매단계</TopBarTitle>
              <TopBarTitle>차량번호</TopBarTitle>
              <TopBarTitle>차량명</TopBarTitle>
              <TopBarTitle>가격</TopBarTitle>
            </TopBarContainer>
            <Line></Line>
            <CarInfoContainer>
              <ImageBox>사진</ImageBox>
              <NowState>판매중</NowState>
              <CarNumber>13우3161</CarNumber>
              <CarModel>그랜져</CarModel>
              <CarPrice>25,000,000원</CarPrice>
            </CarInfoContainer>
          </MySellCarListContainer>
        )}
        {buyCarSuccess && (
          <MyBuyCarListContainer>
            <BuyCarListTitle>구매차량 목록</BuyCarListTitle>
            <BuyCarListSubTitle>
              고객님께서 최근 구매한 차량 내역입니다.
            </BuyCarListSubTitle>
            <Line></Line>
            <TopBarContainer>
              <TopBarTitle>사진</TopBarTitle>
              <TopBarTitle>구매단계</TopBarTitle>
              <TopBarTitle>차량번호</TopBarTitle>
              <TopBarTitle>차량명</TopBarTitle>
              <TopBarTitle>가격</TopBarTitle>
            </TopBarContainer>
            <Line></Line>
            <CarInfoContainer>
              <ImageBox>사진</ImageBox>
              <NowState>배송중</NowState>
              <CarNumber>25가2521</CarNumber>
              <CarModel>스파크</CarModel>
              <CarPrice>15,000,000원</CarPrice>
            </CarInfoContainer>
          </MyBuyCarListContainer>
        )}
      </MyInfoListSection>
    </Wrapper>
  );
};

export default MyPagePresenter;
