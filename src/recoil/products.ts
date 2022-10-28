import mockProductData from 'db/data.json';
import { atom } from 'recoil';

export const productList = atom({
  key: 'productList',
  default: mockProductData,
});
