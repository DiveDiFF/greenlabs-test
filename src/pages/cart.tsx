import MyCart from 'components/Cart';
import NoItem from 'components/common/NoItem';
import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { myCartList } from 'recoil/cart';

export default function Cart() {
  const cartData = useRecoilValue(myCartList);

  return <Suspense fallback="...Now Loading">{!!cartData?.length ? <MyCart cartData={cartData} /> : <NoItem type="cart" />}</Suspense>;
}
