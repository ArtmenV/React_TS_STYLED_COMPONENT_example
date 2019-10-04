import axios from "axios";

const authAPI = axios.create({
  baseURL: "http://192.168.31.129:8080/",
  headers: {
    "Content-Type": "application/json;"
  }
});

// 판매자 본인 인증
export default async (name: string, phoneNumber: string, carNumber: string) => {
  const { data } = await authAPI({
    url: `/api/auth/user`,
    method: "post",
    data: {
      name: name,
      phone: phoneNumber,
      car_no: carNumber
    }
  });
  return data;
};
