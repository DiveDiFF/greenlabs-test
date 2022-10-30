import Divider from 'components/common/Divider';
import SingleFlexItem from 'components/common/SingleFlexItem';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { calculateShippingFee, calculateTotalDiscount, calculateTotalPrice } from 'recoil/cart';

import styles from './Receipt.module.css';

export default function Receipt() {
  const { container } = styles;
  const totalPrice = useRecoilValue(calculateTotalPrice);
  const totalDiscount = useRecoilValue(calculateTotalDiscount);
  const shippingFee = useRecoilValue(calculateShippingFee);

  const finalPayment = useMemo(() => totalPrice + shippingFee - totalDiscount, [shippingFee, totalDiscount, totalPrice]);

  return (
    <section className={container}>
      <SingleFlexItem label="결제금액" value={`${totalPrice.toLocaleString()}원`} />
      <SingleFlexItem label="배송비" value={`${shippingFee?.toLocaleString()}원`} />
      <SingleFlexItem label="할인금액" value={`- ${totalDiscount.toLocaleString()}원`} />

      <Divider color="gray200" />

      <SingleFlexItem label="총 결제금액" value={`${finalPayment.toLocaleString()}원`} />
    </section>
  );
}
