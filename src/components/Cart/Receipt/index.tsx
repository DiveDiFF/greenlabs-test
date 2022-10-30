import Divider from 'components/common/Divider';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { calculateShippingFee, calculateTotalDiscount, calculateTotalPrice } from 'recoil/cart';

import styles from './Receipt.module.css';

export default function Receipt() {
  const { container, categoryContainer, labelText, priceText } = styles;
  const totalPrice = useRecoilValue(calculateTotalPrice);
  const totalDiscount = useRecoilValue(calculateTotalDiscount);
  const shippingFee = useRecoilValue(calculateShippingFee);

  const finalPayment = useMemo(() => totalPrice + shippingFee - totalDiscount, [shippingFee, totalDiscount, totalPrice]);

  console.log({ totalPrice });

  return (
    <section className={container}>
      <div className={categoryContainer}>
        <p className={labelText}>결제금액</p>
        <p className={priceText}>{totalPrice.toLocaleString()}원</p>
      </div>
      <div className={categoryContainer}>
        <p className={labelText}>배송비</p>
        <p className={priceText}>{shippingFee?.toLocaleString()}원</p>
      </div>
      <div className={categoryContainer}>
        <p className={labelText}>할인금액</p>
        <p className={priceText}>- {totalDiscount.toLocaleString()}원</p>
      </div>
      <Divider color="gray200" />
      <div className={categoryContainer}>
        <p className={labelText}>총 결제금액</p>
        <p className={priceText}>{finalPayment.toLocaleString()}원</p>
      </div>
    </section>
  );
}
