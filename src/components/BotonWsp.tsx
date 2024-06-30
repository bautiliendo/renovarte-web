import { FaWhatsapp } from 'react-icons/fa'

export const BotonWsp = () => {

    const handleWhatsapp = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const mensaje = "Hola! Me contacto desde su página web para realizar una consulta"
        const numeroTel = '5493512399026';
        const whatsappLink = `https://wa.me/${numeroTel}?text=${encodeURIComponent(mensaje)}`;
        window.open(whatsappLink, '_blank')
    }
    return (
        <button
            onClick={handleWhatsapp}
            className='fixed bottom-4 right-4
         bg-green-500 text-white p-4
          rounded-full shadow-lg hover:bg-green-600
           transition-colors duration-300'
            title='Ir a WhatsApp'
        >
            <FaWhatsapp size={30} />
        </button>
    )
}
