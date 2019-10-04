import React, { useState, FunctionComponent, useEffect } from "react";
import MainPresenter from "./MainPresenter";
import useSelect from "../../src/Components/Hooks/useSelect";
import PostList from "../../services/post/PostList";
import { RouteComponentProps } from "react-router";

interface Ihistory {}

const MainContainer: FunctionComponent<RouteComponentProps<Ihistory>> = ({
  history
}) => {
  const [carList, setCarList] = useState();
  // const carList = [
  //   {
  //     name: "k3",
  //     price: 100000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 1
  //   },
  //   {
  //     name: "k3",
  //     price: 100000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 2
  //   },
  //   {
  //     name: "k3",
  //     price: 100000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 3
  //   },
  //   {
  //     name: "k3",
  //     price: 100000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 4
  //   },
  //   {
  //     name: "k3",
  //     price: 100000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 5
  //   },
  //   {
  //     name: "k3",
  //     price: 100000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 6
  //   },
  //   {
  //     name: "k3",
  //     price: 100000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 7
  //   },
  //   {
  //     name: "k3",
  //     price: 100000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 8
  //   },
  //   {
  //     name: "k3",
  //     price: 100000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 9
  //   },
  //   {
  //     name: "k3",
  //     price: 100000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 10
  //   }
  // ];
  const [isSearchPreFilterListOpen, setIsSearchPreFilterListOpen] = useState(
    false
  );
  const submitToSessionStorage = (
    company: string,
    model: string,
    modelDetail: string
  ) => {
    console.log("session넣기직전!!>>", company, model, modelDetail);
    window.sessionStorage.setItem("company", company);
    window.sessionStorage.setItem("model", model);
    window.sessionStorage.setItem("modelDetail", modelDetail);
    history.push("search");
  };
  // const handleCompanySelect = (
  //   event: React.ChangeEvent<HTMLSelectElement>
  // ): void => {
  //   window.sessionStorage.setItem("Company", event.target.value);
  // };

  const companySelect = useSelect("제조사를 선택하세요.");
  const modelSelect = useSelect("모델을 선택하세요.");
  const modelDetailSelect = useSelect("세부모델을 선택하세요.");
  const companys = [
    {
      en: "제조사를 선택하세요.",
      kr: "제조사를 선택하세요.",
      companyModels: ["모델을 선택하세요."]
    },
    {
      en: "hyundai",
      kr: "현대",
      companyModels: [
        "모델을 선택하세요.",
        "아반떼",
        "그랜져",
        "쏘나타",
        "i30",
        "i40",
        "코나"
      ]
    },
    {
      en: "kia",
      kr: "기아",
      companyModels: ["모델을 선택하세요.", "k3", "k5", "k7"]
    }
  ];
  const modelDetails = [
    {
      model: "모델을 선택하세요.",
      carModelDetails: ["세부모델을 선택하세요."]
    },
    {
      model: "아반떼",
      carModelDetails: ["세부모델을 선택하세요.", "xd", "hd", "md", "ad"]
    },
    {
      model: "쏘나타",
      carModelDetails: [
        "세부모델을 선택하세요.",
        "DN8",
        "뉴라이즈",
        "LF소나타",
        "YF소나타"
      ]
    },
    {
      model: "그랜져",
      carModelDetails: [
        "세부모델을 선택하세요.",
        "그랜져 IG 하이브리드(17년~현재)",
        "그랜져 IG(16년~현재)",
        "그랜져 HG 하이브리드(13~17년)",
        "그랜져 HG(11~16년)",
        "더 럭셔리 그랜져(09년~11년)"
      ]
    }
  ];

  const onCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    companySelect.setValue(e.target.value);
    modelSelect.setValue("모델을 선택하세요.");
  };

  const onModelSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    modelSelect.setValue(e.target.value);
    modelDetailSelect.setValue("세부모델을 선택하세요.");
  };

  const getPostList = async () => {
    const { data } = await PostList();
    setCarList(data);
  };

  useEffect(() => {
    getPostList();
  }, []);
  return (
    <MainPresenter
      carList={carList}
      isSearchPreFilterListOpen={isSearchPreFilterListOpen}
      setIsSearchPreFilterListOpen={setIsSearchPreFilterListOpen}
      submitToSessionStorage={submitToSessionStorage}
      companySelect={companySelect}
      modelSelect={modelSelect}
      modelDetailSelect={modelDetailSelect}
      companys={companys}
      modelDetails={modelDetails}
      onCompanyChange={onCompanyChange}
      onModelSelectChange={onModelSelectChange}
    ></MainPresenter>
  );
};
export default MainContainer;
