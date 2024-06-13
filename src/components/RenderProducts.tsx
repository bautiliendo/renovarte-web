import React from 'react'
import { MdAddShoppingCart, MdRemoveShoppingCart } from "react-icons/md";
import { Producto } from '../types';
import { useCart } from '../hooks/useCart';

interface RenderProductsProps {
    productos: Producto[]
}

export const RenderProducts: React.FC<RenderProductsProps> = ({ productos }) => {
    const { addToCart, cart, removeFromCart } = useCart();

    const checkProductInCart = (product: Producto) => {
        return cart.some(item => item.title === product.title);
    }

    return (
        <>
            <ul className='flex flex-wrap gap-5 justify-center px-4 py-5 max-w-[1500px] mx-auto'>
                {productos.map((producto) => {
                    const isProductOnCart = checkProductInCart(producto);
                    return (
                        <li key={producto.title} className='border-solid border-2 rounded-lg shadow-lg max-w-[350px] py-10 px-4 flex flex-col items-center transition-transform transform hover:border-gray-300'>
                            <img
                                src={producto.imageUrl}
                                alt={producto.title}
                                className='width-[300px] h-auto py-4 px-4' />
                            <div className='text- font-semibold mt-4'>
                                {producto.title}
                            </div>
                            <div className='mt-4'>
                                {
                                    isProductOnCart
                                        ? <button onClick={() => removeFromCart({ ...producto, quantity: 1 })} className='bg-[#e76e49] text-white p-2 rounded-full hover:bg-[#b84e40] focus:outline-none'>
                                            <MdRemoveShoppingCart size={30} />
                                        </button>
                                        : <button onClick={() => addToCart({ ...producto, quantity: 1 })} className='bg-[#00df9a] text-white p-2 rounded-full hover:bg-[#1ea77b] focus:outline-none'>
                                            <MdAddShoppingCart size={30} />
                                        </button>
                                }
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}
