import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useCart } from "../hooks/useCart";

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose }) => {

    const { cart } = useCart();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const nombre = (form.elements.namedItem('nombre') as HTMLInputElement).value;
        const ciudad = (form.elements.namedItem('ciudad') as HTMLInputElement).value;
        const barrio = (form.elements.namedItem('barrio') as HTMLInputElement).value;
        const mutual = (form.elements.namedItem('mutual') as HTMLSelectElement).value;


        const detalleCart = cart.map(product => `${product.quantity} ${product.title}`).join(', ');
        const mensaje = `Hola! Mi nombre es ${nombre}. Me contacto desde su página web para coordinar la compra de:

*${detalleCart}*

*Ciudad:* ${ciudad}
*Barrio:* ${barrio}
*Mutual:* ${mutual}`;

        const numeroTel = '5493512399026';

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); // -> test compara los dispositivos con (navigator.userAgent) 

        let whatsappLink;

        if (isMobile) {
            whatsappLink = `https://wa.me/${numeroTel}?text=${encodeURIComponent(mensaje)}`; // encodeURIComponent --> espacios se convierten en %20, "ñ" en %C3%B1, etc.
        } else {
            whatsappLink = `https://web.whatsapp.com/send?text=${encodeURIComponent(mensaje)}&phone=${numeroTel}`;
        }
        window.open(whatsappLink, '_blank');
    }

    if (!open) return null;
    return (
        <div onClick={onClose} className="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center">
            <div onClick={(e) => {
                e.stopPropagation();
            }} className="bg-gray-200 w-full max-w-[600px] shadow-xl relative rounded-lg mx-8">
                <div className="flex justify-end">
                    <button onClick={onClose} className="p-4 absolute hover:text-red-800">
                        <MdOutlineClose />
                    </button>
                </div>
                <form className="max-w-sm mx-auto p-4 sm:p-12" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="nombre" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Nombre y Apellido *</label>
                        <input type="text" id="nombre" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Nombre y Apellido" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="ciudad" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Ciudad *</label>
                        <input type="text" id="ciudad" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Córdoba Cápital" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="barrio" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Barrio *</label>
                        <input type="text" id="barrio" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="General Paz / Arguello" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mutual" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Mutual</label>
                        <select id="mutual" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:bg-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                            <option value="SUOEM" selected>SUOEM</option>
                            <option value="UPCN">UPCN</option>
                            <option value="3 Abril">3 Abril</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="flex items-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition">
                        <FaWhatsapp size={30} />
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};
