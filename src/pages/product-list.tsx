import NoItem from 'components/common/NoItem';
import ProductCardList from 'components/ProductList';
import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { productList } from 'recoil/products';

export default function ProductList() {
  const data = useRecoilValue(productList);
  console.log({ data });
  return <Suspense fallback="...Now Loading">{!!data?.length ? <ProductCardList productData={data} /> : <NoItem />}</Suspense>;
}
