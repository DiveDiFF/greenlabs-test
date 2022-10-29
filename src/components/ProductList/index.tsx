import ProductItemCard from 'components/ProductList/ProductItemCard';
import { ProductItem } from 'typings/product';

import styles from './ProductList.module.css';

type ProductCardListProps = {
  productData: ProductItem[];
};
export default function ProductCardList({ productData }: ProductCardListProps) {
  const { listContainer, itemContainer } = styles;
  return (
    <ul className={listContainer}>
      {productData.map((product) => (
        <li key={product.id} className={itemContainer}>
          <ProductItemCard {...product} />
        </li>
      ))}
    </ul>
  );
}
