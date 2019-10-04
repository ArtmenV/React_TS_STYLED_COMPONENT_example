import axios from "axios";

const authAPI = axios.create({
  baseURL: "http://192.168.31.129:8080/",
  headers: {
    "Content-Type": "application/json;"
  }
});

// 판매자 핸드폰 인증
export default async (content: string, to: string) => {
  console.log(content, to);
  const { data } = await authAPI({
    url: `/api/auth/phone`,
    method: "post",
    data: {
      content,
      to
    }
  });
  return data;
};
