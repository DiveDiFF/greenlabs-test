import Divider from 'components/common/Divider';

import styles from './Receipt.module.css';

export default function Receipt() {
  const { container, categoryContainer, labelText, priceText } = styles;
  return (
    <section className={container}>
      <div className={categoryContainer}>
        <p className={labelText}>결제금액</p>
        <p className={priceText}>20,000원</p>
      </div>
      <div className={categoryContainer}>
        <p className={labelText}>배송비</p>
        <p className={priceText}>3,000원</p>
      </div>
      <div className={categoryContainer}>
        <p className={labelText}>할인금액</p>
        <p className={priceText}>- 2,000원</p>
      </div>
      <Divider color="#e9e9e9" />
      <div className={categoryContainer}>
        <p className={labelText}>총 결제금액</p>
        <p className={priceText}>24,000원</p>
      </div>
    </section>
  );
}
