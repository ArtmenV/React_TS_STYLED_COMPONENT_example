import React from "react";
import styled from "styled-components";

const Text = styled.span<{ size: number }>`
  font-weight: 600;
  font-size: ${props => props.size}px;
`;

interface IFatTextProps {
  size: number;
  text: string;
}

const FatText: React.FunctionComponent<IFatTextProps> = ({ size, text }) => (
  <Text size={size}>{text}</Text>
);
export default FatText;
