import { MouseEvent, useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { calculateTotalPrice, calculateTotalPriceByCompany } from 'recoil/cart';
import { appliedCouponList, myCouponList } from 'recoil/coupon';

import CouponItemCard from './CouponItemCard';
import styles from './MyCouponList.module.css';

export default function MyCouponList() {
  const { text, listItemContainer } = styles;

  const [couponData, setCouponData] = useRecoilState(myCouponList);
  const appliedCoupons = useRecoilValue(appliedCouponList);
  const totalPrice = useRecoilValue(calculateTotalPrice);
  const totalPriceByCompany = useRecoilValue(calculateTotalPriceByCompany);

  const disabledChecker = useCallback(
    (id: string) => {
      // 적용 취소는 언제나 가능
      if (appliedCoupons?.some((coupon) => coupon?.id === id)) {
        return false;
      } else {
        // min price check : 쿠폰에 기입된 회사별 최저 금액 이상 구매 시 적용 가능
        const targetCoupon = couponData.find((coupon) => coupon.id === id);

        if (targetCoupon) {
          if (targetCoupon?.company === '그린랩스(주)' && targetCoupon.minPrice > totalPriceByCompany[0]) {
            return true;
          } else if (targetCoupon?.company === '(주)팜모닝' && targetCoupon.minPrice > totalPriceByCompany[1]) {
            return true;
          } else if (targetCoupon?.company === 'all' && targetCoupon.minPrice > totalPrice) {
            return true;
          }
        }

        // duplication check : 중복가능 포함하면 2개, 아니면 1개만 적용 가능
        if (!appliedCoupons?.length) {
          return false;
        } else if (appliedCoupons?.length === 1) {
          return !(appliedCoupons[0].duplication || couponData.find((coupon) => coupon.id === id)?.duplication);
        } else {
          return true;
        }
      }
    },
    [appliedCoupons, couponData, totalPrice, totalPriceByCompany],
  );

  const handleClickCouponItem = (id: string) => (_event: MouseEvent<HTMLButtonElement>) => {
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
    setCouponData(newCouponData);
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
