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
                    <ul className='flex flex-wrap justify-center max-w-[1500px] mx-auto gap-4 mt-4'>
                        {filteredProducts.map((producto) => {
                            const isProductOnCart = checkProductInCart(producto);
                            return (
                                <li key={producto.title} className='border-solid border-2 rounded-lg shadow-lg sm:max-w-[250px] sm:min-w-[250px] max-w-[170px] min-w-[170px] py-6 flex flex-col items-center transition-transform transform hover:border-gray-300'>
                                    <img
                                        style={{ width: 200, maxHeight: 200, minHeight: 160 }}
                                        src={producto.imageUrl}
                                        alt={producto.title}
                                        className='py-2 px-2 ' />
                                    <div className='flex flex-col flex-grow items-center'>
                                        <div className='font-semibold text-center text-sm' style={{ minHeight: '4em' }}>
                                            {producto.title}
                                        </div>
                                        <div className='mt-2'>
                                            {
                                                isProductOnCart
                                                    ?
                                                    <button onClick={() => removeItemFromCart({ ...producto, quantity: 1 })} className="flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-[#e76e49] hover:bg-[#b84e40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition">
                                                        <p>Eliminar del carrito</p>
                                                        <MdRemoveShoppingCart size={20} />
                                                    </button>
                                                    :
                                                    <div className='flex gap-2'>
                                                        <button onClick={() => addToCart({ ...producto, quantity: 1 })} className='flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-[#00df9a] hover:bg-[#1ea77b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition'>
                                                            <p>Añadir al carrito</p>
                                                            <MdAddShoppingCart size={20} />
                                                        </button>
                                                    </div>
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
