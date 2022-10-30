export default function priceToKoreanFormat(price: number) {
  const m = Math.floor(price / 10000);
  const t = Math.floor((price - m * 10000) / 1000);
  return m ? `${m}만` : t ? `${t}천` : '' + '원';
}
