import { useCart } from '../hooks/useCart';
import { MdRemoveShoppingCart } from "react-icons/md";
import { CarritoVacio } from './CarritoVacio';
import { FaWhatsapp } from 'react-icons/fa';

export const Carrito: React.FC = () => {
  const { cart, clearCart, addToCart, removeFromCart, removeItemFromCart } = useCart();

  return (
    <>
      {
        (cart.length >= 1) ?
          <div className='bg-[#f3f2f2]'>
            <div className='w-full bg-white py-10 px-4 max-w-[1240px] mx-auto'>
              <div className='flex flex-col justify-center text-center'>
                <h1 className='md:text-2xl sm:text-1xl text:xl font-bold py-2'>Productos en el carrito</h1>
                <ul className='flex flex-wrap gap-5 justify-center px-4 py-4 max-w-[1500px] mx-auto'>
                  {cart.map((producto) => (
                    <li key={producto.title} className='border-solid border-2 rounded-lg shadow-lg max-w-[250px] py-10 px-4 flex flex-col items-center transition ease-in-out delay-50 hover:border-gray-300'>
                      <img
                        style={{ width: 150 }}
                        src={producto.imageUrl}
                        alt={producto.title}
                        className='h-auto py-4 px-4' />
                      <div className='flex flex-col flex-grow items-center'>
                        <div className='font-semibold mt-4 text-center' style={{ minHeight: '5em' }}>
                          {producto.title}
                        </div>
                        <div className='flex gap-3 mb-4'>
                          <p>Cantidad: {producto.quantity}</p>
                          <button onClick={() => addToCart(producto)} className='rounded-md font-xl px-2'><strong>+</strong></button>
                          <button onClick={() => removeFromCart(producto)}><strong>-</strong></button>
                        </div>
                        <div className=''>
                          <button className='hover:border-[#e76e49] rounded-md font-medium mx-auto py-2 px-4 text-black border border-gray-500 transition ease-in-out delay-50' onClick={() => removeItemFromCart(producto)}><strong>Eliminar</strong></button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className='flex mt-10 justify-center gap-3'>
                  <button onClick={clearCart} className='flex items-center border hover:border-gray-400 rounded-md py-3 px-4 transition ease-in-out delay-50'>
                    <MdRemoveShoppingCart size={50} />
                    <p><strong>Limpiar carrito</strong></p>
                  </button> 
                  <button onClick={clearCart} className='flex items-center border hover:border-gray-400 rounded-md py-3 px-4 transition ease-in-out delay-50'>
                  <FaWhatsapp size={50} />
                    <p><strong>Comprar</strong></p>
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          :
          <CarritoVacio />
      }
    </>
  );
};
