import ProductItemCard from 'components/ProductList/ProductItemCard';
import { FormEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { myCartList } from 'recoil/cart';
import { ProductItem } from 'typings/product';

import styles from './ProductList.module.css';

type ProductCardListProps = {
  productData: ProductItem[];
};
export default function ProductCardList({ productData }: ProductCardListProps) {
  const { listContainer, itemContainer } = styles;
  const setCartItems = useSetRecoilState(myCartList);

  const handleClickSubmitButton = (product: ProductItem) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const element = event.currentTarget.elements[0] as HTMLSelectElement;
    setCartItems((currentCartItems) => {
      const newCartItem = {
        id: `cart_${product?.id}`,
        isSelected: true,
        quantity: Number(element.value),
        productData: product,
      };
      return [...currentCartItems, newCartItem];
    });
  };

  return (
    <ul className={listContainer}>
      {productData.map((product) => (
        <li key={product.id} className={itemContainer}>
          <ProductItemCard {...product} onSubmit={handleClickSubmitButton(product)} />
        </li>
      ))}
    </ul>
  );
}
