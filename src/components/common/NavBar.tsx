import React, { useState } from 'react'
import { AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import LogoBlack from '../../assets/logo-black(1).png'
import { useCart } from '../../hooks/useCart';

export const NavBar: React.FC = () => { //React.FC --> typescript lo infiere, pero es buena práctica
    const { cart } = useCart();
    const [nav, setNav] = useState<boolean>(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='top-0 left-0 w-full z-50 bg-[#000300]'>
        <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <div className='w-full'><Link to='/'><img src={LogoBlack} style={{ width: 190 }} /></Link></div>
            <ul className='hidden md:flex'>
                <li className='p-4 hover:scale-[1.04]'><Link to='/productos'>Productos</Link></li>
                <li className='p-4 hover:scale-[1.04]'><Link to='/comprar'>Comprar</Link></li>
                <li className='p-4 hover:scale-[1.04]'><Link to='/empresa'>Empresa</Link></li>
            </ul>
            <div className='mr-10 ml-10 hidden md:flex hover:scale-[1.04] mt-1'>
                {
                    cart.length >= 1 ? (
                        <div className='flex gap-1 items-center'>
                        <Link to='/carrito'><AiOutlineShoppingCart size={20} /></Link>
                        <button className='bg-[#e76e49] text-black px-2 rounded-full'>{cart.length}</button>
                        </div>
                    ) 
                    : (
                    <Link to='/carrito'><AiOutlineShoppingCart size={20} /></Link>
                    )
                }
            </div>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full z-50 border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] '}>
                <div className='w-full'><img src={LogoBlack} style={{ width: 190 }} /></div>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600 hover:underline'><Link to='/productos'>Productos</Link></li>
                    <li className='p-4 border-b border-gray-600 hover:underline'><Link to='/comprar'>Comprar</Link></li>
                    <li className='p-4 border-b border-gray-600 hover:underline'><Link to='/empresa'>Empresa</Link></li>
                </ul>
                <div className='mr-10 ml-10 flex gap-1'>
                {
                    cart.length >= 1 ? (
                        <div className='flex gap-1 items-center'>
                        <Link to='/carrito'><AiOutlineShoppingCart size={20} /></Link>
                        <button className='bg-[#e76e49] text-black px-2 rounded-full'>{cart.length}</button>
                        </div>
                    ) 
                    : (
                    <Link to='/carrito'><AiOutlineShoppingCart size={20} /></Link>
                    )
                }
                </div>
            </div>
        </div>
        </div>
    )
}
