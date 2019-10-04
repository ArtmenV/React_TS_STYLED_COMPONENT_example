import React from "react";
import styled from "styled-components";
import Theme from "../Styles/Theme";

const Wrapper = styled.div`
  height: 250px;
  background-color: ${Theme.darkGreyColor};
  color: lightgray;
  padding: 50px 20%;
`;

const FooterContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
`;

const FooterMenuList = styled.div`
  font-size: 21px;
  display: flex;
  justify-content: flex-start;
  & > div {
    margin-right: 17px;
  }
`;

const FooterMenuItem = styled.div``;

const FooterContentList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterContentItem = styled.div``;

const CopyRight = styled.div`
  line-height: 1.8;
  /* width: 500px; */
`;

const Logo = styled.div`
  font-size: 50px;
  opacity: 0.6;
`;

const Footer: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <FooterContainer>
        <FooterMenuList>
          <FooterMenuItem>사이트맵</FooterMenuItem>
          <FooterMenuItem>이용약관</FooterMenuItem>
          <FooterMenuItem>개인정보취급방침</FooterMenuItem>
        </FooterMenuList>
        <FooterContentList>
          <FooterContentItem>
            <CopyRight>
              {`블록체인기반 차량판매업 제19-930호 `}
              <br />
              {` 대전 유성구 동서대로 98-39 (삼성화재 유성연수원)`}
              <br />
              {`민원처리시간(월~금) 09:30~17:30까지입니다. 시간외 문의는
              불가능합니다. `}
              <br />
              {`T: 02)123-4567 / F : 02)369-0070
              COPYRIGHT © BY BlockCar. ALL RIGHTS RESERVED.`}
            </CopyRight>
          </FooterContentItem>
          <FooterContentItem>
            <Logo>BlockCar</Logo>
          </FooterContentItem>
        </FooterContentList>
      </FooterContainer>
    </Wrapper>
  );
};
export default Footer;
