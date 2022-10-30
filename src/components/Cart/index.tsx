import Divider from 'components/common/Divider';
import { CartItem } from 'typings/cart';

import ApplyCoupon from './ApplyCoupon';
import CartItemList from './CartItemList';
import Receipt from './Receipt';

type MyCartProps = {
  cartData: CartItem[];
};

export default function MyCart({ cartData }: MyCartProps) {
  return (
    <>
      <CartItemList cartData={cartData} />
      <Divider />
      <ApplyCoupon />
      <Divider />
      <Receipt />
    </>
  );
}
