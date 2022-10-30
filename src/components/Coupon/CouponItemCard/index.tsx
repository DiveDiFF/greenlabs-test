import Chip from 'components/common/Chip';
import { MouseEvent, useMemo } from 'react';
import { CouponItem } from 'typings/coupon';
import { getCouponText } from 'utils/getCouponText';

import styles from './CouponItemCard.module.css';

type CouponItemCardProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
} & CouponItem;

export default function CouponItemCard({ id, duplication, onClick, disabled = false, ...rest }: CouponItemCardProps) {
  const couponText = useMemo(() => getCouponText({ ...rest }), [rest]);
  const { couponButton, title, description, selected } = styles;

  return (
    <button className={`${couponButton} ${rest.isApplied && selected}`} onClick={onClick} disabled={disabled}>
      <p className={title}>쿠폰</p>
      <p className={description}>
        <strong>{couponText[0]}</strong> {couponText[1]}
      </p>
      {duplication && <Chip label="중복가능" variant="success" />}
    </button>
  );
}
