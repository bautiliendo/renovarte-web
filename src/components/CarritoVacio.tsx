import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CarritoVacio: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full bg-white py-16 px-4 h-[450px]'>
          <div className='max-w-[1240px] mx-auto grid '>
            <div className='flex flex-col justify-center'>
              <h1 className='md:text-3xl sm:text-2xl text:1xl font-bold py-2'>El Carrito está vacío</h1>
              <p className='my-8'>
              Si quieres hacer una compra, selecciona el producto que te interese y haz click en el botón <strong>Añadir al carrito !</strong>
              </p>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium  py-3 text-black' onClick={() => navigate('/productos')}>Ver productos</button> 
            </div>
          </div>
        </div>
      )
}


// Tu Carrito está vacío
// Si quieres hacer una compra online, selecciona el producto que te interesa y haz clic en el botón Añadir al carrito

// CONTINUAR COMPRANDO