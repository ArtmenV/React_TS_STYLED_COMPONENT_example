import React from "react";
import styled from "styled-components";
import Theme from "../../Styles/Theme";

const sizeCheck = (size: string) => {
  if (size === "sm") {
    return "50px";
  } else if (size === "md") {
    return "100px";
  } else if (size === "lg") {
    return "150px";
  } else {
    return "50px";
  }
};

const Wrapper = styled.button<{ size: string }>`
  padding: 8px 12px;
  border-radius: 5px;
  text-align: center;
  background-color: ${Theme.blueColor};
  font-size: ${props => props.size}px;
  color: white;
  cursor: pointer;
  border: none;
  width: 100%;
  transition: 0.1s ease-in-out;
  &:hover {
    /* transform: scale(0.99); */
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }
`;

interface IButtonProps {
  text: string;
  size?: string;
  onClick?: () => void;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  size = "sm",
  text,
  onClick
}) => (
  <Wrapper size={size} onClick={onClick}>
    {text}
  </Wrapper>
);

export default Button;
