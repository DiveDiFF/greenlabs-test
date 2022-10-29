import MyCart from 'components/Cart';
import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { myCartList } from 'recoil/cart';

export default function Cart() {
  const cartData = useRecoilValue(myCartList);

  return <Suspense fallback="...Now Loading">{cartData ? <MyCart cartData={cartData} /> : <></>}</Suspense>;
}
