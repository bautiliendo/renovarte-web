export interface Producto {
  price?: string;
  title: string;
  imageUrl: string;
  description?: string;
  category: string;
}

export interface CartProduct extends Producto{
  quantity: number;
}