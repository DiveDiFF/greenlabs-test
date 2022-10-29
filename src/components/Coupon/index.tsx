import { CouponItem } from 'typings/coupon';

import CouponItemCard from './CouponItemCard';
import styles from './MyCouponList.module.css';

type MyCouponListProps = {
  couponData: CouponItem[];
};

export default function MyCouponList({ couponData }: MyCouponListProps) {
  const { text, listItemContainer } = styles;
  return (
    <ul>
      <p className={text}>사용 가능한 쿠폰 : {couponData.length}개</p>
      {couponData.map((coupon) => (
        <li key={coupon.id} className={listItemContainer}>
          <CouponItemCard {...coupon} />
        </li>
      ))}
    </ul>
  );
}
