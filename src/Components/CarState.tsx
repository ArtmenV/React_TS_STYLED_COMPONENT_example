import React from "react";
import styled from "styled-components";
import Theme from "../Styles/Theme";

const Wrapper = styled.div`
  padding: 40px;
  padding-top: 80px;
  background-color: white;
  /* padding-top: 40px;
  width: 100%; */
  display: grid;
  grid-gap: 40px;
  justify-content: center;
  box-shadow: ${Theme.boxShadow};
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
  align-items: center;
  grid-auto-flow: column;
  grid-auto-columns: 170px 200px;
`;

const TableHeader = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
`;

const TableContent = styled.div`
  padding-left: 5px;
`;

const CarTotalStateContainer = styled.div``;

const CarStateImageList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 330px;
`;

const CarStateImageItem = styled.div<{ url: string }>`
  background-image: ${props => `url(${props.url})`};
  background-position: center;
  background-size: 300px 300px;
  background-repeat: no-repeat;
`;

interface IcarOwnerInfo {
  ownerName: string;
  ownerPhoneNumber: string;
}
interface IcarBasicInfo {
  company: string;
  model: string;
  detailModel: string;
  year: string;
  number: string;
  inspectionValiDate: string;
  firstRegisterDate: string;
  transmission: string;
  fuel: string;
  chassisNumber: string;
  guaranteeType: string;
  primeMoverType: string;
}

interface IcarTotalState {
  instrumentPanelState: string;
  distanceDriven: string;
  carNumberShowState: string;
  exhaustGas: string;
  tuning: string;
  specialRecode: string;
  carUsageChange: string;
  colorState: string;
}

interface IcarInsuranceHistory {
  carNumberChangeCount: string;
  carMyAccidentCount: string;
  carAnotherAccidentCount: string;
}

interface ICarStateProps {
  carOwnerInfo: IcarOwnerInfo;
  carBasicInfo: IcarBasicInfo;
  carTotalState: IcarTotalState;
  carInsuranceHistory: IcarInsuranceHistory;
}

const CarState: React.FunctionComponent<ICarStateProps> = ({
  carOwnerInfo,
  carBasicInfo,
  carTotalState,
  carInsuranceHistory
}) => {
  let secretPhone = "";
  for (let i = 0; i <= 10; i++) {
    if (i < 7) {
      secretPhone = secretPhone + carOwnerInfo.ownerPhoneNumber[i];
    } else {
      secretPhone = secretPhone + "*";
    }
  }
  return (
    <Wrapper>
      <CarOwnerInfoContainer>
        <FormTitle>차주 정보</FormTitle>
        <FormColumn>
          <FormItem>
            <TableHeader>이름 </TableHeader>
            <TableContent>{`${carOwnerInfo.ownerName[0]}**`}</TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>핸드폰 번호</TableHeader>
            <TableContent>{secretPhone}</TableContent>
          </FormItem>
        </FormColumn>
      </CarOwnerInfoContainer>
      <CarBasicInfoContainer>
        <FormTitle>차량기본정보</FormTitle>
        <FormColumn>
          <FormItem>
            <TableHeader>회사 </TableHeader>
            <TableContent>{carBasicInfo.company}</TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>차량 모델</TableHeader>
            <TableContent>{carBasicInfo.model}</TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>상세모델</TableHeader>
            <TableContent>{carBasicInfo.detailModel}</TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>연식</TableHeader>
            <TableContent>{carBasicInfo.year}</TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>차량번호</TableHeader>
            <TableContent>{carBasicInfo.number}</TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>검사유효기간</TableHeader>
            <TableContent>{carBasicInfo.inspectionValiDate}</TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>최초등록일</TableHeader>
            <TableContent>{carBasicInfo.firstRegisterDate}</TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>변속기종류</TableHeader>
            <TableContent>{carBasicInfo.transmission}</TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>사용연료</TableHeader>
            <TableContent>{carBasicInfo.fuel}</TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>차대번호</TableHeader>
            <TableContent>{carBasicInfo.chassisNumber}</TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>보증유형</TableHeader>
            <TableContent>{carBasicInfo.guaranteeType}</TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>원동기형식</TableHeader>
            <TableContent>{carBasicInfo.primeMoverType}</TableContent>
          </FormItem>
        </FormColumn>
      </CarBasicInfoContainer>

      <CarTotalStateContainer>
        <FormTitle>차량 종합상태</FormTitle>
        <CarStateImageList>
          <CarStateImageItem
            url={"http://www.ajsellcar.co.kr/_images/buycar/img_carcheck1.png"}
          ></CarStateImageItem>
          <CarStateImageItem
            url={"http://www.ajsellcar.co.kr/_images/buycar/img_carcheck1.png"}
          ></CarStateImageItem>
        </CarStateImageList>
        <FormColumn>
          <FormItem>
            <TableHeader>사용이력</TableHeader>
            <TableHeader>상태</TableHeader>
          </FormItem>
          <FormItem>
            <TableHeader>사용이력</TableHeader>
            <TableHeader>상태</TableHeader>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>주행거리 계기상태 </TableHeader>
            <TableContent>{carTotalState.instrumentPanelState}</TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>주행거리 </TableHeader>
            <TableContent>{carTotalState.distanceDriven}</TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>차대번호 표기</TableHeader>
            <TableContent>{carTotalState.carNumberShowState}</TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>배출가스</TableHeader>
            <TableContent>{carTotalState.exhaustGas}</TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>튜닝 </TableHeader>
            <TableContent>{carTotalState.tuning}</TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>특별이력 </TableHeader>
            <TableContent>{carTotalState.specialRecode}</TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>용도변경</TableHeader>
            <TableContent>{carTotalState.carUsageChange}</TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>색상</TableHeader>
            <TableContent>{carTotalState.colorState}</TableContent>
          </FormItem>
        </FormColumn>
      </CarTotalStateContainer>
      <CarOwnerInfoContainer>
        <FormTitle>보험 및 사고이력</FormTitle>
        <FormColumn>
          <FormItem>
            <TableHeader>자동차번호 / 소유자 변경 횟수 </TableHeader>
            <TableContent>
              {carInsuranceHistory.carNumberChangeCount}
            </TableContent>
          </FormItem>
        </FormColumn>
        <FormColumn>
          <FormItem>
            <TableHeader>보험사고이력: 내차피해 </TableHeader>
            <TableContent>
              {carInsuranceHistory.carMyAccidentCount}
            </TableContent>
          </FormItem>
          <FormItem>
            <TableHeader>보험사고이력: 타차피해</TableHeader>
            <TableContent>
              {carInsuranceHistory.carAnotherAccidentCount}
            </TableContent>
          </FormItem>
        </FormColumn>
      </CarOwnerInfoContainer>
    </Wrapper>
  );
};

export default CarState;
