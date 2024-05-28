import axios from "./../utils/axios";
import { GET_ALL_USERS } from "./api";

export const getAllProducts = async function () {
  const response = await axios.get(`${GET_ALL_USERS}`);
  console.log(response);
};
