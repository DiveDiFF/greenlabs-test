import Divider from 'components/common/Divider';

import CartItemList from './CartItemList';

export default function MyCart() {
  return (
    <div>
      <CartItemList />
      <Divider />
      <section>쿠폰 적용</section>
      <Divider />
      <section>계산</section>
    </div>
  );
}
