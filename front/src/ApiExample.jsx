import React, { useState } from "react";
import { useGetProduct } from "./queryExample";
import { useCreateProduct } from "./mutationExample";
import { useGetToken } from "./api/user";

const ApiExample = () => {
  const [productDataState] = useState({
    name: "string",
    price: 0,
    description: "string",
  });
  const { data: productData } = useGetProduct();
  const { mutate: createProduct, data: createProductData } = useCreateProduct();
  const { mutate: getToken } = useGetToken();
  const onCreate = () => {
    createProduct(productDataState);
  };
  const onGetToken = () => {
    getToken({
      username: "string",
      password: "string",
    });
  };
  return (
    <div>
      <button onClick={onCreate}>Create Btn</button>
      <button onClick={onGetToken}>On login</button>
    </div>
  );
};

export default ApiExample;
