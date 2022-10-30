import { ProductItem } from './product';

export type CartItem = {
  id: string;
  quantity: number;
  isSelected?: boolean;
  productData: ProductItem;
}