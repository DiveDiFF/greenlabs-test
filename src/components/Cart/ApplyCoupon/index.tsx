import Chip from 'components/common/Chip';
import { useRouter } from 'next/router';
import { MouseEvent, useCallback } from 'react';

import styles from './ApplyCoupon.module.css';

type ApplyCouponProps = {
  couponNumber: number;
};

export default function ApplyCoupon({ couponNumber }: ApplyCouponProps) {
  const { push } = useRouter();
  const { container, applyButton, numberText } = styles;

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
        <span>-1000원</span>
        <Chip label="적용완료" variant="confirm" />
        <p className={numberText}>{couponNumber}개 보유</p>
      </button>
    </section>
  );
}
