import React from "react";
import styled from "styled-components";
import useSelect from "../../../src/Components/Hooks/useSelect";
const Wrapper = styled.div`
  margin-top: 100px;
  min-height: 100vh;
`;
const ImageUrlUploadContainer = styled.div`
  width: 100%;
  display: flex;
`;
const SellListPageHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 1.2fr 1fr 2fr 2fr 4fr 1.2fr 1fr;
  height: 50px;
  background-color: ${props => props.theme.blueColor};
  align-items: center;
  text-align: center;
  color: white;
`;
const HeaderCheckBox = styled.div``;
const HeaderNumber = styled.div``;
const HeaderSellerName = styled.div``;
const HeaderCarNumber = styled.div``;
const HeaderPrice = styled.div``;
const HeaderPhoneNumber = styled.div``;
const HeaderAddress = styled.div``;
const HeaderPickUpDate = styled.div``;
const HeaderState = styled.div``;
const SellerInfoNumber = styled.div``;
const SellerInfoName = styled.div``;
const SellerInfoCarNumber = styled.div``;
const SellerInfoCarPrice = styled.div``;
const SellerInfoPhoneNumber = styled.div``;
const SellerInfoAddress = styled.div``;
const SellerImgUpload = styled.input`
  width: 100%;
  height: 40px;
`;
const SellerInfoPickUpDate = styled.div``;
const SellListArrayContainer = styled.div`
  padding: 30px 0px;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 1.2fr 1fr 2fr 2fr 4fr 1.2fr 1fr;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid lightgray;
`;
const Form = styled.form`
  width: 60%;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 150px;
  background-color: blue;
  color: white;
  cursor: pointer;
`;
const CheckButton = styled.div`
  height: 20px;
  width: 20px;
  background-color: red;
  cursor: pointer;
`;
const NoneCheckButton = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid red;
  cursor: pointer;
`;
const SellerInfoState = styled.div``;
const State = styled.div<{ state: string }>`
  color: ${props => (props.state === "신청완료" ? "green" : "red")};
`;
interface IUseInput {
  value: any;
  setValue: React.Dispatch<any>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IDbSales {
  address: string;
  application_date: string;
  car_no: string;
  no: number;
  phone: string;
  pickup_date: string;
  price: number;
  seller: number;
  state: string;
  id: string;
}

interface IAdminSellListPresenterProps {
  imgUploaderInput: IUseInput;
  resisterImage: (event: React.FormEvent<HTMLFormElement>) => void;
  sellList: IDbSales[];
  toggleBtn: number;
  setToggleBtnIndex: (index: number) => void;
  imageArray: string[];
  submitServer: () => void;
}

const AdminSellListPresenter: React.FunctionComponent<
  IAdminSellListPresenterProps
> = ({
  imgUploaderInput,
  resisterImage,
  sellList,
  setToggleBtnIndex,
  toggleBtn,
  imageArray,
  submitServer
}) => {
  return (
    <Wrapper>
      <ImageUrlUploadContainer>
        <Form onSubmit={resisterImage}>
          이미지 url:
          <SellerImgUpload type="text" {...imgUploaderInput}></SellerImgUpload>
        </Form>
        <Button onClick={submitServer}>DB로 전송</Button>
      </ImageUrlUploadContainer>
      {imageArray &&
        imageArray.map((image: any, index: number) => (
          <div>
            {index + 1} : {image}
          </div>
        ))}
      <SellListPageHeaderContainer>
        <HeaderCheckBox>선택</HeaderCheckBox>
        <HeaderNumber>번호</HeaderNumber>
        <HeaderSellerName>판매자 이름</HeaderSellerName>
        <HeaderCarNumber>차량번호</HeaderCarNumber>
        <HeaderPrice>가격</HeaderPrice>
        <HeaderPhoneNumber>휴대폰번호</HeaderPhoneNumber>
        <HeaderAddress>주소</HeaderAddress>
        <HeaderPickUpDate>픽업날짜</HeaderPickUpDate>
        <HeaderState>현재 상태</HeaderState>
      </SellListPageHeaderContainer>
      {sellList !== null &&
        sellList.map((list, index) => {
          return (
            <>
              <SellListArrayContainer>
                {toggleBtn === list.no && (
                  <CheckButton
                    onClick={() => setToggleBtnIndex(list.no)}
                  ></CheckButton>
                )}
                {toggleBtn !== list.no && (
                  <NoneCheckButton
                    onClick={() => setToggleBtnIndex(list.no)}
                  ></NoneCheckButton>
                )}
                <SellerInfoNumber>{list.no}</SellerInfoNumber>
                <SellerInfoName>{list.id}</SellerInfoName>
                <SellerInfoCarNumber>{list.car_no}</SellerInfoCarNumber>
                <SellerInfoCarPrice>{list.price}</SellerInfoCarPrice>
                <SellerInfoPhoneNumber>{list.phone}</SellerInfoPhoneNumber>
                <SellerInfoAddress>{list.address}</SellerInfoAddress>
                <SellerInfoPickUpDate>{list.pickup_date}</SellerInfoPickUpDate>
                <SellerInfoState>
                  <State state={list.state}>{list.state}</State>
                </SellerInfoState>
              </SellListArrayContainer>
            </>
          );
        })}
    </Wrapper>
  );
};

export default AdminSellListPresenter;
