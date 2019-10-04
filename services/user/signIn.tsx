import axios from "axios";

const userAPI = axios.create({
  baseURL: "http://192.168.31.129:8080/",
  headers: {
    "Content-Type": "application/json;"
  }
});
// 로그인
export const signIn = async (id: string, pw: string) => {
  const { data } = await userAPI({
    url: `/api/user/login`,
    method: "post",
    data: {
      id: id,
      password: pw
    }
  });
  return data;
};
