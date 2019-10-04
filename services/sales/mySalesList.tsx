import axios from "axios";

const sellCarAPI = axios.create({
  baseURL: "http://192.168.31.129:8080/",
  headers: {
    "Content-Type": "application/json;"
  }
});

export const searchSellListByUser = async (seq: number) => {
  const { data } = await sellCarAPI({
    url: `/api/sales/userlist/${seq}`,
    method: "get"
  });
  return data;
};
