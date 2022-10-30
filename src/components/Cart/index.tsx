import Divider from 'components/common/Divider';
import { useRouter } from 'next/router';
import { MouseEvent, useCallback, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedCartList } from 'recoil/cart';

import ApplyCoupon from './ApplyCoupon';
import CartItemList from './CartItemList';
import styles from './MyCart.module.css';
import Receipt from './Receipt';

export default function MyCart() {
  const selectedCartItem = useRecoilValue(selectedCartList);
  const selectedCartLength = useMemo(() => selectedCartItem?.length, [selectedCartItem.length]);
  const { push } = useRouter();

  const { button } = styles;

  const handleClickPayButton = useCallback(
    (_event: MouseEvent<HTMLButtonElement>) => {
      console.log('234234');
      push('/payment');
    },
    [push],
  );

  console.log(selectedCartLength);
  return (
    <>
      <CartItemList />
      <ApplyCoupon />
      <Divider />
      <Receipt />
      <button className={button} onClick={handleClickPayButton} disabled={!selectedCartLength}>
        상품 {selectedCartLength}개 결제하기
      </button>
    </>
  );
}
