import axios from "axios";

const postAPI = axios.create({
  baseURL: "http://192.168.31.129:8080/",
  headers: {
    "Content-Type": "application/json;"
  }
});

// 판매신청게시물 상태 업데이트
export default async (no: number, state: string) => {
  const data = await postAPI({
    url: `/api/sales/updatestate`,
    method: "put",
    data: {
      no,
      state
    }
  });
  return data;
};
