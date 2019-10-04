import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { rootState } from "../../reducer";
import { useSelector, useDispatch } from "react-redux";
import { SuccessIcon } from "../../src/Components/Icons/SuccessPage";
import Theme from "../../src/Styles/Theme";
import { Link } from "react-router-dom";
import { toggleBuyCarAction } from "../../reducer/myPage/myPageActions";

const Wrapper = styled.div`
  padding: 0px 200px;
  padding-top: 120px;
`;

const HeaderContainer = styled.div`
  font-size: 25px;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const MainContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  /* background-color: #f9f9f9; */
  padding: 20px 0px;
  display: grid;
  text-align: center;
  box-shadow: ${Theme.boxShadow};
  /* align-items: center; */
`;

const SuccessIconContainer = styled.div``;

const SuccessTextContainer = styled.div`
  font-size: 25px;
  padding: 20px 0px;
`;

const BuyInfoList = styled.div`
  margin: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 5fr 6fr 2fr;
  text-align: center;
  border-radius: 5px;
  font-size: 13px;
  color: ${Theme.darkGreyColor};
  font-weight: 600;
  border-right: none;
`;

const BuyInfoItem = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  & > div:last-child {
    border-right: none;
  }
`;

const BuyInfoTitle = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 20px 5px;
`;

const BuyInfoText = styled.div``;

const PriceText = styled.div`
  color: #dc3d3c;
  font-size: 22px;
`;

const Button = styled(Link)`
  cursor: pointer;
  padding: 8px 13px;
  border-radius: 5px;
  transition: all 0.1s ease-in-out;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const HomeButton = styled(Button)`
  background-color: #999;
  color: white;
  border: none;
  border-radius: 4px;
  margin-right: 20px;
`;

const MyPageButton = styled(Button)`
  color: white;
  background-color: ${Theme.blueColor};
  border: none;
  border-radius: 4px;
`;

const BuyApplicationSuccess = () => {
  const { loggedInUser } = useSelector((state: rootState) => state.AuthReducer);
  const [lastestBuyApplication, setLastestBuyApplication] = useState();
  useEffect(() => {
    // searchBuyListByUser(loggedInUser.seq).then(res => {
    //   setLastestBuyApplication(res[res.length - 1]);
    //   console.log(res[res.length - 1]);
    // });
  }, []);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <HeaderContainer>
        <span>구매신청</span>완료
      </HeaderContainer>
      <MainContainer>
        <SuccessIconContainer>
          <SuccessIcon size={40} fill={"#2ecc71"}></SuccessIcon>
        </SuccessIconContainer>
        <SuccessTextContainer>
          구매신청이 성공적으로 완료되었습니다.
        </SuccessTextContainer>
        <BuyInfoList>
          <BuyInfoItem>
            <BuyInfoTitle>구매자 이름</BuyInfoTitle>
            <BuyInfoText>한만섭</BuyInfoText>
          </BuyInfoItem>
          <BuyInfoItem>
            <BuyInfoTitle>구매자 번호 </BuyInfoTitle>
            <BuyInfoText>01012345678</BuyInfoText>
          </BuyInfoItem>
          <BuyInfoItem>
            <BuyInfoTitle>배송 날짜</BuyInfoTitle>
            <BuyInfoText>{"2019-09-21"}</BuyInfoText>
          </BuyInfoItem>
          <BuyInfoItem>
            <BuyInfoTitle>배송 장소</BuyInfoTitle>
            <BuyInfoText>{"대전광역시 유성구 삼성화재 유성연수원"}</BuyInfoText>
          </BuyInfoItem>
          <BuyInfoItem>
            <BuyInfoTitle>가 격 </BuyInfoTitle>
            <PriceText>2000만원</PriceText>
          </BuyInfoItem>
          <BuyInfoItem>
            <BuyInfoTitle>상태 </BuyInfoTitle>
            <BuyInfoText>신청 완료</BuyInfoText>
          </BuyInfoItem>
        </BuyInfoList>
      </MainContainer>
      <ButtonContainer>
        <HomeButton to="/">홈으로</HomeButton>
        <MyPageButton
          to="/mypage"
          onClick={() => dispatch(toggleBuyCarAction())}
        >
          구매내역보기
        </MyPageButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default BuyApplicationSuccess;
