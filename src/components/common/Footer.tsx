import {
    FaFacebookSquare,
    FaInstagram,
    FaWhatsapp
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import LogoBlack from '../../assets/logo-black(1).png'

export const Footer: React.FC = () => {
    return (
        <div className='max-w-[1240px] mx-0 py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
            <div className='w-full'><img src={LogoBlack} style={{width: 190}}/></div>
                <p className='py-4'>© 2016 Renovarte</p>
                <p><Link to='terminosycond' className='underline'>Términos y condiciones</Link> - <Link to='politicapriv' className='underline'>Política de privacidad</Link></p>
                <div className='flex md:w-[75%] my-6 gap-4'>
                    <a href='https://www.facebook.com/renovartecba/' target="_blank" rel="noopener noreferrer"><FaFacebookSquare size={30} /></a>
                    <a href='https://www.instagram.com/renovartecba/' target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
                    <a href='https://api.whatsapp.com/send?phone=5493512399026&text=Hola!%20Me%20contacto%20desde%20la%20web%20para%20realizar%20una%20consulta...' target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} /></a>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mx-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Navegación</h6>
                    <ul>
                        <li className='py-2 text-sm hover:underline'><Link to='/'>Inicio</Link></li>
                        <li className='py-2 text-sm hover:underline'><Link to='/productos'>Productos</Link></li>
                        <li className='py-2 text-sm hover:underline'><Link to='/ofertas'>Ofertas</Link></li>
                        <li className='py-2 text-sm hover:underline'><Link to='/empresa'>Empresa</Link></li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Horarios de atención</h6>
                    <ul>
                        <li className='py-2 text-sm font-bold'>Lunes a Viernes</li>
                        <p className='text-sm'>de 9:00 hs. a 18:00 hs.</p>
                        <li className='py-2 text-sm font-bold'>Sábados</li>
                        <p className='text-sm'>de 9:00 hs. a 13:00 hs.</p>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Redes</h6>
                    <ul>
                        <a href='https://www.facebook.com/renovartecba/' target="_blank" rel="noopener noreferrer">
                            <li className='py-2 text-sm hover:text-blue-400 hover:underline list-none'>Facebook</li>
                        </a>
                        <a href='https://www.instagram.com/renovartecba/' target="_blank" rel="noopener noreferrer">
                            <li className='py-2 text-sm hover:text-rose-400 hover:underline list-none'>Instagram</li>
                        </a>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Contactanos</h6>
                    <a href='https://api.whatsapp.com/send?phone=5493512399026&text=Hola!%20Me%20contacto%20desde%20la%20web%20para%20realizar%20una%20consulta...' target="_blank" rel="noopener noreferrer">
                        <li className='py-2 text-sm hover:text-green-400 hover:underline list-none'>WhatsApp</li>
                    </a>
                </div>
            </div>
        </div>
    )
}


