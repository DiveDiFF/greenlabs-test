import { atom, selector } from 'recoil';
import { CartItem } from 'typings/cart';

export const myCartList = atom<CartItem[]>({
  key: 'myCartList',
  default: [],
});

export const selectedCartList = selector<CartItem[]>({
  key: 'selectedCartList',
  get: ({ get }) => {
    const carts = get(myCartList);
    return carts.filter((item) => item.isSelected);
  },
});
