import { ChangeEvent, MouseEvent, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { myCartList } from 'recoil/cart';

import CartItemCard from './CartItemCard';
import styles from './CartItemList.module.css';

export default function CartItemList() {
  const { companySector, cardContainer } = styles;
  const [cartData, setCartData] = useRecoilState(myCartList);

  const greenlabsCartItem = useMemo(() => cartData?.filter((item) => item?.productData?.companyName === '그린랩스(주)'), [cartData]);
  const farmMorningItem = useMemo(() => cartData?.filter((item) => item?.productData?.companyName === '(주)팜모닝'), [cartData]);

  const handleCheckboxChange = (id: string) => (_event: ChangeEvent<HTMLInputElement>) => {
    setCartData((currentCartData) => {
      return currentCartData.map((item) => {
        if (item?.id === id) {
          return {
            ...item,
            isSelected: !item?.isSelected,
          };
        } else {
          return item;
        }
      });
    });
  };

  const handleQuantityChange = (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setCartData((currentCartData) => {
      return currentCartData.map((item) => {
        if (item?.id === id) {
          return {
            ...item,
            quantity: Number(event.target.value),
          };
        } else {
          return item;
        }
      });
    });
  };

  const handleDeleteItem = (id: string) => (_event: MouseEvent<HTMLButtonElement>) => {
    setCartData((currentCartData) => {
      return currentCartData.filter((item) => item?.id !== id);
    });
  };
  return (
    <section>
      {!!greenlabsCartItem?.length && (
        <article className={companySector}>
          <h5>그린랩스(주)</h5>
          <ul>
            {greenlabsCartItem?.map((item) => (
              <li key={item?.id} className={cardContainer}>
                <CartItemCard
                  {...item}
                  onCheckBoxChange={handleCheckboxChange(item?.id)}
                  onInputChange={handleQuantityChange(item?.id)}
                  onDelete={handleDeleteItem(item?.id)}
                />
              </li>
            ))}
          </ul>
        </article>
      )}
      {!!farmMorningItem?.length && (
        <article className={companySector}>
          <h5>(주)팜모닝</h5>
          <ul>
            {farmMorningItem?.map((item) => (
              <li key={item?.id} className={cardContainer}>
                <CartItemCard
                  {...item}
                  onCheckBoxChange={handleCheckboxChange(item?.id)}
                  onInputChange={handleQuantityChange(item?.id)}
                  onDelete={handleDeleteItem(item?.id)}
                />
              </li>
            ))}
          </ul>
        </article>
      )}
    </section>
  );
}
