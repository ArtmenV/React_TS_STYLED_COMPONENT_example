import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../../Styles/Theme";
import useInput from "../Hooks/useInput";
import Button from "../Commons/Button";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../../../reducer";
import {
  toggleSignUpPopUp,
  toggleSignInPopUp,
  logInAction
} from "../../../reducer/auth/authActions";
import { signUp } from "../../../services/user/signUp";
import Loader from "../Commons/Loader";

const Wrapper = styled.div<{ isSignUpPopUpShow: boolean }>`
  visibility: ${props => (props.isSignUpPopUpShow ? "visibility" : "hidden")};
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpContainer = styled.div`
  width: 320px;
  /* height: 460px; */
  background-color: white;
  border-radius: 5px;
  padding: 30px;
`;

const SignUpHeader = styled.div``;

const SignUpHeaderTitle = styled.div`
  color: ${Theme.darkGreyColor};
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;

const SignUpHeaderSubTitle = styled.div`
  text-align: center;
  font-size: 13px;
  line-height: 1.2;
  margin-bottom: 20px;
  & > span {
    color: red;
  }
`;

const SignUpMain = styled.form`
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  padding: 20px 0px;
`;

const SignUpFooter = styled.div`
  padding-top: 20px;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 4px;
  padding-left: 10px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const IdInput = styled(Input)``;

const PwInput = styled(Input)``;
const PwCheckInput = styled(Input)``;

const GoSignIn = styled.span`
  /* color: ${Theme.blueColor}; */
  color : red;
  cursor: pointer;  
`;

const SignUp = () => {
  const idInput = useInput("");
  const pwInput = useInput("");
  const pwCheckInput = useInput("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { isSignInPopUpShow, isSignUpPopUpShow } = useSelector(
    (state: rootState) => state.AuthReducer
  );

  const signUpClick = async (e: React.FormEvent) => {
    e.preventDefault();
    // setLoading(true);
    if (idInput.value === "") {
      alert("아이디를 입력하세요");
    } else if (pwInput.value === "") {
      alert("비밀번호를 입력하세요");
    } else if (pwInput.value !== pwCheckInput.value) {
      alert("비밀번호가 일치하지 않습니다. ");
    } else {
      console.log(idInput.value, pwInput.value);
      const res = await signUp(idInput.value, pwInput.value);

      console.log(res);
      if (res) {
        //session에 isLoggedIn true
        const loggedInUser = {
          id: res.id,
          seq: res.seq,
          type: res.type
        };
        dispatch(logInAction(loggedInUser));
        dispatch(toggleSignUpPopUp(false));
      } else {
        // 회원가입 실패 메세지
        // sessionStorage.setItem("isLoggedIn", "false");
      }
    }
  };

  return (
    <Wrapper
      onClick={() => dispatch(toggleSignUpPopUp(!isSignUpPopUpShow))}
      isSignUpPopUpShow={isSignUpPopUpShow}
    >
      {loading && <Loader loading={loading}></Loader>}
      <SignUpContainer onClick={e => e.stopPropagation()}>
        <SignUpHeader>
          <SignUpHeaderTitle>회원가입</SignUpHeaderTitle>
          <SignUpHeaderSubTitle>
            <span>블록카</span>는 블록체인을 통해 신뢰있는 중고차 거래를 할 수
            있는 플랫폼 서비스입니다.
          </SignUpHeaderSubTitle>
        </SignUpHeader>
        <SignUpMain onSubmit={signUpClick}>
          <IdInput {...idInput} placeholder={"Id"}></IdInput>
          <PwInput
            type="password"
            {...pwInput}
            placeholder={"Password"}
          ></PwInput>
          <PwCheckInput
            type="password"
            {...pwCheckInput}
            placeholder={"Password Confirm"}
          ></PwCheckInput>
          <Button size={"14"} text={"회원가입"}></Button>
        </SignUpMain>
        <SignUpFooter>
          <span>
            이미 블록카 회원 이세요?
            <GoSignIn
              onClick={() => {
                dispatch(toggleSignUpPopUp(!isSignUpPopUpShow));
                dispatch(toggleSignInPopUp(!isSignInPopUpShow));
              }}
            >
              로그인
            </GoSignIn>
          </span>
        </SignUpFooter>
      </SignUpContainer>
    </Wrapper>
  );
};

export default SignUp;
