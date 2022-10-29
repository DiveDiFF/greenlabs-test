import { atom } from 'recoil';
import { ProductItem } from 'typings/product';

export const myCartList = atom<ProductItem[]>({
  key: 'myCartList',
  default: [],
});
