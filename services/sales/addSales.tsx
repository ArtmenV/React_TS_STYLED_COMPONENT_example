import axios from "axios";

const sellCarAPI = axios.create({
  baseURL: "http://192.168.31.129:8080/",
  headers: {
    "Content-Type": "application/json;"
  }
});

export default async (
  carPrice: number,
  pickUpDate: string,
  pickUpAddress: string,
  phoneNumber: string,
  seller: number,
  carNumber: string,
  userName: string
) => {
  console.log(
    carPrice,
    pickUpDate,
    pickUpAddress,
    phoneNumber,
    seller,
    carNumber,
    userName
  );
  const { data } = await sellCarAPI({
    url: `/api/sales/add`,
    method: "post",
    data: {
      address: pickUpAddress,
      phone: phoneNumber,
      pickup_date: pickUpDate,
      price: carPrice,
      seller: seller,
      car_no: carNumber,
      name: userName
    }
  });
  return data;
};
