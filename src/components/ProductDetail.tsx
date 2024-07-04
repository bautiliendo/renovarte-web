import { useParams } from 'react-router-dom';
import allProducts from '../data/products.json'
import { useCart } from '../hooks/useCart';
import { MdAddShoppingCart, MdRemoveShoppingCart } from "react-icons/md";
import { HiOutlineTruck } from "react-icons/hi2";

export const ProductDetail = () => {
  const { productoTitle } = useParams<{ productoTitle: string }>();
  const producto = allProducts.find(p => p.title === decodeURIComponent(productoTitle || ''))
  const { addToCart, removeItemFromCart, cart } = useCart();

  if (!producto) {
    return <div className='text-white'>Producto No encontrado</div>
  }

  const isProductInCart = cart.some(item => item.title === producto.title);

  return (
    <div className='w-full bg-white py-32 px-4'>
      <div className="gap-1 bg-white w-full mx-auto md:flex max-w-auto min-w-auto xl:max-w-[1240px] xl:min-w-[1240px]">
        <div className='flex justify-center items-center border-solid border-2 rounded-lg md:shadow-lg min-w-[40%]'>
          <img src={producto.imageUrl} alt={producto.title} className="h-60 w-60  sm:h-80 sm:w-80 rounded-md p-3" />
        </div>
        <div className='flex flex-col border-solid border-2 rounded-lg shadow-lg p-2'>
          <h1 className="text-2xl font-bold mb-4 p-2">{producto.title}</h1>
          <p className='text-sm mb-4 p-3'>{producto.description}</p>
          <div className='p-3 border border-gray-300 flex rounded-sm gap-2 mb-2'>
            <HiOutlineTruck size={25} />
            <p className='font-bold'> Envío <strong className='text-[#00df9a]'>GRATIS</strong> a Córdoba Capital</p>
          </div>
          <div className='border border-gray-300 flex rounded-sm p-3'>
            {isProductInCart ? (
              <button onClick={() => removeItemFromCart({ ...producto, quantity: 1 })} className="flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-[#e76e49] hover:bg-[#b84e40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition">
                <p className='font-bold text-lg'>Eliminar del carrito</p>
                <MdRemoveShoppingCart size={25} />
              </button>
            ) : (
              <div className='flex gap-2'>
                <button onClick={() => addToCart({ ...producto, quantity: 1 })} className='flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-[#00df9a] hover:bg-[#1ea77b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition'>
                  <p className='font-bold text-lg'>Añadir al carrito</p>
                  <MdAddShoppingCart size={25} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  )
}
