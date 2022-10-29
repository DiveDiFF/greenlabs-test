import { useMemo } from 'react';
import { CouponItem } from 'typings/coupon';
import { getCouponText } from 'utils/getCouponText';

import styles from './CouponItemCard.module.css';

type CouponItemCardProps = CouponItem;

export default function CouponItemCard({ id, duplication, ...rest }: CouponItemCardProps) {
  const couponText = useMemo(() => getCouponText({ ...rest }), []);
  const { container, title, description } = styles;
  return (
    <div className={container}>
      <p className={title}>쿠폰</p>
      <p className={description}>
        <strong>{couponText[0]}</strong> {couponText[1]}
      </p>
      {duplication && <p>중복 적용이 가능합니다.</p>}
    </div>
  );
}
