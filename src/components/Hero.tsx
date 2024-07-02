import React from 'react'
import { ReactTyped } from "react-typed";
import { Productos } from './Productos';
import Celular from '../assets/calulara05.png'
import Tv from '../assets/tvNoblex.png'
import Cafetera from '../assets/cafetera.png'
import { useCart } from '../hooks/useCart';
import { Producto } from '../types';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const { addToCart, cart, removeItemFromCart } = useCart();
  const navigate = useNavigate();
  const checkProductInCart = (product: Producto) => {
    return cart.some(item => item.title === product.title);
  }

  return (

    <>
      <section className="bg-gray-900 sm:py-16 lg:py-24 min-h-[90vh] flex flex-col justify-center">
  <div className="px-4 mx-auto sm:px-6 lg:px-10 max-w-6xl text-white h-full flex flex-col justify-center">
    <div className="flex flex-col justify-between pb-4 mt-20 xs:mt-10 sm:mt-16 md:mt-0">
      <div className="flex-1 text-left">
        <h2 className="text-xl xs:text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl text-white pt-5 mb-4">RENOVARTE - Córdoba AR</h2>
        <p className="max-w-xl mb-4 text-sm sm:text-base leading-relaxed lg:mx-0 text-white hidden xs:block">La tienda donde encontrás todos los electrodomésticos, celulares y productos informáticos para renovar tu casa</p>
        <button onClick={() => navigate('/empresa')} className="mb-4 bg-[#00df9a] text-gray-900 hover:bg-[#1ea77b] text-sm py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg sm:hidden">Conocer más</button>
        <div>
          <p className='text-lg sm:text-2xl md:text-3xl font-bold mb-2'>
            Beneficios exclusivos y convenios con mutuales
          </p>
          <ReactTyped
            className='text-lg sm:text-2xl md:text-3xl font-bold text-[#00df9a]'
            strings={['SUOEM', '3 ABRIL', 'UPCN']}
            typeSpeed={70}
            backSpeed={50}
            loop
          />
        </div>
      </div>
    </div>

          <div className="hidden sm:grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">

            <div className="overflow-hidden bg-white rounded shadow hidden sm:block">
              <div className="p-5">
                <div className="relative flex justify-center">
                  <div className="block aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-full" src={Cafetera} alt="cafetera" style={{ width: 290, height: 250 }} />
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full hover:border hover:border-gray-600"> Producto destacado </span>
                  </div>
                </div>
                <p className="mt-5 text-2xl font-semibold">
                  <p className="text-black"> Cafetera ATMA Filtro</p>
                </p>
                <p className="mt-4 text-base text-gray-600">Disfruta del sabor auténtico con la Cafetera ATMA Filtro</p>
                {
                  !checkProductInCart({
                    "price": "",
                    "title": "CAFETERA ATMA CA-8182 FILTRO",
                    "imageUrl": "https://www.dipromas.com.ar/web/image/product.template/954/image_512/%5B080-08182%5D%20CAFETERA%20ATMA%20CA-8182%20FILTRO?unique=f97b214",
                    "category": "pequenos-electrodomesticos"
                  }) ? (

                    <button onClick={() => addToCart({
                      ... {
                        "price": "",
                        "title": "CAFETERA ATMA CA-8182 FILTRO",
                        "imageUrl": "https://www.dipromas.com.ar/web/image/product.template/954/image_512/%5B080-08182%5D%20CAFETERA%20ATMA%20CA-8182%20FILTRO?unique=f97b214",
                        "category": "pequenos-electrodomesticos"
                      }, quantity: 1
                    })} className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-[#00df9a] transition-all duration-200 border-b-2 border-transparent hover:border-[#1ea77b] focus:border-[#1ea77b]">
                      Añadir al carrito
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  )
                    : (
                      <button onClick={() => removeItemFromCart({
                        ... {
                          "price": "",
                          "title": "CAFETERA ATMA CA-8182 FILTRO",
                          "imageUrl": "https://www.dipromas.com.ar/web/image/product.template/954/image_512/%5B080-08182%5D%20CAFETERA%20ATMA%20CA-8182%20FILTRO?unique=f97b214",
                          "category": "pequenos-electrodomesticos"
                        }, quantity: 1
                      })} className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-[#e76e49] transition-all duration-200 border-b-2 border-transparent hover:border-[#b84e40] focus:border-[#b84e40]">
                        Eliminar del carrito
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    )
                }
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow hidden sm:block">
              <div className="p-5">
                <div className="relative flex justify-center">
                  <div className="block aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-full" src={Tv} alt="Tv noblex" style={{ width: 500, height: 250 }} />
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full hover:border hover:border-gray-600"> Producto destacado </span>
                  </div>
                </div>

                <p className="mt-5 text-2xl font-semibold">
                  <p className="text-black">TV NOBLEX FHD Android </p>
                </p>
                <p className="mt-4 text-base text-gray-600">¡Disfruta la Copa América y la Eurocopa con el TV NOBLEX FHD Android!</p>
                {
                  !checkProductInCart({
                    "price": "",
                    "title": "TV LED NOBLEX DK43X7100 FHD ANDROID",
                    "imageUrl": "https://www.dipromas.com.ar/web/image/product.template/8643/image_512/%5B085-93551%5D%20TV%20LED%20NOBLEX%20DK43X7100%20FHD%20ANDROID?unique=6966c51",
                    "category": "televisores"
                  }) ? (

                    <button onClick={() => addToCart({
                      ... {
                        "price": "",
                        "title": "TV LED NOBLEX DK43X7100 FHD ANDROID",
                        "imageUrl": "https://www.dipromas.com.ar/web/image/product.template/8643/image_512/%5B085-93551%5D%20TV%20LED%20NOBLEX%20DK43X7100%20FHD%20ANDROID?unique=6966c51",
                        "category": "televisores"
                      }, quantity: 1
                    })} className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-[#00df9a] transition-all duration-200 border-b-2 border-transparent hover:border-[#1ea77b] focus:border-[#1ea77b]">
                      Añadir al carrito
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  )
                    : (
                      <button onClick={() => removeItemFromCart({
                        ... {
                          "price": "",
                          "title": "TV LED NOBLEX DK43X7100 FHD ANDROID",
                          "imageUrl": "https://www.dipromas.com.ar/web/image/product.template/8643/image_512/%5B085-93551%5D%20TV%20LED%20NOBLEX%20DK43X7100%20FHD%20ANDROID?unique=6966c51",
                          "category": "televisores"
                        }, quantity: 1
                      })} className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-[#e76e49] transition-all duration-200 border-b-2 border-transparent hover:border-[#b84e40] focus:border-[#b84e40]">
                        Eliminar del carrito
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    )
                }
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow hidden sm:block">
              <div className="p-5">
                <div className="relative flex justify-center">
                  <div className="block aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-full" src={Celular} alt="Celular samsung a05" style={{ width: 170, height: 250 }} />
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full hover:border hover:border-gray-600"> Producto destacado </span>
                  </div>
                </div>
                <p className="mt-5 text-2xl font-semibold">
                  <p className="text-black"> SAMSUNG Galaxy A05 </p>
                </p>
                <p className="mt-4 text-base text-gray-600">Pantalla HD 6.7" 4/64GB. Rendimiento fluido y eficiente</p>
                {
                  !checkProductInCart({
                    "price": "",
                    "title": "Celular Samsung Galaxy A05 6.7\" 4/64GB Black",
                    "imageUrl": "https://www.cetrogar.com.ar/media/catalog/product/s/m/sm-a055_galaxy-a05_black_front.png?quality=80&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300",
                    "category": "celulares"
                  }) ? (

                    <button onClick={() => addToCart({
                      ... {
                        "price": "",
                        "title": "Celular Samsung Galaxy A05 6.7\" 4/64GB Black",
                        "imageUrl": "https://www.cetrogar.com.ar/media/catalog/product/s/m/sm-a055_galaxy-a05_black_front.png?quality=80&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300",
                        "category": "celulares"
                      }, quantity: 1
                    })} className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-[#00df9a] transition-all duration-200 border-b-2 border-transparent hover:border-[#1ea77b] focus:border-[#1ea77b]">
                      Añadir al carrito
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  )
                    : (
                      <button onClick={() => removeItemFromCart({
                        ... {
                          "price": "",
                          "title": "Celular Samsung Galaxy A05 6.7\" 4/64GB Black",
                          "imageUrl": "https://www.cetrogar.com.ar/media/catalog/product/s/m/sm-a055_galaxy-a05_black_front.png?quality=80&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300",
                          "category": "celulares"
                        }, quantity: 1
                      })} className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-[#e76e49] transition-all duration-200 border-b-2 border-transparent hover:border-[#b84e40] focus:border-[#b84e40]">
                        Eliminar del carrito
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <Productos />
    </>
  )
}