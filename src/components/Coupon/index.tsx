import { MouseEvent, useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { appliedCouponList, myCouponList } from 'recoil/coupon';
import { CouponItem } from 'typings/coupon';

import CouponItemCard from './CouponItemCard';
import styles from './MyCouponList.module.css';

type MyCouponListProps = {
  couponData: CouponItem[];
};

export default function MyCouponList({ couponData }: MyCouponListProps) {
  const { text, listItemContainer } = styles;

  const setCoupons = useSetRecoilState(myCouponList);
  const appliedCoupons = useRecoilValue(appliedCouponList);

  const disabledChecker = useCallback(
    (id: string) => {
      if (appliedCoupons?.some((coupon) => coupon?.id === id)) {
        return false;
      } else {
        if (!appliedCoupons?.length) {
          return false;
        } else if (appliedCoupons?.length === 1) {
          return !(appliedCoupons[0].duplication || couponData.find((coupon) => coupon.id === id)?.duplication);
        } else {
          return true;
        }
      }
    },
    [appliedCoupons, couponData],
  );

  const handleClickCouponItem = (id: string) => (event: MouseEvent<HTMLButtonElement>) => {
    const newCouponData = couponData.map((coupon) => {
      if (coupon.id === id) {
        return {
          ...coupon,
          isApplied: !coupon.isApplied,
        };
      } else {
        return coupon;
      }
    });
    setCoupons(newCouponData);
  };

  return (
    <ul>
      <p className={text}>사용 가능한 쿠폰 : {couponData.length}개</p>
      {couponData.map((coupon) => (
        <li key={coupon?.id} className={listItemContainer}>
          <CouponItemCard {...coupon} onClick={handleClickCouponItem(coupon?.id)} disabled={disabledChecker(coupon?.id)} />
        </li>
      ))}
    </ul>
  );
}
