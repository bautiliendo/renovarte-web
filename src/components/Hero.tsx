import React from 'react'
import { ReactTyped } from "react-typed";
import { Productos } from './Productos';
import { SearchBar } from './SearchBar';


export const Hero: React.FC = () => {

  return (
    <>
      <div className='text-white hidden 1000px:block'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold p-2'>
            RENOVARTE - Córdoba AR
          </p>
          <p className='text-[#00df9a] font-bold p-2'>
            Compra de forma fácil, rápida y segura
          </p>
          <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>
            Electrodomésticos y celulares
          </h1>
          <div>
            <p className='md:text-3xl sm:text-2xl text-xl font-bold'>
              Beneficios exclusivos y convenios con mutuales
            </p>
            <ReactTyped
              className='md:text-3xl sm:text-2xl text-xl font-bold'
              strings={['SUOEM', '3 ABRIL', 'UPCN']}
              typeSpeed={70}
              backSpeed={50}
              loop
            />
          </div>
          <div>
            <button className="w-[200px] bg-[#00df9a] text-gray-900 hover:bg-[#1ea77b] py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mt-5">Productos</button>
          </div>
        </div>
        <div className='pt-10 bg-white'>
          <SearchBar />
        </div>
      </div>
      <Productos />
    </>
  )
}

