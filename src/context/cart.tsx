import { ReactNode, createContext, useState } from "react";
import { CartProduct } from "../types";

interface CartContextType {
    cart: CartProduct[]
    addToCart: (product: CartProduct) => void;
    clearCart: () => void;
    removeFromCart: (product: CartProduct) => void;
}

//1. Crear contexto
export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
  }
  
//2. Crear provider
export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<CartProduct[]>([])

    const addToCart = (product: CartProduct) => {
        //chequear si ya está en el cart
        const productInCartIndex = cart.findIndex(item => item.title === product.title)
        if (productInCartIndex >= 0) {
            //usando structuredClone
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }
        //si no está: en el carrito:
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]));
    };

    const clearCart = () => {
        setCart([]);
    };

    const removeFromCart = (product: CartProduct) => {
        setCart(prevState => prevState.filter(item => item.title !== product.title))
    }


    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

