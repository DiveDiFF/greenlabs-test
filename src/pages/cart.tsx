import MyCart from 'components/Cart';
import { Suspense } from 'react';

export default function Cart() {
  return (
    <Suspense fallback="...Now Loading">
      <MyCart />
    </Suspense>
  );
}
