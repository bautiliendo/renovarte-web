import { useCart } from '../hooks/useCart'
import { MdRemoveShoppingCart } from "react-icons/md";
import { CarritoVacio } from './CarritoVacio';

export const Carrito: React.FC = () => {
  const { cart, clearCart, addToCart, removeFromCart } = useCart()
  return (
    <>
      {
        (cart.length >= 1) ?

          <div className='bg-[#e7e5e5]'>
            <div className='w-full bg-white py-16 px-4 max-w-[1240px] mx-auto'>
              <div className='flex flex-col justify-center text-center'>
                <h1 className='md:text-2xl sm:text-1xl text:xl font-bold py-2'>Productos en el carrito</h1>
                <ul className='flex flex-wrap gap-5 justify-center px-4 py-5 max-w-[1500px] mx-auto'>
                  {cart.map((producto) => (
                    <li key={producto.title} className='border-solid border-2 rounded-lg shadow-lg max-w-[250px] py-10 px-4 flex flex-col items-center transition-transform transform hover:border-gray-300'>
                      <img
                        style={{ width: 150 }}
                        src={producto.imageUrl}
                        alt={producto.title}
                        className='h-auto py-4 px-4' />
                      <div className='text- font-semibold mt-4'>
                        {producto.title}
                      </div>
                      <div className='flex gap-3'>
                      <p>Cantidad: {producto.quantity}</p>
                      <button onClick={() => addToCart(producto)} className='rounded-md font-xl px-2'><strong>+</strong></button>
                      <button onClick={() => removeFromCart(producto)}><strong>-</strong></button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className='flex flex-col mt-10'>
                  <button onClick={clearCart} className='flex justify-center' >
                    <MdRemoveShoppingCart size={50} />
                  </button>
                  <p><strong>Limpiar carrito</strong></p>
                </div>
              </div>
            </div>

          </div>
          :
          <CarritoVacio />
      }

    </>
  )
}
