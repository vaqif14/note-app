import axios from "axios";
import { useQuery, useMutation } from "react-query";

// CRUD methods post put delete

const login = ({ email, password }) =>
  axios
    .post("https://api.escuelajs.co/api/v1/auth/login", {
      email,
      password,
    })
    .then((res) => res.data);

export const useLogin = () =>
  useMutation(({ email, password }) => login({ email, password }));
