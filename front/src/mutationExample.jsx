import axios from "axios";
import { useMutation } from "react-query";

const createData = (data) =>
  axios.post("http://localhost:8000/products", data).then((e) => e.data);

export const useCreateProduct = () => {
  return useMutation((data) => createData(data));
};
