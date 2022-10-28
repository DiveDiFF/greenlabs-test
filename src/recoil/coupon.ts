import mockCouponData from 'db/coupon.json';
import { atom } from 'recoil';

export const myCouponList = atom({
  key: 'myCouponList',
  default: mockCouponData,
});
