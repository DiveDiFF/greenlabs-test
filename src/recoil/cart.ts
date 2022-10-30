import { atom, selector } from 'recoil';
import { CartItem } from 'typings/cart';

import { appliedCouponList } from './coupon';

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

export const calculateTotalPrice = selector<number>({
  key: 'calculateTotalPrice',
  get: ({ get }) => {
    const selectedCartItems = get(selectedCartList);

    return selectedCartItems.reduce((acc, currentVal) => currentVal?.productData?.price * currentVal?.quantity + acc, 0);
  },
});

export const calculateTotalDiscount = selector<number>({
  key: 'calculateTotalDiscount',
  get: ({ get }) => {
    const appliedCoupons = get(appliedCouponList);
    const totalPrice = get(calculateTotalPrice);

    return appliedCoupons.reduce((acc, { discountPercent, discountPrice }) => {
      if (discountPercent) {
        acc += Math.floor(totalPrice * (discountPercent / 100));
      }
      if (discountPrice) {
        acc += discountPrice;
      }
      return acc;
    }, 0);
  },
});

export const calculateShippingFee = selector({
  key: 'calculateShippingFee',
  get: ({ get }) => {
    const appliedCoupons = get(appliedCouponList);

    return appliedCoupons.some((coupon) => coupon.freeShipping) ? 0 : 3000;
  },
});
