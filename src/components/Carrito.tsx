import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { MdRemoveShoppingCart } from "react-icons/md";
import { CarritoVacio } from './CarritoVacio';
import { FaWhatsapp } from 'react-icons/fa';
import { Modal } from './Modal';
import { Link, useNavigate } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';

export const Carrito: React.FC = () => {
  const { cart, clearCart, addToCart, removeFromCart, removeItemFromCart } = useCart();
const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleGoBack = () => {
    navigate(-1)
  }


  return (
    <>
      {cart.length >= 1 ? (
        <div className="bg-white py-32 -z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button className='mb-4 flex gap-1 justify-center sm:hidden border-solid rounded-md p-1' onClick={handleGoBack}><p className='font-bold'>Volver</p><RiArrowGoBackFill size={20} className='pt-1' /></button>
            <h1 className="md:text-3xl text-2xl font-bold pb-6">Mi carrito</h1>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <ul>
                {cart.map((producto) => (
                  <li key={producto.title} className="p-6 border border-gray-300 rounded-lg shadow-lg mb-1">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img className="h-32 w-32 object-cover rounded-md" src={producto.imageUrl} alt={producto.title} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link to={`/productos/${encodeURIComponent(producto.title)}`}>
                          <p className="text-lg font-bold mb-4 p-2">{producto.title}</p>
                        </Link>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center border rounded-md">
                            <button onClick={() => removeFromCart(producto)} className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition">-</button>
                            <span className="px-3 py-1 my-1 text-gray-800 font-medium">{producto.quantity}</span>
                            <button onClick={() => addToCart(producto)} className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition">+</button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItemFromCart(producto)}
                          className="text-[#e76e49] hover:text-[#b84e40] transition py-2 my-1 px-5 rounded-lg border-2"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex gap-3">
              <button
                onClick={clearCart}
                className="w-full sm:w-auto flex items-center gap-2 px-3 py-1.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#e76e49] hover:bg-[#b84e40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
              >
                <MdRemoveShoppingCart size={30} />
                Limpiar carrito
              </button>
              <button
                onClick={() => setOpenModal(true)}
                className="w-full sm:w-auto flex items-center gap-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
              >
                <FaWhatsapp size={30} />
                Consultar
              </button>
            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
        </div>
      ) : (
        <CarritoVacio />
      )}
    </>
  );
};
