import Chip from 'components/common/Chip';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import styles from './CartItemCard.module.css';

export default function CartItemCard() {
  const { container, flexContainer, iconButton, icon, titleText, descriptionText, bold, checkbox, numberInput } = styles;
  return (
    <div className={container}>
      <div className={flexContainer}>
        <p className={`${titleText} ${bold}`}>가루자비</p>
        <div>
          <p className={`${titleText} ${bold}`}>20,000원</p>
          <p className={descriptionText}>개 당 5,000원</p>
        </div>
      </div>

      <input className={checkbox} type="checkbox" checked={true} />

      <div className={flexContainer}>
        <div className={flexContainer}>
          <Chip label="재고임박!" />
          <p className={descriptionText}>재고 20개</p>
        </div>
        <div>
          <input className={numberInput} type="number" value={5} /> <span className={descriptionText}>개</span>
        </div>
      </div>

      <button className={iconButton}>
        <AiOutlineCloseCircle className={icon} />
      </button>
    </div>
  );
}
