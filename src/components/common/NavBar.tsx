import React, { useMemo, useState } from 'react'
import { AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoBlack from '../../assets/Renovartelogo(sm).png'
import { useCart } from '../../hooks/useCart';
import { SearchBar } from '../SearchBar';

export const NavBar: React.FC = () => {
    const { cart } = useCart();
    const [nav, setNav] = useState<boolean>(false);
    const { pathname } = useLocation();
    const navigate = useNavigate()

    const handleNav = () => {
        setNav(!nav)
    }

    const cartQuantity = useMemo(() => {
        return cart.reduce((accum, item) => accum + item.quantity, 0);
    }, [cart]);


    const handleLogoRedirect = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
        if (pathname === '/') {
            window.scrollTo(0, 0)
        } else {
            navigate('/')
        }
    }

    return (
        <div className='top-0 left-0 w-full z-50 bg-gray-900 fixed sm:sticky'>
            <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white'>
                <div className='w-full'><img src={LogoBlack} style={{ width: 190, cursor: 'pointer' }} onClick={handleLogoRedirect} alt='Logo' /></div>
                <ul className='hidden md:flex'>
                    <SearchBar />
                    <li className='p-4 hover:scale-[1.04] '><Link to='/productos'>Productos</Link></li>
                    <li className='p-4 hover:scale-[1.04] hidden 1050px:block'><Link to='/comprar'>Comprar</Link></li>
                    <li className='p-4 hover:scale-[1.04] hidden 1050px:block'><Link to='/empresa'>Empresa</Link></li>
                </ul>
                <div className='mx-10 hidden md:flex hover:scale-[1.04]'>
                    <Link to='/carrito'><AiOutlineShoppingCart size={25} /></Link>
                    {
                        cart.length >= 1 ? (
                            <Link to='/carrito'>
                                <button className='absolute bg-[#00df9a] text-black px-1.5 rounded-full text-xs my-1.5' >{cartQuantity}</button>
                            </Link>
                        )
                            : ''

                    }
                </div>

                <div className='flex md:hidden items-center justify-between w-24'>
                    <div className='relative'>
                        <div className='flex items-center'>
                            <Link to='/carrito'>
                                <AiOutlineShoppingCart size={25} />
                            </Link>
                            {cart.length >= 1 && (
                                <Link to='/carrito'>
                                    <button className='ml-1 bg-[#00df9a] text-black px-1.5 rounded-full text-xs'>{cartQuantity}</button>
                                </Link>
                            )}
                        </div>
                    </div>

                    <div>
                        {nav ? (
                            <AiOutlineClose size={25} onClick={handleNav} />
                        ) : (
                            <AiOutlineMenu size={25} onClick={handleNav} />
                        )}
                    </div>
                </div>
                <div onClick={handleNav} className={nav ? 'pt-6 fixed left-0 top-0 w-[100%] h-full z-50 bg-black bg-opacity-30 md:hidden' : ''}>
                    <div onClick={(e) => {
                        e.stopPropagation();
                    }} className={nav ? 'pt-4 fixed left-0 top-0 w-[60%] h-full z-50 border-r-gray-900 bg-gray-900 ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] '}>
                        <div className='w-full'><img src={LogoBlack} style={{ width: 190, cursor: 'pointer' }} onClick={(e) => { handleLogoRedirect(e); handleNav() }} alt='Logo' /></div>
                        <ul className='uppercase p-4'>
                            <li className='p-4 border-b border-gray-600 hover:underline'><Link to='/productos' onClick={handleNav}>Productos</Link></li>
                            <li className='p-4 border-b border-gray-600 hover:underline'><Link to='/comprar' onClick={handleNav}>Comprar</Link></li>
                            <li className='p-4 border-b border-gray-600 hover:underline'><Link to='/empresa' onClick={handleNav}>Empresa</Link></li>
                            <li className='p-4 border-b border-gray-600'>
                                {cart.length >= 1 ? (
                                    <div className='flex gap-1 items-center'>
                                        <Link to='/carrito' onClick={handleNav}><li className=' hover:underline'>Carrito</li></Link>
                                        <Link to='/carrito' className='mb-4' onClick={handleNav}>
                                            <button className='absolute bg-[#00df9a] text-black px-1.5 rounded-full text-xs' >{cartQuantity}</button>
                                        </Link>
                                    </div>
                                )
                                    : (
                                        <Link to='/carrito' onClick={handleNav}><li className=' hover:underline'>Carrito</li></Link>
                                    )
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
