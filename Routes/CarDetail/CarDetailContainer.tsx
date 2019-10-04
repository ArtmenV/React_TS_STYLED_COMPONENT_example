import React, { useEffect, useState } from "react";
import CarDetailPresenter from "./CarDetailPresenter";
import { RouteComponentProps } from "react-router-dom";
import PostDetail from "../../services/post/PostDetail";

interface MatchParams {
  id: string;
}

const CarDetailContainer: React.FunctionComponent<
  RouteComponentProps<MatchParams>
> = ({ match, history, location }) => {
  console.log(match.params.id);
  const [carBasicInfo, setCarBasicInfo] = useState();
  const [carTotalState, setCarTotalState] = useState();
  const [carOwnerInfo, setCarOwnerInfo] = useState();
  const [carInsuranceHistory, setCarInsuranceHistory] = useState();
  const [price, setPrice] = useState();
  const [picture, setPicture] = useState();
  const addRecentlyViewCarList = () => {
    const recentlyViewCarList = localStorage.getItem("recentlyViewCarList");
    if (recentlyViewCarList === null) {
      //현재 차 정보만 로컬스토리지에 넣기
      // localStorage.getItem("recentlyViewCarList",);
    } else {
      // 로컬스토리지에 있던 값에 push 해서 로컬스토리지에 다시 넣기
      // console.log(recentlyViewCarList);
    }
  };

  const getCarDetail = async () => {
    const { data } = await PostDetail(Number(match.params.id));
    const carData = JSON.parse(data.car.carData);
    // const stringPicture = data.picture.includes(",") ? data.picture[0] : data.picture;
    let picture = data.picture.includes(",") ? data.picture : [data.picture];
    setCarBasicInfo(carData.carBasicInfo);
    setCarTotalState(carData.carTotalState);
    setCarOwnerInfo(carData.carOwnerInfo);
    setCarInsuranceHistory(carData.carInsuranceHistory);
    setPrice(data.price);
    setPicture(picture);
  };

  useEffect(() => {
    window.scrollTo(0, 11);
    addRecentlyViewCarList();
    getCarDetail();
  }, []);

  const carOptions = [
    {
      id: "1",
      name: "선루프",
      imageURL:
        "http://www.encar.com/images//carsdata/option_images/option1-1.png",
      desc:
        "자동차 루프가 유리로 되어 개폐할 수 있는 장치로 선루프와 넓은 파노라마 선루프가 있습니다."
    },
    {
      id: "2",
      name: "헤드램프(HID)",
      imageURL:
        "http://www.encar.com/images//carsdata/option_images/option1-2.png",
      desc:
        "HID/LED 헤드램프는 일반 할로겐 대비 색상이 자연광에 가까워 눈에 피로를 주지 않고 가시거리가 넓습니다."
    },
    {
      id: "3",
      name: "주차감지센서",
      imageURL:
        "http://www.encar.com/images//carsdata/option_images/option2-10.png",
      desc:
        "주차 및 서행 시 앞쪽 범퍼와 뒤쪽 범퍼에 장착된 센서로 장애물을 감지하여 운전자에게 경고음이나 모니터 등으로 알려주는 시스템입니다."
    },
    {
      id: "4",
      name: "후방 카메라",
      imageURL:
        "http://www.encar.com/images//carsdata/option_images/option2-12.png",
      desc:
        "트렁크 또는 번호판 주변에 카메라를 장착하여 주차 및 후진 시 모니터를 통해 후방을 확인 할 수 있는 기능입니다."
    },
    {
      id: "5",
      name: "스마트키",
      imageURL:
        "http://www.encar.com/images//carsdata/option_images/option3-5.png",
      desc:
        "스마트키를 몸에 지니는 것만으로도 도어 잠금장치를 해지할 수 있거나 버튼을 눌러 시동까지 걸 수 있는 편의장치입니다."
    },
    {
      id: "6",
      name: "내비게이션",
      imageURL:
        "http://www.encar.com/images//carsdata/option_images/option3-10.png",
      desc:
        "목적지를 설정하면 GPS가 내장된 모니터에서 길 안내, 각종 교통정보를 제공해 줍니다."
    },
    {
      id: "7",
      name: "열선시트(앞좌석)",
      imageURL:
        "http://www.encar.com/images//carsdata/option_images/option4-4.png",
      desc: "겨울철 스위치 ONOFF로 시트를 따뜻하게 해주는 기능입니다."
    }
  ];
  return (
    <CarDetailPresenter
      carOptions={carOptions}
      carBasicInfo={carBasicInfo}
      carTotalState={carTotalState}
      carOwnerInfo={carOwnerInfo}
      carInsuranceHistory={carInsuranceHistory}
      price={price}
      picture={picture}
    ></CarDetailPresenter>
  );
};

export default CarDetailContainer;
