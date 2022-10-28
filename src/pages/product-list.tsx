import { useRecoilValue } from 'recoil';
import { productList } from 'recoil/products';

export default function ProductList() {
  const data = useRecoilValue(productList);
  console.log({ data });
  return (
    <>
      <p>프로덕트 리스트</p>
    </>
  );
}
