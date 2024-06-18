export interface Producto {
  price?: string;
  title: string;
  imageUrl: string;
  description?: string;
  category: string;
}

export interface CartProduct extends Producto {
  quantity: number;
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: CartProduct }
  | { type: "REMOVE_FROM_CART"; payload: CartProduct }
  | { type: "REMOVE_ITEM_FROM_CART"; payload: CartProduct }
  | { type: "CLEAR_CART"; payload? };

