import { MouseEvent, useCallback, useMemo } from 'react';
import { useSetRecoilState } from 'recoil';
import { myCouponList } from 'recoil/coupon';
import { CouponItem } from 'typings/coupon';

import CouponItemCard from './CouponItemCard';
import styles from './MyCouponList.module.css';

type MyCouponListProps = {
  couponData: CouponItem[];
};

export default function MyCouponList({ couponData }: MyCouponListProps) {
  const { text, listItemContainer } = styles;

  const setCoupons = useSetRecoilState(myCouponList);
  const appliedCoupon = useMemo(() => couponData.filter((coupon) => coupon?.isApplied), [couponData]);

  const disabledChecker = useCallback(
    (id: string) => {
      if (appliedCoupon?.some((coupon) => coupon?.id === id)) {
        return false;
      } else {
        if (!appliedCoupon?.length) {
          return false;
        } else if (appliedCoupon?.length === 1) {
          return !(appliedCoupon[0].duplication || couponData.find((coupon) => coupon.id === id)?.duplication);
        } else {
          return true;
        }
      }
    },
    [appliedCoupon, couponData],
  );

  const handleClickCouponItem = (id: string) => (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(id);

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
