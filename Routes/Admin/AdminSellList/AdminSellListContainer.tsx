import React, { useState, useEffect } from "react";
import AdminSellListPresenter from "./AdminSellListPresenter";
import useInput from "../../../src/Components/Hooks/useInput";
import updateSales from "../../../services/sales/updateSales";
import salesList from "../../../services/sales/salesList";
import addPost from "../../../services/post/addPost";
const AdminSellListContainer = () => {
  interface IPost {
    images?: string[];
    no: string;
    id: number;
    car_no: string;
    price: number;
    phone: string;
    address: string;
    pickup_date: string;
    state: string;
    seller: number;
  }
  const [toggleBtn, setToggleBtn] = useState(null);
  let [imageArray, setImageArray] = useState([]);

  const [dbSellList, setDbSellList] = useState(null);

  const setToggleBtnIndex = (index: any) => {
    setToggleBtn(index);
  };
  const imgUploaderInput = useInput(
    "http://sales.autoplus.co.kr/nfs_img/PRODUCT/C19061800018/IMG01.jpg"
  );
  const resisterImage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setImageArray([...imageArray, imgUploaderInput.value]);
    imgUploaderInput.setValue("");
  };

  const res = async () => {
    const { data } = await salesList();
    setDbSellList(data);
  };
  const submitServer = () => {
    if (toggleBtn === null) {
      alert("맨 왼쪽 빨간 박스를 반드시 1개만 선택하세요!");
    } else {
      setImageArray(null);
      setToggleBtn(null);
      dbSellList.map(async (list: IPost, index: number) => {
        if (list.no === toggleBtn) {
          const rc = await addPost(
            list.car_no,
            list.price,
            imageArray,
            list.state,
            list.seller
          );
          // const { data } = rc;
          // const temp = data.picture.split(",");
        }

        if (toggleBtn === list.no) {
          list.state = "등록완료";
          updateSales(toggleBtn, list.state);
        }
      });
    }
  };
  useEffect(() => {
    res();
  }, []);
  return (
    <AdminSellListPresenter
      imgUploaderInput={imgUploaderInput}
      resisterImage={resisterImage}
      sellList={dbSellList}
      toggleBtn={toggleBtn}
      setToggleBtnIndex={setToggleBtnIndex}
      imageArray={imageArray}
      submitServer={submitServer}
    ></AdminSellListPresenter>
  );
};

export default AdminSellListContainer;
