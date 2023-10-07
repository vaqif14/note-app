import axios from "axios";
import { useQuery } from "react-query";

const profile = () =>
  axios
    .get(
      "https://api.escuelajs.co/api/v1/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((res) => res.data);

export const useGetProfile = () => useQuery(["get-profile"], profile);
