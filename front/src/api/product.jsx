import { useQuery, useMutation } from "react-query";
import axios from "axios";

const getProduct = () =>
  axios.get("https://localhost:8000/products").then((e) => e.data);

export const useGetproduc = () => useQuery(["get-product"], getProduct);

const createProduct = (data) =>
  axios.post("https://localhost:8000/products", data).then((e) => e.data);

export const useCreateproduct = () =>
  useMutation((data) => createProduct(data));

const getProductById = (id) =>
  axios.get(`https://localhost:8000/products/${id}`).then((e) => e.data);

export const useGetProductById = () =>
  useQuery(["product-by-id"], (id) => getProductById(id));


  