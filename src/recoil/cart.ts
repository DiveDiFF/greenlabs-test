import { atom } from 'recoil';
import { CartItem } from 'typings/cart';

export const myCartList = atom<CartItem[]>({
  key: 'myCartList',
  default: [],
});
