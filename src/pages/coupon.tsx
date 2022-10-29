import MyCouponList from 'components/Coupon';
import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { myCouponList } from 'recoil/coupon';

export default function Coupon() {
  const couponData = useRecoilValue(myCouponList);
  return <Suspense fallback="...Now Loading">{couponData ? <MyCouponList couponData={couponData} /> : <></>}</Suspense>;
}
