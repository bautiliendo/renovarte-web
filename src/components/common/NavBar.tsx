import React, { useMemo, useState } from 'react'
import { AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import LogoBlack from '../../assets/Renovartelogo(sm).png'
import { useCart } from '../../hooks/useCart';
import { SearchBar } from '../SearchBar';

export const NavBar: React.FC = () => { //React.FC --> typescript lo infiere, pero es buena práctica
    const { cart } = useCart();
    const [nav, setNav] = useState<boolean>(false);

    const handleNav = () => {
        setNav(!nav)
    }

    const cartQuantity = useMemo(() => {
        return cart.reduce((accum, item) => accum + item.quantity, 0);
    }, [cart]);

    return (
        <div className='top-0 left-0 w-full z-50 bg-gray-900 fixed sm:sticky'>
            <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white'>
                <div className='w-full'><Link to='/'><img src={LogoBlack} style={{ width: 190 }} /></Link></div>
                <ul className='hidden md:flex'>
                    <SearchBar />
                    <li className='p-4 hover:scale-[1.04] hidden 1050px:block'><Link to='/productos'>Productos</Link></li>
                    <li className='p-4 hover:scale-[1.04] hidden 1050px:block'><Link to='/comprar'>Comprar</Link></li>
                    <li className='p-4 hover:scale-[1.04] hidden 1050px:block'><Link to='/empresa'>Empresa</Link></li>
                </ul>
                <div className='mr-10 ml-10 hidden md:flex hover:scale-[1.04] mt-1'>
                    {
                        cart.length >= 1 ? (
                            <div className='flex gap-1 items-center'>
                                <button className='absolute ml-6 bg-[#00df9a] text-black px-2 rounded-full'>{cartQuantity}</button>
                                <Link to='/carrito'><AiOutlineShoppingCart size={20} /></Link>
                            </div>
                        )
                            : (
                                <Link to='/carrito'><AiOutlineShoppingCart size={20} /></Link>
                            )
                    }
                </div>

                <div className='block md:hidden'>
                    <div className='flex gap-8'>
                        {
                            cart.length >= 1 ? (
                                <div className='flex gap-1 items-center'>
                                    <Link to='/carrito'><AiOutlineShoppingCart size={20} /></Link>
                                    <button className='absolute ml-6 bg-[#00df9a] text-black px-2 rounded-full'>{cartQuantity}</button>
                                </div>
                            )
                                : (
                                    <Link to='/carrito'><AiOutlineShoppingCart size={20} /></Link>
                                )
                        }
                        {nav ? <AiOutlineClose size={20} onClick={handleNav} /> : <AiOutlineMenu size={20} onClick={handleNav} />}
                    </div>
                </div>
                <div className={nav ? 'pt-6 fixed left-0 top-0 w-[60%] h-full z-50 border-r-gray-900 bg-gray-900 ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] '}>
                    <div className='w-full'><img src={LogoBlack} style={{ width: 190 }} /></div>
                    <ul className='uppercase p-4'>
                        <li className='p-4 border-b border-gray-600 hover:underline'><Link to='/productos'>Productos</Link></li>
                        <li className='p-4 border-b border-gray-600 hover:underline'><Link to='/comprar'>Comprar</Link></li>
                        <li className='p-4 border-b border-gray-600 hover:underline'><Link to='/empresa'>Empresa</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
