[TOC]

## 설계도

만섭 추가

### 1. 공통

- 버튼
  - sm
  - md
  - lg
- Input
  - border
  - padding
- defaultBorder
  - px
  - color

---

### 2. Main

- Common
  - Header
    - MainHeaderContainer
      - Logo
      - Login
      - SignUp
      - MyPage
    - SubHeaderContainer
      - 내 차 사기
      - 내 차 팔기
  - SideBar
    - SideBarControllerContainer
      - Button
      - Button
      - Button
      - Button
      - TopButton
    - SideBarCarContainer
      - FatText
        - Count
      - List
        - SideBarCarCard
    - SideBarCarCard \*
- Banner
- SearchCarContainer
  - SearchCarForm
  - SearchPreFilterList
    - PreFilterItem
      - title
      - content
  - ButtonContainer
- FatText(size,weigtht) 최근 등록 차량
- CarCard
- Button(size 등..)
- Footer

---

### 3. Search

- Common
  - Header
  - SideBar
- Filter
  - checkBox
  - slideBar (가격조절)
- FatText
- Tag

---

### 4. CarDetail

- CarContainer
  - CarImageContainer
    - SelectedCarImage
    - CarImages
  - CarInfoContainer
    - Header
      - FatText
    - Content
      - FatText
      - TagList
        - Tag
    - Button
- CarDetailContainer
  - CarOption
  - CarPerformance
  - CarInsurance

---

### 5. BuyCar

- BuyCarInfo
- PaymentFormContainer
  - IdCertiContainer
    - name
    - phoneNumber
  - CalenderContainer
    - Calender
    - Time
  - BuyGuideContainer
- PaymentBtnContainer
  - Agree
  - Button

---

### 6. SellCar

- Common
  - Header
  - SideBar
- SellCarContainer
  - SellCarTitle
  - SellCarFormContatiner
    - CarCertiForm
    - CarPerformance \*
    - button
- SellCarProsess
- SellCarFAQ
  - FatText
  - FaqCard
- Footer

<<<<<<< HEAD

------
=======
---
>>>>>>> develop

#### branch

- feat: 새로운 기능을 추가할 경우
- fix: 버그를 고친 경우
- docs: 문서 수정한 경우
- style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- refactor: 프로덕션 코드 리팩터링
- test: 테스트 추가, 테스트 리팩터링 (프로덕션 코드 변경 없음)
- chore: 빌드 테스크 업데이트, 패키지 매니저 설정할 경우 (프로덕션 코드 변경 없음)

<<<<<<< HEAD
------
=======
---
>>>>>>> develop

#### Commit Message

- 기능 : 기능 추가, 삭제, 변경 (제품 코드 수정 발생)
- 버그 : 버그 수정 (제품 코드 수정 발생)
- 리팩토링 : 코드 리팩토링 (제품 코드 수정 발생)
<<<<<<< HEAD
- 형식 : 코드 형식, 정렬, 주석 등의 변경 (제품 코드 수정 발생.  하지만 동작에 영향을 주는 변경은 없음)
- 테스트 : 테스트 코드 추가, 삭제, 변경 등 (제품 코드 수정 없음. 테스트 코드에 관련된 모든 변경에 해당)
- 문서 : 문서 추가, 삭제, 변경 (코드 수정 없음)
- 기타 : 위에 해당되지 않는 모든 변경 (예: 빌드 슼크립트 수정, 패키지 배포 설정 변경 등) 을 포함 (코드 수정 없음)
- 위 유형들이 복합적으로 포함되어 있는 경우, 되도록 커밋을 분리한다.  분리가 어려운 경우에는 위 순서상 상위 항목의 유형으로 작성한다.

 



------

##### 예시

- 기능 : 최근 목록 보기 버튼 색상 수정   

- 띄우기

- 무엇을: 사이드바에 있는 최근 목록 보기 버튼 색상을 red -> green으로 변경하였음. 

- 왜 : 컨셉색이 변경 되어서
=======
- 형식 : 코드 형식, 정렬, 주석 등의 변경 (제품 코드 수정 발생. 하지만 동작에 영향을 주는 변경은 없음)
- 테스트 : 테스트 코드 추가, 삭제, 변경 등 (제품 코드 수정 없음. 테스트 코드에 관련된 모든 변경에 해당)
- 문서 : 문서 추가, 삭제, 변경 (코드 수정 없음)
- 기타 : 위에 해당되지 않는 모든 변경 (예: 빌드 슼크립트 수정, 패키지 배포 설정 변경 등) 을 포함 (코드 수정 없음)
- 위 유형들이 복합적으로 포함되어 있는 경우, 되도록 커밋을 분리한다. 분리가 어려운 경우에는 위 순서상 상위 항목의 유형으로 작성한다.

---

##### 예시

- 기능 : 최근 목록 보기 버튼 색상 수정

- 띄우기

- 무엇을: 사이드바에 있는 최근 목록 보기 버튼 색상을 red -> green으로 변경하였음.

- 왜 : 컨셉색이 변경 되어서

### 차량 옵션

#### 기본

- 선루프
- 헤드램프(HID)
- 주차감지센서
- 후방카메라
- 스마트키
- 내비게이션
- 가죽시트
- 열선시트(앞)
- 열선시트(뒷)
- 통풍시트(운전석)
- 통풍시트(동승석)

#### 추가

- 에어백(운전석,동승석)
- 브레이크 잠김 방지(ABS)
- 전동접이 사이트 미러
- 하이패스
- 파워 스티어링 휠
- 타이어 공기압센서(TPMS)
- 크루즈 컨트롤(일반)
- 헤드업 디스플레이(HUD)
- 블루투스
-
>>>>>>> develop
