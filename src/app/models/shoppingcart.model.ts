import { Product } from './product.model';

export interface ShoppingCarts {
  totalPrice: number;
  cart: Product[];
  dateCreated: Date;
}
