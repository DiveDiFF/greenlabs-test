import mockCouponData from 'db/coupon.json';
import { atom } from 'recoil';
import { CouponItem } from 'typings/coupon';

export const myCouponList = atom<CouponItem[]>({
  key: 'myCouponList',
  default: mockCouponData,
});
