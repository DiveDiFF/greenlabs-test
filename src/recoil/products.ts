import mockProductData from 'db/data.json';
import { atom } from 'recoil';
import { ProductItem } from 'typings/product';

export const productList = atom<ProductItem[]>({
  key: 'productList',
  default: mockProductData,
});
