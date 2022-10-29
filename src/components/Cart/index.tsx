import Divider from 'components/common/Divider';
import { ProductItem } from 'typings/product';

import CartItemList from './CartItemList';

type MyCartProps = {
  cartData: ProductItem[];
};

export default function MyCart({ cartData }: MyCartProps) {
  return (
    <div>
      <CartItemList cartData={cartData} />
      <Divider />
      <section>쿠폰 적용</section>
      <Divider />
      <section>계산</section>
    </div>
  );
}
