import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { rootState } from "../../../reducer";
import {
  deleteModelAction,
  deleteCompanyAction,
  deleteModelDetailAction
} from "../../../reducer/searchPage/searchPageActions";

const Wrapper = styled.div`
  height: 100px;
`;
const TopBarTitle = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  color: black;
  font-size: 15px;
  border-bottom: 1px solid lightgray;
`;
const SelectedOptionList = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: flex-start;
`;
const Button = styled.div`
  padding-left: 4px;
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;
const TopBarBox = styled.div`
  padding: 5px 5px;
  display: flex;
  border: 1px solid ${props => props.theme.blueColor};
  margin-right: 8px;
`;
const Name = styled.div`
  color: ${props => props.theme.blueColor};
`;
const SearchResultTopBar = () => {
  const { company, model, modelDetail } = useSelector(
    (state: rootState) => state.SearchPageReducer
  );
  const userSelectInfo = [
    {
      actionName: "company",
      title: company
    },
    {
      actionName: "model",
      title: model
    },
    {
      actionName: "modelDetail",
      title: modelDetail
    }
  ];
  const dispatch = useDispatch();
  const deleteButton = (info: string) => {
    console.log("삭제하고 싶은 정보 >>", info);
    if (info === "model") {
      dispatch(deleteModelAction("model"));
      dispatch(deleteCompanyAction("company"));
      dispatch(deleteModelDetailAction("modelDetail"));
    } else if (info === "company") {
      dispatch(deleteCompanyAction("company"));
      dispatch(deleteModelAction("model"));
      dispatch(deleteModelDetailAction("modelDetail"));
    } else if (info === "modelDetail") {
      dispatch(deleteModelDetailAction("modelDetail"));
    }
  };
  return (
    <Wrapper>
      <TopBarTitle>검색결과</TopBarTitle>
      <SelectedOptionList>
        {userSelectInfo.map(info => {
          if (info.title !== null) {
            return (
              <TopBarBox>
                <Name>{info.title}</Name>
                <Button onClick={() => deleteButton(info.actionName)}>X</Button>
              </TopBarBox>
            );
          }
        })}
      </SelectedOptionList>
    </Wrapper>
  );
};

export default SearchResultTopBar;
