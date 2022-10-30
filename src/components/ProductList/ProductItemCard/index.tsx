import Chip from 'components/common/Chip';
import { FormEvent } from 'react';
import { ProductItem } from 'typings/product';

import styles from './ProductItemCard.module.css';

type ProductItemCardProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
} & ProductItem;

export default function ProductItemCard({ id, productName, companyName, price, quantity, onSubmit }: ProductItemCardProps) {
  const { container, titleText, descriptionText, headWrapper, selectForm, selector, submitButton, chipContainer } = styles;

  return (
    <div className={container}>
      <div className={headWrapper}>
        <h6 className={titleText}>{productName}</h6>
        <p className={descriptionText}>{companyName}</p>
      </div>
      <p className={descriptionText}>{price.toLocaleString()}원 / 개</p>
      <form className={selectForm} onSubmit={onSubmit}>
        <select name="quantity" className={selector}>
          {Array.from({ length: quantity }, (v, i) => i + 1).map((value) => (
            <option key={value} value={value}>
              {value}개
            </option>
          ))}
        </select>
        <button type="submit" className={submitButton}>
          추가
        </button>
      </form>
      {quantity <= 5 && (
        <div className={chipContainer}>
          <Chip label="매진임박" />
        </div>
      )}
    </div>
  );
}
