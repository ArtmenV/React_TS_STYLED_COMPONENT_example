import React from "react";
import styled from "styled-components";
import Theme from "../../Styles/Theme";
import useInput from "../Hooks/useInput";
import Button from "../Commons/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSignInPopUp,
  toggleSignUpPopUp,
  logInAction
} from "../../../reducer/auth/authActions";
import { rootState } from "../../../reducer";
import { signIn } from "../../../services/user/signIn";

const Wrapper = styled.div<{ isSignInPopUpShow: boolean }>`
  visibility: ${props => (props.isSignInPopUpShow ? "visibility" : "hidden")};
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

const SignInContainer = styled.div`
  width: 320px;
  /* height: 460px; */
  background-color: white;
  border-radius: 5px;
  padding: 30px;
`;

const SignInHeader = styled.div``;

const SignInHeaderTitle = styled.div`
  color: ${Theme.darkGreyColor};
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;

const SignInHeaderSubTitle = styled.div`
  text-align: center;
  font-size: 13px;
  line-height: 1.2;
  margin-bottom: 20px;
  & > span {
    color: red;
  }
`;

const SignInMain = styled.form`
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  padding: 20px 0px;
`;

const SignInFooter = styled.div`
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

const GoSignIn = styled.span`
  /* color: ${Theme.blueColor}; */
  color : red;
  cursor: pointer;  
`;
const SignIn = () => {
  const idInput = useInput("");
  const pwInput = useInput("");
  const dispatch = useDispatch();
  const { isSignInPopUpShow, isSignUpPopUpShow } = useSelector(
    (state: rootState) => state.AuthReducer
  );
  const siginClick = async () => {
    if (idInput.value === "") {
      alert("아이디를 입력해주세요");
    } else if (pwInput.value === "") {
      alert("비밀번호를 입력해주세요");
    } else {
      alert("로그인 ");
      const res = await signIn(idInput.value, pwInput.value);
      console.log(res);
      if (res) {
        //session에 isLoggedIn true
        const loggedInUser = {
          id: res.id,
          seq: res.seq,
          type: res.type
        };
        dispatch(logInAction(loggedInUser));
        dispatch(toggleSignInPopUp(false));
      } else {
        // 회원가입 실패 메세지
        alert("아이디 혹은 패스워드를 다시 확인하세요.");
        // sessionStorage.setItem("isLoggedIn", "false");
      }
    }
  };

  return (
    <Wrapper
      onClick={() => dispatch(toggleSignInPopUp(!isSignInPopUpShow))}
      isSignInPopUpShow={isSignInPopUpShow}
    >
      <SignInContainer onClick={e => e.stopPropagation()}>
        <SignInHeader>
          <SignInHeaderTitle>로그인</SignInHeaderTitle>
          <SignInHeaderSubTitle>
            <span>블록카</span>는 블록체인을 통해 신뢰있는 중고차 거래를 할 수
            있는 플랫폼 서비스입니다.
          </SignInHeaderSubTitle>
        </SignInHeader>

        <SignInMain onSubmit={siginClick}>
          <IdInput {...idInput} placeholder={"Id"}></IdInput>
          <PwInput
            type="password"
            {...pwInput}
            placeholder={"Password"}
          ></PwInput>
          <Button size={"14"} text={"로그인"}></Button>
        </SignInMain>

        <SignInFooter>
          <span>
            블록카 회원이 아니세요?
            <GoSignIn
              onClick={() => {
                dispatch(toggleSignInPopUp(!isSignInPopUpShow));
                dispatch(toggleSignUpPopUp(!isSignUpPopUpShow));
              }}
            >
              {" "}
              회원가입
            </GoSignIn>
          </span>
        </SignInFooter>
      </SignInContainer>
    </Wrapper>
  );
};

export default SignIn;
