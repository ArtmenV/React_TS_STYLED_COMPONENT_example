import React, { useState, useEffect, FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { DownIcon, UpIcon } from "../Icons/DirectionIcon";
import { rootState } from "../../../reducer";
import {
  clearSessionStorage,
  deleteCompanyAction,
  deleteModelAction,
  addCompanyAction,
  addModelAction,
  addModelDetailAction,
  deleteModelDetailAction
} from "../../../reducer/searchPage/searchPageActions";
import { CheckboxIcon, NoneCheckBoxIcon } from "../Icons/SearchBox";

const Wrapper = styled.div`
  width: 100%;
`;
const FilterMenuMainBox = styled.div`
  position: relative;
  height: 100px;
  border-right: 1px solid lightgray;
`;
const NofCars = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
`;
const ResetButton = styled.div`
  position: absolute;
  right: 0px;
  cursor: pointer;
`;
interface IFilterMenuContainer {
  selectedMenu: number;
  isDown: boolean;
}
const FilterMenuContainer = styled.div<IFilterMenuContainer>`
  & > div:nth-child(${props => props.selectedMenu}) {
    background-color: tomato;
    transition: 0.6s ease-in-out;
    height: 120px;
  }
`;
const FilterMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  background-color: white;
  border: 1px solid black;
`;
const ProducerFilterMenu = styled(FilterMenu)<{ producer: boolean }>`
  height: ${props => (props.producer ? "220px" : "42px")};
  transition: 0.2s ease-in-out;
  align-items: flex-start;
  padding-top: 10px;
`;
const CompanyAndModelFilterMenu = styled(FilterMenu)<{ model: boolean }>`
  display: grid;
  grid-template-rows: 30px 1fr;
  grid-auto-columns: 1fr;
  height: ${props => (props.model ? "220px" : "42px")};
  transition: 0.2s ease-in-out;
  align-items: flex-start;
  padding-top: 10px;
  overflow: hidden;
`;
const FirstCheckBoxContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const SecondCheckBoxContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 15px;
`;
const CheckBox = styled.div`
  cursor: pointer;
  margin-left: 10px;
`;
const NoneCheckBox = styled.div`
  cursor: pointer;
  margin-left: 10px;
`;
const BoxTitle = styled.div`
  font-size: 12px;
  padding-left: 6px;
`;
const FilterTitleAndButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const FilterTitle = styled.div``;
const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > svg:nth-child(1) {
    margin-right: 10px;
  }
`;
const ShowFilterList = styled.div`
  height: 100%;
`;
const UserSelectInfo = styled.div`
  width: 100%;
  height: 40px;
`;
const PriceFilterMenu = styled(FilterMenu)<{ price: boolean }>`
  height: ${props => (props.price ? "220px" : "42px")};
  transition: 0.2s ease-in-out;
  align-items: flex-start;
  padding-top: 10px;
`;
const YearFilterMenu = styled(FilterMenu)<{ year: boolean }>`
  height: ${props => (props.year ? "220px" : "42px")};
  transition: 0.2s ease-in-out;
  align-items: flex-start;
  padding-top: 10px;
`;
const ColorFilterMenu = styled(FilterMenu)<{ isClickColor: boolean }>`
  height: ${props => (props.isClickColor ? "220px" : "42px")};
  transition: 0.2s ease-in-out;
  align-items: flex-start;
  padding-top: 10px;
`;
const DistanceFilterMenu = styled(FilterMenu)<{ distance: boolean }>`
  height: ${props => (props.distance ? "220px" : "42px")};
  transition: 0.2s ease-in-out;
  align-items: flex-start;
  padding-top: 10px;
`;
const FuelFilterMenu = styled(FilterMenu)<{ fuel: boolean }>`
  height: ${props => (props.fuel ? "220px" : "42px")};
  transition: 0.2s ease-in-out;
  align-items: flex-start;
  padding-top: 10px;
`;

const Filter = () => {
  const { company, model, modelDetail } = useSelector(
    (state: rootState) => state.SearchPageReducer
  );
  const dispatch = useDispatch();
  const [companyAndModel, setCompanyAndModel] = useState(false);
  const [price, setPrice] = useState(false);
  const [year, setYear] = useState(false);
  const [isClickColor, setIsClickColor] = useState(false);
  const [distance, setDistance] = useState(false);
  const [fuel, setFuel] = useState(false);
  const deleteCompanyAndModel = () => {
    dispatch(deleteCompanyAction("delete"));
    dispatch(deleteModelAction("delete"));
    dispatch(deleteModelDetailAction("delete"));
  };
  const addCompany = (companyName: string) => {
    dispatch(addCompanyAction(companyName));
  };
  const deleteCompany = () => {
    dispatch(deleteCompanyAction("delete"));
  };
  const deleteModelDetail = () => {
    dispatch(deleteModelDetailAction("delete"));
  };
  const addModel = (modelName: string) => {
    dispatch(addModelAction(modelName));
  };
  const addModelDetail = (modelDetailName: string) => {
    dispatch(addModelDetailAction(modelDetailName));
  };
  const companys = [
    {
      en: "hyundai",
      kr: "현대",
      companyModels: ["아반떼", "그랜져", "쏘나타", "i30", "i40", "코나"]
    },
    {
      en: "kia",
      kr: "기아",
      companyModels: ["k3", "k5", "k7"]
    }
  ];
  const modelDetails = [
    {
      model: "아반떼",
      carModelDetails: ["xd", "hd", "md", "ad"]
    },
    {
      model: "쏘나타",
      carModelDetails: ["DN8", "뉴라이즈", "LF소나타", "YF소나타"]
    },
    {
      model: "그랜져",
      carModelDetails: [
        "그랜져 IG 하이브리드(17년~현재)",
        "그랜져 IG(16년~현재)",
        "그랜져 HG 하이브리드(13~17년)",
        "그랜져 HG(11~16년)",
        "더 럭셔리 그랜져(09년~11년)"
      ]
    }
  ];
  return (
    <Wrapper>
      <FilterMenuMainBox>
        <ResetButton onClick={() => dispatch(clearSessionStorage())}>
          초기화
        </ResetButton>
        <NofCars>총 000대</NofCars>
      </FilterMenuMainBox>
      <CompanyAndModelFilterMenu model={companyAndModel}>
        <FilterTitleAndButton>
          <FilterTitle>제조사 / 모델</FilterTitle>
          <Button onClick={() => setCompanyAndModel(!companyAndModel)}>
            {!companyAndModel && (
              <DownIcon size={15} fill="rgba(0,0,0,0.4)"></DownIcon>
            )}
            {companyAndModel && (
              <UpIcon size={15} fill="rgba(0,0,0,0.4)"></UpIcon>
            )}
          </Button>
        </FilterTitleAndButton>
        <ShowFilterList>
          <UserSelectInfo>
            {/* 회사 o 모델 o 모델디테일 x */}
            {company !== null && model !== null && modelDetail === null && (
              <FirstCheckBoxContainer>
                <CheckBox onClick={deleteCompanyAndModel}>
                  <CheckboxIcon />
                </CheckBox>
                <BoxTitle>
                  {company}/{model}
                </BoxTitle>
              </FirstCheckBoxContainer>
            )}
            {/* 모델 디테일 출력 */}
            {company !== null &&
              model !== null &&
              modelDetail === null &&
              modelDetails.map(mModel => {
                if (model === mModel.model)
                  return mModel.carModelDetails.map(MmodelDeatail => {
                    return (
                      <SecondCheckBoxContainer>
                        <NoneCheckBox
                          onClick={() => addModelDetail(MmodelDeatail)}
                        >
                          <NoneCheckBoxIcon />
                        </NoneCheckBox>
                        <BoxTitle>{MmodelDeatail}</BoxTitle>
                      </SecondCheckBoxContainer>
                    );
                  });
              })}
            {/* 회사 x 모델 x 모델디테일 x */}
            {company === null &&
              model === null &&
              modelDetail === null &&
              companys.map(mCompany => {
                return (
                  <FirstCheckBoxContainer>
                    <NoneCheckBox onClick={() => addCompany(mCompany.kr)}>
                      <NoneCheckBoxIcon />
                    </NoneCheckBox>
                    <BoxTitle>{mCompany.kr}</BoxTitle>
                  </FirstCheckBoxContainer>
                );
              })}
            {/* 회사 o 모델 x 모델디테일 x */}
            {company !== null && model === null && modelDetail === null && (
              <FirstCheckBoxContainer>
                <CheckBox onClick={deleteCompany}>
                  <CheckboxIcon />
                </CheckBox>
                <BoxTitle>{company}</BoxTitle>
              </FirstCheckBoxContainer>
            )}
            {/* 모델 출력 */}
            {company !== null &&
              model === null &&
              modelDetail === null &&
              companys.map(mCompany => {
                if (mCompany.kr === company) {
                  return mCompany.companyModels.map(mModel => {
                    return (
                      <SecondCheckBoxContainer>
                        <NoneCheckBox onClick={() => addModel(mModel)}>
                          <NoneCheckBoxIcon />
                        </NoneCheckBox>
                        <BoxTitle>{mModel}</BoxTitle>
                      </SecondCheckBoxContainer>
                    );
                  });
                }
              })}
            {/* 회사 o 모델 o 모델디테일 o */}
            {company !== null && model !== null && modelDetail !== null && (
              <FirstCheckBoxContainer>
                <CheckBox onClick={deleteCompanyAndModel}>
                  <CheckboxIcon />
                </CheckBox>
                <BoxTitle>
                  {company}/{model}
                </BoxTitle>
              </FirstCheckBoxContainer>
            )}
            {/* 회사 o 모델 o 모델디테일 o (선택한 모델 디테일만 출력) */}
            {company !== null &&
              model !== null &&
              modelDetail !== null &&
              modelDetails.map(mModelDetail => {
                if (mModelDetail.model === model) {
                  return mModelDetail.carModelDetails.map(mCarModelDetail => {
                    if (mCarModelDetail === modelDetail) {
                      return (
                        <SecondCheckBoxContainer>
                          <CheckBox onClick={deleteModelDetail}>
                            <CheckboxIcon />
                          </CheckBox>
                          <BoxTitle>{mCarModelDetail}</BoxTitle>
                        </SecondCheckBoxContainer>
                      );
                    } else if (mCarModelDetail !== modelDetail) {
                      return (
                        <SecondCheckBoxContainer>
                          <NoneCheckBox
                            onClick={() => addModelDetail(mCarModelDetail)}
                          >
                            <NoneCheckBoxIcon />
                          </NoneCheckBox>
                          <BoxTitle>{mCarModelDetail}</BoxTitle>
                        </SecondCheckBoxContainer>
                      );
                    }
                  });
                }
              })}

            {/* 회사 x 모델 x 모델디테일 o */}
            {company === null &&
              model === null &&
              modelDetail !== null &&
              companys.map(mCompany => {
                return (
                  <FirstCheckBoxContainer>
                    <NoneCheckBox onClick={() => addCompany(mCompany.kr)}>
                      <NoneCheckBoxIcon />
                    </NoneCheckBox>
                    <BoxTitle>{mCompany.kr}</BoxTitle>
                  </FirstCheckBoxContainer>
                );
              })}
          </UserSelectInfo>
        </ShowFilterList>
      </CompanyAndModelFilterMenu>
      <PriceFilterMenu price={price}>
        <FilterTitleAndButton>
          <FilterTitle>가격</FilterTitle>
          <Button onClick={() => setPrice(!price)}>
            {!price && <DownIcon size={15} fill="rgba(0,0,0,0.4)"></DownIcon>}
            {price && <UpIcon size={15} fill="rgba(0,0,0,0.4)"></UpIcon>}
          </Button>
        </FilterTitleAndButton>
      </PriceFilterMenu>
      <YearFilterMenu year={year}>
        <FilterTitleAndButton>
          <FilterTitle>연식</FilterTitle>
          <Button onClick={() => setYear(!year)}>
            {!year && <DownIcon size={15} fill="rgba(0,0,0,0.4)"></DownIcon>}
            {year && <UpIcon size={15} fill="rgba(0,0,0,0.4)"></UpIcon>}
          </Button>
        </FilterTitleAndButton>
      </YearFilterMenu>
      <DistanceFilterMenu distance={distance}>
        <FilterTitleAndButton>
          <FilterTitle>주행거리</FilterTitle>
          <Button onClick={() => setDistance(!distance)}>
            {!distance && (
              <DownIcon size={15} fill="rgba(0,0,0,0.4)"></DownIcon>
            )}
            {distance && <UpIcon size={15} fill="rgba(0,0,0,0.4)"></UpIcon>}
          </Button>
        </FilterTitleAndButton>
      </DistanceFilterMenu>
      <FuelFilterMenu fuel={fuel}>
        <FilterTitleAndButton>
          <FilterTitle>연료</FilterTitle>
          <Button onClick={() => setFuel(!fuel)}>
            {!fuel && <DownIcon size={15} fill="rgba(0,0,0,0.4)"></DownIcon>}
            {fuel && <UpIcon size={15} fill="rgba(0,0,0,0.4)"></UpIcon>}
          </Button>
        </FilterTitleAndButton>
      </FuelFilterMenu>
      <ColorFilterMenu isClickColor={isClickColor}>
        <FilterTitleAndButton>
          <FilterTitle>색상</FilterTitle>
          <Button onClick={() => setIsClickColor(!isClickColor)}>
            {!isClickColor && (
              <DownIcon size={15} fill="rgba(0,0,0,0.4)"></DownIcon>
            )}
            {isClickColor && <UpIcon size={15} fill="rgba(0,0,0,0.4)"></UpIcon>}
          </Button>
        </FilterTitleAndButton>
      </ColorFilterMenu>
    </Wrapper>
  );
};

export default Filter;
