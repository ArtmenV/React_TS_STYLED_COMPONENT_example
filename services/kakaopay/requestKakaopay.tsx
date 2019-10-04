import axios from "axios";

const postAPI = axios.create({
  baseURL: "http://192.168.31.114:8080/"
});

// 판매신청 게시물 등록
export default async () => {
  const data = await postAPI({
    url: `/kakao/kakaoPay`,
    method: "post"
  });
  return data;
};
