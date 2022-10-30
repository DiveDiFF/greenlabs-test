import Divider from 'components/common/Divider';
import { useRecoilValue } from 'recoil';
import { selectedCartList } from 'recoil/cart';

import ApplyCoupon from './ApplyCoupon';
import CartItemList from './CartItemList';
import Receipt from './Receipt';

export default function MyCart() {
  const selectedCartItem = useRecoilValue(selectedCartList);
  return (
    <>
      <CartItemList />
      <Divider />
      <ApplyCoupon />
      <Divider />
      <Receipt />
      <button>상품 {selectedCartItem.length}개 결제하기</button>
    </>
  );
}
