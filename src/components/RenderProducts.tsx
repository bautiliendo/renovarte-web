import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { Producto } from '../types';

interface RenderProductsProps {
    productos: Producto[]
}

export const RenderProducts: React.FC<RenderProductsProps> = ({ productos }) => {
    return (
        <>
            <ul className='flex flex-wrap gap-5 justify-center px-4 py-5 max-w-[1500px] mx-auto'>
                {productos.map((producto) => (
                    <li key={producto.title} className='border-solid border-2 rounded-lg shadow-lg max-w-[350px] py-10 px-4 flex flex-col items-center transition-transform transform hover:border-gray-300'>
                        <img
                            src={producto.imageUrl}
                            alt={producto.title}
                            className='width-[300px] h-auto py-4 px-4' />
                        <div className='text- font-semibold mt-4'>
                            {producto.title}
                        </div>
                        <div className='mt-4'>
                            <button className='bg-[#00df9a] text-white p-2 rounded-full hover:bg-[#1ea77b] focus:outline-none'>
                                <MdAddShoppingCart size={30} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}
