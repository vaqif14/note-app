import React from "react";
import { useGetProduct } from "./queryExample";
import { useCreateProduct } from "./mutationExample";
const App = () => {
  const [productData] = React.useState({
    name: "string" + Math.random(),
    price: 0,
    description: "string",
  });
  const { data, isSuccess, isError } = useGetProduct();
  const {
    mutate,
    isError: createError,
    isSuccess: createdSuccess,
  } = useCreateProduct();
  console.log(data, isSuccess, isError);

  const onCreateProduct = () => {
    mutate(productData);
  };

  if (isSuccess) {
    return (
      <div>
        <ul>
          {data?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <button onClick={onCreateProduct}>call post</button>
      </div>
    );
  }

  return <div>App</div>;
};

export default App;
