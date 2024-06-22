import React from 'react'

export const BusquedaVacia: React.FC = () => {
    return (
        <div className='w-full bg-white py-16 px-4 h-[450px]'>
            <div className='max-w-[1240px] mx-auto grid '>
                <div className='flex flex-col justify-center'>
                    <h1 className='md:text-3xl sm:text-2xl text:1xl font-bold py-2'>No se encontraron resultados para su busqueda! </h1>
                    <p className='my-8'>
                        Si quieres hacer una compra, selecciona el producto que te interese y haz click en el botón <strong>Añadir al carrito !</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}