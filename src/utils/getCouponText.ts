import { CouponItem } from 'typings/coupon';

import priceToKoreanFormat from './priceToKoreanFormat';

type getCouponTextProps = Omit<CouponItem, 'id' | 'duplication'>;

export const getCouponText = ({ minPrice, discountPercent, discountPrice, freeShipping, company }: getCouponTextProps) => {
  let text = ['', ''];
  text[0] += company === 'all' ? '' : company + ' 제품';
  text[0] += ` ${priceToKoreanFormat(minPrice)} 이상 구매 시`;

  if (freeShipping) {
    text[1] += ' 배송료 무료';
  } else if (discountPercent) {
    text[1] += ` 결제 금액 ${discountPercent}% 할인`;
  } else {
    text[1] += ` 결제 금액 ${discountPrice?.toLocaleString()}원 할인`;
  }
  return text;
};
