import React, { useState } from 'react'
import { MdAddShoppingCart, MdRemoveShoppingCart } from "react-icons/md";
import { Producto } from '../types';
import { useCart } from '../hooks/useCart';
import { useFiltersContext } from '../hooks/useFiltersContext';
import allProducts from '../data/products.json'
import { BusquedaVacia } from './BusquedaVacia';

export const RenderProducts: React.FC = () => {
    const [productos] = useState(allProducts);
    const { addToCart, cart, removeItemFromCart } = useCart();
    const { filterProducts } = useFiltersContext();

    const checkProductInCart = (product: Producto) => {
        return cart.some(item => item.title === product.title);
    }
    const filteredProducts = filterProducts(productos);

    return (
        <>
            {
                filteredProducts.length >= 1 ? (
                    <ul className='flex flex-wrap gap-5 justify-center px-4 py-5 max-w-[1500px] mx-auto'>
                        {filteredProducts.map((producto) => {
                            const isProductOnCart = checkProductInCart(producto);
                            return (
                                <li key={producto.title} className='border-solid border-2 rounded-lg shadow-lg max-w-[350px] py-10 px-4 flex flex-col items-center transition-transform transform hover:border-gray-300'>
                                    <img
                                        style={{ width: 300, maxHeight: 300, minHeight: 300, }}
                                        src={producto.imageUrl}
                                        alt={producto.title}
                                        className='py-4 px-4' />
                                    <div className='flex flex-col flex-grow items-center'>
                                        <div className='font-semibold mt-4 text-center' style={{ minHeight: '3em' }}>
                                            {producto.title}
                                        </div>
                                        <div className='mt-4'>
                                            {
                                                isProductOnCart
                                                    ? <button onClick={() => removeItemFromCart({ ...producto, quantity: 1 })} className='bg-[#e76e49] text-white p-2 rounded-full hover:bg-[#b84e40] focus:outline-none'>
                                                        <MdRemoveShoppingCart size={30} />
                                                    </button>
                                                    : <button onClick={() => addToCart({ ...producto, quantity: 1 })} className='bg-[#00df9a] text-white p-2 rounded-full hover:bg-[#1ea77b] focus:outline-none'>
                                                        <MdAddShoppingCart size={30} />
                                                    </button>
                                            }
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )
                    :
                    (
                        <BusquedaVacia />
                    )
            }
        </>
    )
}
