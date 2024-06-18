import React from 'react'


export const Comprar: React.FC = () => {
  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className='max-w-[1240px] mx-auto grid '>

        <h1 className="md:text-3xl sm:text-2xl text:xl font-bold py-2">¿Cómo Comprar?</h1>
        <p className="mb-4">
          En nuestro e-commerce, puedes añadir productos a tu carrito y realizar la compra de manera sencilla a través de WhatsApp. Aquí te explicamos los pasos:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">Explora nuestros productos y añade los que te interesen al carrito.</li>
          <li className="mb-2">Una vez que hayas terminado de seleccionar los productos, dirígete a tu carrito.</li>
          <li className="mb-2">
            En el carrito, encontrarás un botón con el logo de WhatsApp. Haz clic en ese botón.
          </li>
          <li className="mb-2">
            Serás redirigido a una conversación en WhatsApp con nuestro equipo. El mensaje
            incluirá automáticamente la descripción de tu carrito y la cantidad de cada producto.
          </li>
          <li className="mb-2">
            Completa la compra enviando el mensaje y coordinando los detalles con nuestro equipo
            a través de WhatsApp.
          </li>
        </ol>
        <p className="text-gray-700">
          <strong className='text-[#00df9a]'> ¡Es fácil y rápido! </strong> Si tienes alguna duda, no dudes en contactarnos.
        </p>
      </div>
    </div>
  )
}
