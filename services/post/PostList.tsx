import axios from "axios";

const postAPI = axios.create({
  baseURL: "http://192.168.31.129:8080/",
  headers: {
    "Content-Type": "application/json;"
  }
});

// 판매신청 게시물 등록
export default async () => {
  const data = await postAPI({
    url: `/api/post/list`,
    method: "get"
  });
  return data;
};
