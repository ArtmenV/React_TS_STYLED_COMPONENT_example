import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../Hooks/useInput";

const Wrapper = styled.div`
  min-height: 200px;
  min-width: 200px;
`;
const Form = styled.form``;
const SellerImgUpload = styled.input`
  width: 70%;
`;
const AdminImgUpload = () => {
  const imgUploaderInput = useInput("");
  const [imageArray, setImageArray] = useState([]);
  const resisterImage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setImageArray([...imageArray, imgUploaderInput.value]);
    imgUploaderInput.setValue("");
  };
  return (
    <Wrapper>
      <Form onSubmit={resisterImage}>
        <SellerImgUpload type="text" {...imgUploaderInput}></SellerImgUpload>
      </Form>
    </Wrapper>
  );
};
export default AdminImgUpload;
