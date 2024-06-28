import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { MdRemoveShoppingCart } from "react-icons/md";
import { CarritoVacio } from './CarritoVacio';
import { FaWhatsapp } from 'react-icons/fa';
import { Modal } from './Modal';

export const Carrito: React.FC = () => {
  const { cart, clearCart, addToCart, removeFromCart, removeItemFromCart } = useCart();

  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      {cart.length >= 1 ? (
        <div className="bg-gray-100 py-32 -z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="md:text-3xl sm:text2-xl text-xl py-4 font-bold text-gray-900 text-center">Mi carrito</h1>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <ul className="divide-y divide-gray-200 ">
                {cart.map((producto) => (
                  <li key={producto.title} className="p-6 border-solid border-2 rounded-lg shadow-lg hover:border-gray-300 transition duration-150 ease-in-out">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img className="h-32 w-32 object-cover rounded-md" src={producto.imageUrl} alt={producto.title} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-md font-medium text-gray-900">{producto.title}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center border rounded-md">
                            <button onClick={() => removeFromCart(producto)} className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition">-</button>
                            <span className="px-3 py-1 text-gray-800 font-medium">{producto.quantity}</span>
                            <button onClick={() => addToCart(producto)} className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition">+</button>
                          </div>
                        </div>
                          <button
                            onClick={() => removeItemFromCart(producto)}
                            className="text-[#e76e49] hover:text-[#b84e40] transition py-2 hover:border-gray-300 px-5 shadow-lg rounded-lg border-2"
                          >
                            Eliminar
                          </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={clearCart}
                className="flex items-center gap-2 px-3 py-1.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#e76e49] hover:bg-[#b84e40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
              >
                <MdRemoveShoppingCart size={30} />
                Limpiar carrito
              </button>
              <button
                onClick={() => setOpenModal(true)}
                className="flex items-center gap-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
              >
                <FaWhatsapp size={30} />
                Coordinar compra
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
