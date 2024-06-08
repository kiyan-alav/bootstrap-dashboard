import { Products } from "../types/product.types";

let productData: Products[] = [];

export const setProductsData = (products: Products[]) => {
  productData = products;
};

export const getProductData = () => productData;
