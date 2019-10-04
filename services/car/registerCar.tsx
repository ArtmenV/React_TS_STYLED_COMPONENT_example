import axios from "axios";

const CarAPI = axios.create({
  baseURL: "http://192.168.31.129:8080/",
  headers: {
    "Content-Type": "application/json;"
  }
});

// 패브릭 차량 등록
export default async (
  carNumber: string,
  carData: string,
  name: string,
  phone: string
) => {
  console.log(carNumber, carData);
  console.log(name, phone);
  const data = await CarAPI({
    url: `/api/car`,
    method: "post",
    data: {
      carNumber,
      carData,
      name,
      phone
    }
  });
  console.log(data);
  return data;
};
