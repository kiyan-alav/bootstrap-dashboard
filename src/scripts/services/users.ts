import axios from "../axios";
import { GET_ALL_USERS } from "./api";

export const getAllUsers = async function () {
  const response = await axios.get(`${GET_ALL_USERS}`);
  return response.data;
};
