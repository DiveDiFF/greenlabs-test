import Chip from 'components/common/Chip';
import { ChangeEvent, MouseEvent } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { CartItem } from 'typings/cart';

import styles from './CartItemCard.module.css';

type CartItemCardProps = {
  onCheckBoxChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onDelete: (event: MouseEvent<HTMLButtonElement>) => void;
} & CartItem;

export default function CartItemCard({
  id,
  quantity,
  isSelected,
  productData,
  onCheckBoxChange,
  onInputChange,
  onDelete,
}: CartItemCardProps) {
  const { container, flexContainer, iconButton, icon, titleText, descriptionText, bold, checkbox, numberInput } = styles;

  return (
    <div className={container}>
      <div className={flexContainer}>
        <p className={`${titleText} ${bold}`}>{productData.productName}</p>
        <div>
          <p className={`${titleText} ${bold}`}>{(productData.price * quantity).toLocaleString()}원</p>
          <p className={descriptionText}>개 당 {productData.price.toLocaleString()}원</p>
        </div>
      </div>

      <input className={checkbox} type="checkbox" checked={isSelected} onChange={onCheckBoxChange} />

      <div className={flexContainer}>
        <div className={flexContainer}>
          {productData.quantity <= 5 && <Chip label="매진임박" />}
          <p className={descriptionText}>재고 {productData.quantity}개</p>
        </div>
        <div>
          <input className={numberInput} type="number" value={quantity} min={1} max={productData.quantity} onChange={onInputChange} />
          <span className={descriptionText}>개</span>
        </div>
      </div>

      <button className={iconButton} onClick={onDelete}>
        <AiFillCloseCircle className={icon} />
      </button>
    </div>
  );
}
