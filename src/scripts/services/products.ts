import { GET_ALL_PRODUCTS } from "./api";
import axios from "../axios";

export const getAllProducts = async function () {
  const response = await axios.get(`${GET_ALL_PRODUCTS}`);
  return response.data;
};
