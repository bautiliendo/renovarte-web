import React, { useState } from 'react'
import products from '../data/products-celulares.json'

export interface Celulares {
  price: string;
  title: string;
  imageUrl: string;
  description?: string;
}


export const Productos: React.FC = () => {

  const [productos] = useState<Celulares[]>(products);

  return (
    <div className='w-full bg-white py-[100px] text-center'>
      <div className='flex justify-center'>
        <p className=' font-bold text-xl pb-[100px] mx-5'>Celulares</p>
        <p className=' font-bold text-xl pb-[100px] mx-5'>Televisores</p>
        <p className=' font-bold text-xl pb-[100px] mx-5'>Lavarropas</p>
        <p className=' font-bold text-xl pb-[100px] mx-5'>Heladeras</p>
        <p className=' font-bold text-xl pb-[100px] mx-5'>Climatización</p>
        <p className=' font-bold text-xl pb-[100px] mx-5'>Pequeños Electrodomésticos</p>
        {/* // todo: MOVILE FIRST */}
        {/* // todo: barra busqueda */}

      </div>
      <div className='flex flex-wrap gap-10 justify-center px-4 py-5'>
        {productos.map((producto) => (
          <div key={producto.title} className='border-solid border-2 border-gray-600 rounded shadow-xl max-w-[350px] py-10 px-4 justify-center'>
            <img src={producto.imageUrl} alt={producto.title} style={{ width: 300 }} className='py-4 px-4' />
            <a><strong>{producto.title}</strong></a>
          </div>
        ))}
      </div>
    </div>
  )
}

