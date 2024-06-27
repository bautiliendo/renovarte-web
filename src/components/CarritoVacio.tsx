import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CarritoVacio: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full bg-white py-32 px-4 h-[450px]'>
          <div className='max-w-[1240px] mx-auto grid '>
            <div className='flex flex-col justify-center'>
              <h1 className='md:text-3xl sm:text-2xl text:1xl font-bold py-2'>El Carrito está vacío</h1>
              <p className='my-8'>
              Si quieres hacer una compra, selecciona el producto que te interese y haz click en el botón <strong>Añadir al carrito !</strong>
              </p>
              <button  onClick={() => navigate('/productos')} className="w-[200px] bg-[#00df9a] text-gray-900 hover:bg-[#1ea77b] py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mt-5">Productos</button>
            </div>
          </div>
        </div>
      )
}
