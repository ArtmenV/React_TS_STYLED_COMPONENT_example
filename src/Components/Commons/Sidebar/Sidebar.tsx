import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Theme from "../../../Styles/Theme";
import { ClockIcon, CarIcon, CloseIcon } from "../../Icons/SidebarIcon";
import { RightIcon, LeftIcon, UpIcon } from "../../Icons/DirectionIcon";
import { rootState } from "../../../../reducer";
import FatText from "../FatText";

interface IWrapperProps {
  isSideOpen: boolean;
  isCarListOpen: boolean;
  isScrollDown: boolean;
  sidebarState: number;
}

const Wrapper = styled.div<IWrapperProps>`
  height: 100vh;
  position: fixed;
  top: ${props => (props.isScrollDown ? "70px" : "120px")};
  right: 0px;
  width: 450px;
  display: grid;
  background-color: transparent;
  transition: 0.2s ease-in-out;
  grid-template-columns: 20px 70px 360px;
  transform: translateX(
    ${props =>
      props.sidebarState === 2
        ? "0px"
        : props.sidebarState === 1
        ? "360px"
        : "430px"}
  );
  /* transform: translateX(
    ${props =>
      props.isCarListOpen ? "90px" : props.isSideOpen ? "410px" : "480px"}
  ); */
  z-index: 30;
`;

const ControlButtonContainer = styled.div`
  align-self: center;
  cursor: pointer;
`;

const ControlButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Theme.sideBarColor};
  height: 100px;
`;

const SideBarControllerContainer = styled.div`
  background-color: ${Theme.sideBarColor};
`;

const SideBarControllerList = styled.div``;

const SideBarControllerItem = styled.div`
  min-height: 79px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 3px;
  border-bottom: ${Theme.boxBorder};
`;

const SideBarControllerText = styled.span`
  padding-top: 10px;
  font-size: 11px;
`;

const SideBarContentContainer = styled.div`
  background-color: #f5f5f5;
  padding: 30px;
`;

const SideBarContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: ${Theme.boxBorder};
  & > div:first-child > div {
    padding-top: 10px;
    & > span {
      color: red;
    }
  }
`;

const SideBarContentHeaderColumn = styled.div``;

const CloseIconContainer = styled.div``;
const SideBarContentMain = styled.div``;
const TopButtonCotainer = styled.div`
  position: absolute;
  bottom: 70px;
  width: 70px;
  height: 70px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div``;

const Sidebar: React.FunctionComponent = () => {
  const RECENTLY = "최근본차량";
  const WISHLIST = "찜목록";

  // 헤더 사이즈에 따른 사이드 바 크기 조절
  const isScrollDown = useSelector(
    (state: rootState) => state.HeaderReducer.isScrollDown
  );

  const [selectedContent, setSelectedContent] = useState(RECENTLY);
  const [sidebarState, setSidebarState] = useState(0);
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isCarListOpen, setIsCarListOpen] = useState(false);

  // 사이드바 열고 닫는 메소드
  const toggleSidebar = () => {
    if (sidebarState === 0) {
      setSidebarState(1);
    } else if (sidebarState === 1) {
      setSidebarState(0);
    } else if (sidebarState === 2) {
      setSidebarState(1);
    }
  };

  const recentlyViewListToggle = () => {
    if (sidebarState === 1) {
      setSidebarState(2);
      setSelectedContent(RECENTLY);
    } else if (sidebarState === 2) {
      selectedContent === RECENTLY
        ? setSidebarState(1)
        : setSelectedContent(RECENTLY);
    }
  };

  const wishListToggle = () => {
    if (sidebarState === 1) {
      setSidebarState(2);
      setSelectedContent(WISHLIST);
    } else if (sidebarState === 2) {
      selectedContent === WISHLIST
        ? setSidebarState(1)
        : setSelectedContent(WISHLIST);
    }
  };
  return (
    <Wrapper
      isSideOpen={isSideOpen}
      isCarListOpen={isCarListOpen}
      isScrollDown={isScrollDown}
      sidebarState={sidebarState}
    >
      <ControlButtonContainer>
        <ControlButton onClick={toggleSidebar}>
          {sidebarState === 1 || sidebarState === 2 ? (
            <RightIcon size={15} fill={"#A7B5B9"} />
          ) : (
            <LeftIcon size={15} fill={"#A7B5B9"} />
          )}
        </ControlButton>
      </ControlButtonContainer>
      <SideBarControllerContainer>
        <SideBarControllerList>
          <SideBarControllerItem onClick={recentlyViewListToggle}>
            <ClockIcon></ClockIcon>
            <SideBarControllerText>{"최근본차량"}</SideBarControllerText>
          </SideBarControllerItem>
          <SideBarControllerItem onClick={wishListToggle}>
            <CarIcon></CarIcon>
            <SideBarControllerText>{"찜 목록"}</SideBarControllerText>
          </SideBarControllerItem>
          <TopButtonCotainer
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }
          >
            <UpIcon fill={"#999"}></UpIcon>
          </TopButtonCotainer>
        </SideBarControllerList>
      </SideBarControllerContainer>
      <SideBarContentContainer>
        <SideBarContentHeader>
          <SideBarContentHeaderColumn>
            {selectedContent === RECENTLY && (
              <FatText size={24} text={"최근 본차량"}></FatText>
            )}
            {selectedContent === WISHLIST && (
              <FatText size={24} text={"찜 목록"}></FatText>
            )}
            <Text>
              총 <span>0</span>개의 차량이 있습니다.{" "}
            </Text>
          </SideBarContentHeaderColumn>
          <SideBarContentHeaderColumn>
            <CloseIconContainer onClick={() => setSidebarState(1)}>
              <CloseIcon></CloseIcon>
            </CloseIconContainer>
          </SideBarContentHeaderColumn>
        </SideBarContentHeader>
      </SideBarContentContainer>
    </Wrapper>
  );
};

export default Sidebar;
