import axios from "axios";

const postAPI = axios.create({
  baseURL: "http://192.168.31.129:8080/",
  headers: {
    "Content-Type": "application/json;"
  }
});

// 판매신청 게시물 등록
export default async (
  car_no: string,
  price: number,
  picture: string[],
  state: string,
  seller: number
) => {
  console.log("tststs", car_no, price, picture, state, seller);
  const data = await postAPI({
    url: `/api/post/add`,
    method: "post",
    data: {
      car_no,
      price,
      picture: String(picture),
      state,
      seller
    }
  });
  console.log("최종완료", data);
  return data;
};
