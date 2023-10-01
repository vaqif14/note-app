import axios from "axios";
import { useMutation } from "react-query";

const getToken = ({ username, password }) => {
  const form = new FormData();
  form.append("username", username);
  form.append("password", password);
  return axios.post("http://localhost:8000/token", form).then((e) => e.data);
};

export const useGetToken = () =>
  useMutation(({ username, password }) => getToken({ username, password }), {
    onSuccess: (data) => {
      localStorage.setItem("token", data?.access_token);
    },
  });
