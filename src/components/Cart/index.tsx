import Divider from 'components/common/Divider';
import { useRecoilValue } from 'recoil';
import { myCouponList } from 'recoil/coupon';
import { CartItem } from 'typings/cart';

import ApplyCoupon from './ApplyCoupon';
import CartItemList from './CartItemList';
import Receipt from './Receipt';

type MyCartProps = {
  cartData: CartItem[];
};

export default function MyCart({ cartData }: MyCartProps) {
  const couponData = useRecoilValue(myCouponList);
  return (
    <div>
      <CartItemList cartData={cartData} />
      <Divider />
      <ApplyCoupon couponNumber={couponData.length} />
      <Divider />
      <Receipt />
    </div>
  );
}
