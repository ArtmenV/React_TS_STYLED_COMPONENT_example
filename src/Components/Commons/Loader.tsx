import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Theme from "../../Styles/Theme";

const BaseLoader = styled.div`
  background-color: #e0d1ed;
  height: 2px;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 30;
`;

interface ICurrentLoader {
  percentage: number;
}

const CurrentLoader = styled.div<ICurrentLoader>`
  background-color: #112d51;
  width: ${props => `${props.percentage}%`};
  height: 100%;
  -webkit-transition: width 500ms ease-out;
  -moz-transition: width 500ms ease-out;
  -o-transition: width 500ms ease-out;
  transition: width 500ms ease-out;
`;

interface ILoaderProps {
  loading: boolean;
}

const Loader: React.FunctionComponent<ILoaderProps> = ({ loading }) => {
  console.log("loading", loading);

  const [percentage, setPercentage] = useState(0);

  const progessing = () => {
    if (percentage > 100) {
      return;
    }
    setTimeout(() => {
      setPercentage(Math.floor(percentage + Math.random() * 40 + 5));
    }, 200);
  };
  if (!loading) {
    setPercentage(100);
  }
  useEffect(() => {
    progessing();
    console.log(percentage, "퍼센트 로딩");
  }, [percentage]);

  return (
    <BaseLoader>
      <CurrentLoader percentage={percentage}></CurrentLoader>
    </BaseLoader>
  );
};

export default Loader;
