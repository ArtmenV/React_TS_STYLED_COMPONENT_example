import React, { useState, useEffect, FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import Theme from "../Styles/Theme";
import { PhoneIcon } from "./Icons/Header";
import ScrollDownAction from "../../reducer/header/headerActions";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import {
  toggleSignUpPopUp,
  toggleSignInPopUp,
  logOutAction
} from "../../reducer/auth/authActions";
import { rootState } from "../../reducer";
const Wrapper = styled.div`
  width: 100%;
  top: 0px;
  z-index: 20;
  position: fixed;
`;

const TopHeaderContainer = styled.div<{ isScrollDown: boolean }>`
padding : 0px 10px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    height: 70px;
    background-color: white;
    transition : 0.3s ease-in-out;
    & > div:first-child {
        margin-left : 140px;
    }
    & > div:last-child {
        margin-right : 140px;
    }
    /* transform :  translate3d(0px,0px,${props =>
      props.isScrollDown ? "-10px" : "0px"}); */
`;

const TopHeaderLogo = styled.div<{ isScrollDown: boolean }>`
  width: 200px;
  text-align: center;
  font-size: 30px;
  color: ${Theme.blueColor};
  cursor: pointer;
  transition: 0.3s ease-in-out;
  transform: ${props =>
    props.isScrollDown
      ? `translateY(0px) scale(1)`
      : `translateY(25px)scale(1.5)`};
`;

const TopHeaderMiddleBoxContainer = styled.div<{ isScrollDown: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  transition: all 0.3s ease-in-out;
  position: absolute;
  left: 40.5%;
  /* opacity: ${props => (props.isScrollDown ? "1" : "0")}; */
  transform: ${props =>
    props.isScrollDown
      ? `translateY(0px) scale(0.8)`
      : `translateY(25px)scale(1.1)`};
`;
const TopHeaderMiddleBox = styled.div`
  font-size: 25px;
  width: 150px;
  cursor: pointer;
`;
const TopHeaderSideBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TopHeaderSideBox = styled.div`
  height: 100%;
  width: 100px;
  color: grey;
  text-align: center;
  cursor: pointer;
  border-right: ${Theme.boxBorder};
`;
interface IBottomHeaderContainerProps {
  isScrollDown: boolean;
}
const BottomHeaderContainer = styled.div<IBottomHeaderContainerProps>`
  display: grid;
  grid-template-columns: 5.8fr 4.2fr;
  grid-auto-rows: 1fr;
  transition: 0.38s;
  top: 50px;
  height: ${props => (props.isScrollDown ? "0px" : "50px")};
  /* border-top: ${Theme.boxBorder};   */
  background-color: white;
  border-bottom: ${Theme.boxBorder};
`;
interface IBottomHeaderMiddleBoxContainerProps {
  isScrollDown: boolean;
}
const BottomHeaderMiddleBoxContainer = styled.div<
  IBottomHeaderMiddleBoxContainerProps
>`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  opacity: ${props => (props.isScrollDown ? 0 : 1)};
  & > a:first-child {
    margin-right: 20px;
  }
`;
const BottomHeaderMiddleBox = styled.div`
  height: 30px;
  width: 120px;
  font-size: 25px;
  cursor: pointer;
`;
interface IBottomHeaderSideBoxContainer {
  isScrollDown: boolean;
}
const BottomHeaderSideBoxContainer = styled.div<IBottomHeaderSideBoxContainer>`
  position: absolute;
  left: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition : .2s ease-in-out;
  transform-origin : top;
  transform: ${props =>
    props.isScrollDown
      ? `translateY(-20px) scale(0)`
      : `translateY(0px)scale(1)`};
  /* display: ${props => (props.isScrollDown ? "none" : "show")}; */
`;
const BottomHeaderSideBox = styled.div`
  font-size: 22px;
  height: 30px;
  width: 300px;
`;
interface Ihistory {}
const Header: FunctionComponent<RouteComponentProps<Ihistory>> = ({
  history
}) => {
  const [isScrollDown, setIsScrollDown] = useState(false);
  const dispatch = useDispatch();
  const { isSignInPopUpShow, isSignUpPopUpShow, loggedInUser } = useSelector(
    (state: rootState) => state.AuthReducer
  );
  // console.log("loggedInUser", loggedInUser);
  const headerHandler = () => {
    // console.log(scrollY);
    if (scrollY > 10) {
      if (!isScrollDown) {
        setIsScrollDown(true);
        // console.log("10넘었음!!");
        // console.log(event.target);
        // setScrollHeight(document.body.scrollTop);
      }
    } else {
      setIsScrollDown(false);
    }
  };

  useEffect(() => {
    if (isScrollDown) {
      dispatch(ScrollDownAction(true));
    } else {
      dispatch(ScrollDownAction(false));
    }
  }, [isScrollDown]);

  window.addEventListener("scroll", headerHandler);
  return (
    <Wrapper>
      <TopHeaderContainer isScrollDown={isScrollDown}>
        <Link to="/">
          <TopHeaderLogo isScrollDown={isScrollDown}>BlockCar</TopHeaderLogo>
        </Link>
        <TopHeaderMiddleBoxContainer isScrollDown={isScrollDown}>
          <Link to="/search">
            <TopHeaderMiddleBox>내차사기</TopHeaderMiddleBox>
          </Link>
          <Link to="/sellcar">
            <TopHeaderMiddleBox>내차팔기</TopHeaderMiddleBox>
          </Link>
        </TopHeaderMiddleBoxContainer>
        <TopHeaderSideBoxContainer>
          {loggedInUser == null ? (
            <>
              <TopHeaderSideBox
                onClick={() => {
                  dispatch(toggleSignInPopUp(!isSignInPopUpShow));
                }}
              >
                로그인
              </TopHeaderSideBox>
              <TopHeaderSideBox
                onClick={() => {
                  dispatch(toggleSignUpPopUp(!isSignUpPopUpShow));
                }}
              >
                회원가입
              </TopHeaderSideBox>
            </>
          ) : (
            <>
              <TopHeaderSideBox onClick={() => history.push("/mypage")}>
                {loggedInUser.id}님
              </TopHeaderSideBox>
              <TopHeaderSideBox
                onClick={() => {
                  dispatch(logOutAction());
                  window.location.reload();
                }}
              >
                로그아웃
              </TopHeaderSideBox>
            </>
          )}
        </TopHeaderSideBoxContainer>
      </TopHeaderContainer>
      <BottomHeaderContainer isScrollDown={isScrollDown}>
        {/* <BottomHeaderMiddleBoxContainer isScrollDown={isScrollDown}>
          <Link to="/search">
            <BottomHeaderMiddleBox>내차사기</BottomHeaderMiddleBox>
          </Link>
          <Link to="/sellcar">
            <BottomHeaderMiddleBox>내차팔기</BottomHeaderMiddleBox>
          </Link>
        </BottomHeaderMiddleBoxContainer> */}
        <BottomHeaderSideBoxContainer isScrollDown={isScrollDown}>
          <PhoneIcon size={30} fill={Theme.blueColor}></PhoneIcon>
          <BottomHeaderSideBox>1588-9292</BottomHeaderSideBox>
        </BottomHeaderSideBoxContainer>
      </BottomHeaderContainer>
    </Wrapper>
  );
};

export default withRouter(Header);
