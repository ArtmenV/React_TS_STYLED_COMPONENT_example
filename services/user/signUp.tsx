import axios from "axios";

const userAPI = axios.create({
  baseURL: "http://192.168.31.129:8080/",
  headers: {
    "Content-Type": "application/json;"
  }
});

// 회원가입
export const signUp = async (id: string, pw: string) => {
  const res = await userAPI({
    url: `/api/user/add`,
    method: "post",
    data: {
      id: id,
      password: pw
    }
  });
  console.log(res);
  return res.data;
};
