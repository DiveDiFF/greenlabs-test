import Chip from 'components/common/Chip';
import { useRouter } from 'next/router';
import { MouseEvent, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { appliedCouponList, myCouponList } from 'recoil/coupon';

import styles from './ApplyCoupon.module.css';

export default function ApplyCoupon() {
  const { container, applyButton, numberText } = styles;
  const { push } = useRouter();
  const couponData = useRecoilValue(myCouponList);
  const appliedCouponData = useRecoilValue(appliedCouponList);

  const handleClickCouponSection = useCallback(
    (_event: MouseEvent<HTMLButtonElement>) => {
      push('/coupon');
    },
    [push],
  );

  return (
    <section className={container}>
      <button onClick={handleClickCouponSection} className={applyButton}>
        <h5>할인쿠폰</h5>
        {!!appliedCouponData?.length && <Chip label="적용완료" variant="confirm" />}
        <p className={numberText}>{couponData?.length}개 보유</p>
      </button>
    </section>
  );
}
