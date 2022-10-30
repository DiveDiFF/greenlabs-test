import mockCouponData from 'db/coupon.json';
import { atom, selector } from 'recoil';
import { CouponItem } from 'typings/coupon';

export const myCouponList = atom<CouponItem[]>({
  key: 'myCouponList',
  default: mockCouponData,
});

export const appliedCouponList = selector<CouponItem[]>({
  key: 'appliedCouponList',
  get: ({ get }) => {
    const coupons = get(myCouponList);
    return coupons.filter((coupon) => coupon.isApplied);
  },
});
