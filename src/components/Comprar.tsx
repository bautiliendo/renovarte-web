import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Comprar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white py-32 px-4 ">
      <div className='max-w-[1240px] mx-auto grid '>

        <h1 className="md:text-3xl sm:text-2xl text:xl font-bold py-2">¿Cómo Comprar / Consultar?</h1>
        <p className="mb-4">
          En nuestro e-commerce, puedes añadir productos a tu carrito y coordinar una compra o simplemente consultar detalles y precio de un producto a través de WhatsApp.
        </p>
        <ol className="list-decimal list-inside">
          <li className="mb-2">Explora nuestros productos y añade los que te interesen al carrito.</li>
          <li className="mb-2">Dirígete a tu carrito.</li>
          <li className="mb-2">
            En el carrito, encontrarás un botón con el logo de WhatsApp y el texto "Consultar".
          </li>
          <li className="">
            Completa el formulario, y serás redirigido automáticamente a una conversación en WhatsApp con nuestro equipo. El mensaje
            incluirá tus datos ingresados y la descripción de los productos que hayas seleccionado.
          </li>
        </ol>
        <button onClick={() => navigate('/productos')} className="w-[200px] bg-[#00df9a] text-gray-900 hover:bg-[#1ea77b] py-2 px-6 my-4 rounded-full text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Ver Productos</button>
        <p className="text-gray-700">
          <strong className='text-[#00df9a]'> ¡Es fácil y rápido! </strong> Si tienes alguna duda, no dudes en contactarnos.
        </p>
      </div>
    </div>
  )
}
