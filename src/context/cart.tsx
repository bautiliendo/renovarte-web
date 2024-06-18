import { ReactNode, createContext, useReducer } from "react";
import { CartProduct } from "../types";
import { cartInitialState, cartReducer } from "../reducers/cart";

interface CartContextType {
    cart: CartProduct[]
    addToCart: (product: CartProduct) => void;
    clearCart: () => void;
    removeFromCart: (product: CartProduct) => void;
    removeItemFromCart: (product: CartProduct) => void;
}
interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState) // --> los importo de reducers/cart.tsx
    //dispatch se encarga de enviar las acciones al reducer
    const addToCart = (product: CartProduct) => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = (product: CartProduct) => dispatch({   
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const removeItemFromCart = (product: CartProduct) => dispatch({
        type: 'REMOVE_ITEM_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    return { state, addToCart, removeFromCart, clearCart, removeItemFromCart }
}


export function CartProvider({ children }: CartProviderProps) {
    const { state, addToCart, removeFromCart, removeItemFromCart, clearCart } = useCartReducer();
    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            removeItemFromCart,
            clearCart,
        }}
        >
            {children}
        </CartContext.Provider>
    )
}


