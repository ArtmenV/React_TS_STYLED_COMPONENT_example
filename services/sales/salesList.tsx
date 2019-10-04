import axios from "axios";

const postAPI = axios.create({
  baseURL: "http://192.168.31.129:8080/",
  headers: {
    "Content-Type": "application/json;"
  }
});

// 모든 판매신청 게시물 불러오기
export default async () => {
  const data = await postAPI({
    url: `/api/sales/list`,
    method: "get"
  });
  //   console.log(data);
  return data;
};
