import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Theme from "../../Styles/Theme";

const Wrapper = styled.div`
  width: 100%;
  top: 0px;
  height: 100px;
  z-index: 1;
  position: fixed;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  & > a {
    margin-right: 50px;
    cursor: pointer;
    font-weight: 400;
    font-size: 22px;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    padding-bottom: 10px;
    &:hover {
      border-bottom: 2px solid ${Theme.blueColor};
    }
  }
`;

const Logo = styled.div``;

const HeaderList = styled.div``;

const HeaderItem = styled.div``;

const AdminHeader: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <HeaderItem>
        <Logo></Logo>
      </HeaderItem>
      <Link to="/admin/sellList">
        <HeaderItem>판매신청내역</HeaderItem>
      </Link>
      <Link to="/admin/buyList">
        <HeaderItem>구매신청내역</HeaderItem>
      </Link>
      <Link to="/admin/registerCar">
        <HeaderItem>차량등록</HeaderItem>
      </Link>
    </Wrapper>
  );
};
export default AdminHeader;
