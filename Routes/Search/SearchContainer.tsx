import React, { FunctionComponent, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SearchPresenter from "./SearchPresenter";
import { rootState } from "../../reducer";
import {
  addModelAction,
  addModelDetailAction,
  addCompanyAction
} from "../../reducer/searchPage/searchPageActions";
const SearchContainer: FunctionComponent = () => {
  const [carList, setCarList] = useState();
  // const carList = [
  //   {
  //     name: "아반떼",
  //     price: 15500000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 1
  //   },
  //   {
  //     name: "아반떼",
  //     price: 15500000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 2
  //   },
  //   {
  //     name: "아반떼",
  //     price: 15500000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 3
  //   },
  //   {
  //     name: "아반떼",
  //     price: 15500000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 4
  //   },
  //   {
  //     name: "아반떼",
  //     price: 15500000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 5
  //   },
  //   {
  //     name: "아반떼",
  //     price: 15500000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 6
  //   },
  //   {
  //     name: "아반떼",
  //     price: 15500000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 7
  //   },
  //   {
  //     name: "아반떼",
  //     price: 15500000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 8
  //   },
  //   {
  //     name: "아반떼",
  //     price: 15500000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 9
  //   },
  //   {
  //     name: "아반떼",
  //     price: 15500000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 10
  //   },
  //   {
  //     name: "아반떼",
  //     price: 15500000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 11
  //   },
  //   {
  //     name: "아반떼",
  //     price: 15500000,
  //     url: "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19060400010/IMG01.jpg",
  //     id: 12
  //   }
  // ];
  const dispatch = useDispatch();
  useEffect(() => {
    const company = window.sessionStorage.getItem("company");
    const model = window.sessionStorage.getItem("model");
    const modelDetail = window.sessionStorage.getItem("modelDetail");
    dispatch(addModelAction(model));
    dispatch(addModelDetailAction(modelDetail));
    dispatch(addCompanyAction(company));
  }, []);

  // store는 1개니깐, rootState를 참조하지 않으면 안됌.
  // 예를들어 여기서, rootState가 아니라, IModelState를 하면, store는 1개라서 안된다.
  // store는 reducer가 전부 합쳐져있는거다 보니깐, IModelState + ScrollDown 을 해줘야함.
  // 각각 하나씩 해주면 안됌. 저 2개가 합쳐져있는게 rootState임.
  // 오늘 할일 : 리듀서 인터페이스 이름 정리하기, 3개 컴포넌트에 각각 작업하기

  return <SearchPresenter carList={carList}></SearchPresenter>;
};
export default SearchContainer;
