import { useMemo } from 'react';
import { ProductItem } from 'typings/product';

import CartItemCard from './CartItemCard';
import styles from './CartItemList.module.css';

type CartItemListProps = {
  cartData: ProductItem[];
};

export default function CartItemList({ cartData }: CartItemListProps) {
  const { companySector, cardContainer } = styles;

  const greenlabsCartItem = useMemo(() => cartData?.filter((item) => item.companyName === '그린랩스(주)'), [cartData]);
  const farmMorningItem = useMemo(() => cartData?.filter((item) => item.companyName === '(주)팜모닝'), [cartData]);
  return (
    <section>
      <article className={companySector}>
        <h5>그린랩스(주)</h5>
        <ul>
          {greenlabsCartItem?.map((item) => (
            <li key={item.id} className={cardContainer}>
              <CartItemCard />
            </li>
          ))}
        </ul>
      </article>
      <article className={companySector}>
        <h5>(주)팜모닝</h5>
        <ul>
          {farmMorningItem?.map((item) => (
            <li key={item.id} className={cardContainer}>
              <CartItemCard />
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
