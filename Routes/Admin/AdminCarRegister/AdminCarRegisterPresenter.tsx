import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../src/Components/Commons/Button";
import useInput from "../../../src/Components/Hooks/useInput";
import useSelect from "../../../src/Components/Hooks/useSelect";
import { useSelector } from "react-redux";
import registerCar from "../../../services/car/registerCar";

const Wrapper = styled.div`
  margin-top: 70px;
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-gap: 40px;
  justify-content: center;
`;

const CarOwnerInfoContainer = styled.div``;

const CarBasicInfoContainer = styled.div``;

const FormTitle = styled.div`
  font-size: 26px;
  padding-bottom: 20px;
  font-weight: 600;
  border-bottom: 2px solid rgba(0, 0, 0, 0.6);
`;

const FormColumn = styled.div`
  display: flex;
  justify-content: space-between;
  & > div:first-child {
    margin-right: 20px;
  }
`;

const FormItem = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 170px 200px;
`;

const TableHeader = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
`;

const TableContent = styled.div``;

const CarTotalStateContainer = styled.div``;

const CarRegisterFormSubmitButtonContainer = styled.div`
  width: 300px;
  margin-bottom: 100px;
  justify-self: center;
`;

const AdminCarRegisterPresenter = () => {
  // carOwnerInfo
  const carOwnerNameInput = useInput("한싸피");
  const carOwnerPhoneNumberInput = useInput("01012345678");

  // car Basic Info
  const carCompanySelect = useSelect("현대");
  const carModelSelect = useSelect("아반떼");
  const carDetailModelSelect = useSelect("xd");
  const carNumberInput = useInput("34오6789");
  const carYear = useInput(2016);
  const inspectionValidDate = useInput("");
  const firstRegisterDate = useInput("");
  const carTransmissionSelect = useSelect("오토");
  const carFuelSelect = useSelect("경유");
  const chassisNumber = useInput(12);
  const guaranteeType = useSelect("자가보증");
  const primeMoverType = useInput(34);
  //car Total Info
  const instrumentPanelState = useSelect("양호");
  const distanceDrivenInput = useInput(10000);
  const carNumberShowState = useSelect("양호");
  const exhaustGasSelect = useSelect("일산화탄소");
  const tuningState = useSelect("있음");
  const specialRecode = useSelect("없음");
  const carUsageChange = useSelect("없음");
  const colorState = useSelect("무채색");

  // carInsurance Info
  const carNumberChangeInput = useInput(0);
  const carMyAccidentInput = useInput(0);
  const carAnotherAccidentInput = useInput(0);
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
        "그랜져 IG 하이브리드",
        "그랜져 IG",
        "그랜져 HG 하이브리드",
        "그랜져 HG",
        "더 럭셔리 그랜져"
      ]
    }
  ];
  const newCar = {
    carOwnerInfo: {
      ownerName: carOwnerNameInput.value,
      ownerPhoneNumber: carOwnerPhoneNumberInput.value
    },
    carBasicInfo: {
      company: carCompanySelect.value,
      model: carModelSelect.value,
      detailModel: carDetailModelSelect.value,
      year: carYear.value,
      number: carNumberInput.value,
      inspectionValiDate: inspectionValidDate.value,
      firstRegisterDate: firstRegisterDate.value,
      transmission: carTransmissionSelect.value,
      fuel: carFuelSelect.value,
      chassisNumber: chassisNumber.value,
      guaranteeType: guaranteeType.value,
      primeMoverType: primeMoverType.value
    },
    carTotalState: {
      instrumentPanelState: instrumentPanelState.value,
      distanceDriven: distanceDrivenInput.value,
      carNumberShowState: carNumberShowState.value,
      exhaustGas: exhaustGasSelect.value,
      tuning: tuningState.value,
      specialRecode: specialRecode.value,
      carUsageChange: carUsageChange.value,
      colorState: colorState.value
    },
    carInsuranceHistory: {
      carNumberChangeCount: carNumberChangeInput.value,
      carMyAccidentCount: carMyAccidentInput.value,
      carAnotherAccidentCount: carAnotherAccidentInput.value
    }
  };

  const Car = {
    carNumber: carNumberInput.value,
    carData: newCar
  };
  return (
    <Wrapper>
      <CarOwnerInfoContainer>
        <FormTitle>차주 정보</FormTitle>
        <FormColumn>
          <FormItem>
            <TableHeader>이름 </TableHeader>
            <TableContent>
              <Input {...carOwnerNameInput}></Input>
            </TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>핸드폰 번호</TableHeader>
            <TableContent>
              <Input {...carOwnerPhoneNumberInput}></Input>
            </TableContent>
          </FormItem>
        </FormColumn>
      </CarOwnerInfoContainer>
      <CarBasicInfoContainer>
        <FormTitle>차량기본정보</FormTitle>
        <FormColumn>
          <FormItem>
            <TableHeader>회사 </TableHeader>
            <TableContent>
              <Select {...carCompanySelect}>
                {companys.map(company => (
                  <option selected value={company.kr}>
                    {company.kr}
                  </option>
                ))}
              </Select>
            </TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>차량 모델</TableHeader>
            <TableContent>
              <Select {...carModelSelect}>
                {companys.map(company => {
                  if (company.kr === carCompanySelect.value) {
                    return company.companyModels.map(model => {
                      return <option value={model}>{model}</option>;
                    });
                  }
                })}
              </Select>
            </TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>상세모델</TableHeader>
            <TableContent>
              <Select {...carDetailModelSelect}>
                {modelDetails.map(modelDetail => {
                  console.log(
                    "carDetailModelSelect : ",
                    modelDetail.model,
                    "carModelSelect : ",
                    carModelSelect.value,
                    carModelSelect === carModelSelect.value
                  );
                  if (modelDetail.model === carModelSelect.value) {
                    console.log("같음");
                    return modelDetail.carModelDetails.map(carModelDetail => {
                      return (
                        <option selected value={carModelDetail}>
                          {carModelDetail}
                        </option>
                      );
                    });
                  }
                })}
              </Select>
            </TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>연식</TableHeader>
            <TableContent>
              <Input
                type="number"
                min="1900"
                max="2099"
                step="1"
                {...carYear}
              ></Input>
            </TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>차량번호</TableHeader>
            <TableContent>
              <Input {...carNumberInput}></Input>
            </TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>검사유효기간</TableHeader>
            <TableContent>
              <Input type="date" {...inspectionValidDate}></Input>
            </TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>최초등록일</TableHeader>
            <TableContent>
              <Input type="date" {...firstRegisterDate}></Input>
            </TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>변속기종류</TableHeader>
            <TableContent>
              <Select {...carTransmissionSelect}>
                <option selected value="오토">
                  오토
                </option>
                <option value="수동">수동</option>
              </Select>
            </TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>사용연료</TableHeader>
            <TableContent>
              <Select {...carFuelSelect}>
                <option selected value="경유">
                  경유
                </option>
                <option value="가솔린">가솔린</option>
              </Select>
            </TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>차대번호</TableHeader>
            <TableContent>
              <Input {...chassisNumber}></Input>
            </TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>보증유형</TableHeader>
            <TableContent>
              <Select {...guaranteeType}>
                <option selected value="자가보증">
                  자가보증
                </option>
                <option value="보험사보증">보험사보증</option>
              </Select>
            </TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>원동기형식</TableHeader>
            <TableContent>
              <Input {...primeMoverType}></Input>
            </TableContent>
          </FormItem>
        </FormColumn>
      </CarBasicInfoContainer>

      <CarTotalStateContainer>
        <FormTitle>차량 종합상태</FormTitle>
        <FormColumn>
          <FormItem>
            <TableHeader>사용이력</TableHeader>
            <TableContent>
              <TableHeader>상태</TableHeader>
            </TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>사용이력</TableHeader>
            <TableHeader>상태</TableHeader>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>주행거리 계기상태 </TableHeader>
            <TableContent>
              <Select {...instrumentPanelState}>
                <option selected value="양호">
                  양호
                </option>
                <option value="불량">불량</option>
              </Select>
            </TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>주행거리 </TableHeader>
            <TableContent>
              <Input {...distanceDrivenInput}></Input>
            </TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>차대번호 표기</TableHeader>
            <TableContent>
              <Select {...carNumberShowState}>
                <option selected value="양호">
                  양호
                </option>
                <option value="불량">불량</option>
              </Select>
            </TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>배출가스</TableHeader>
            <TableContent>
              <Select {...exhaustGasSelect}>
                <option selected value="일산화탄소">
                  일산화탄소
                </option>
                <option value="탄화수소">탄화수소</option>
              </Select>
            </TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>튜닝 </TableHeader>
            <TableContent>
              <Select {...tuningState}>
                <option selected value="없음">
                  없음
                </option>
                <option value="있음">있음</option>
              </Select>
            </TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>특별이력 </TableHeader>
            <TableContent>
              <Select {...specialRecode}>
                <option selected value="없음">
                  없음
                </option>
                <option value="있음">있음</option>
              </Select>
            </TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>용도변경</TableHeader>
            <TableContent>
              <Select {...carUsageChange}>
                <option selected value="없음">
                  없음
                </option>
                <option value="있음">있음</option>
              </Select>
            </TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>색상</TableHeader>
            <TableContent>
              <Select {...colorState}>
                <option selected value="무채색">
                  무채색
                </option>
                <option value="유채색">유채색</option>
              </Select>
            </TableContent>
          </FormItem>
        </FormColumn>
      </CarTotalStateContainer>
      <CarOwnerInfoContainer>
        <FormTitle>보험 및 사고이력</FormTitle>
        <FormColumn>
          <FormItem>
            <TableHeader>자동차번호 / 소유자 변경 횟수 </TableHeader>
            <TableContent>
              <Input type="number" {...carNumberChangeInput}></Input>
            </TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>보험사고이력: 내차피해 </TableHeader>
            <TableContent>
              <Input type="number" {...carMyAccidentInput}></Input>
            </TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>보험사고이력: 타차피해</TableHeader>
            <TableContent>
              <Input type="number" {...carAnotherAccidentInput}></Input>
            </TableContent>
          </FormItem>
        </FormColumn>
      </CarOwnerInfoContainer>
      <CarRegisterFormSubmitButtonContainer>
        <Button
          text="생성"
          size={"20"}
          onClick={() =>
            registerCar(
              Car.carNumber,
              JSON.stringify(Car.carData),
              Car.carData.carOwnerInfo.ownerName,
              Car.carData.carOwnerInfo.ownerPhoneNumber
            )
          }
        >
          생성
        </Button>
      </CarRegisterFormSubmitButtonContainer>
    </Wrapper>
  );
};

export default AdminCarRegisterPresenter;
