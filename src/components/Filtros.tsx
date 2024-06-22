import { useFiltersContext } from "../hooks/useFiltersContext";
import Celular from '../assets/celular.png'
import TV from '../assets/tv.png'
import Heladera from '../assets/heladera.png'
import Lavarropas from '../assets/lavarropa.png'
import Aire from '../assets/aire.png'
import Pava from '../assets/pava.png'

export const Filtros: React.FC = () => {
  const { setFilters } = useFiltersContext();

  const handleChangeCategory = (event) => {
    setFilters({
      category: event.currentTarget.value,
      searched: ''
    });
  }

  return (
    <>
      <div className="flex justify-center my-5">
        <ul className="flex flex-wrap justify-center gap-2 ">
          <li><button onClick={handleChangeCategory} value='celulares' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col items-center transition-transform transform hover:border-gray-300" >Celulares <img src={Celular} style={{ width: 90, height: 80 }} /> </button></li>
          <li><button onClick={handleChangeCategory} value='televisores' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Televisores  <img src={TV} style={{ width: 90, height: 80 }} /></button></li>
          <li><button onClick={handleChangeCategory} value='heladeras' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Heladeras <img src={Heladera} style={{ width: 90, height: 80 }} className="pr-2"/></button></li>
          <li><button onClick={handleChangeCategory} value='lavarropas' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Lavarropas <img src={Lavarropas} style={{ width: 90, height: 80 }} /></button></li>
          <li><button onClick={handleChangeCategory} value='climatizacion' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Climatización <img src={Aire} style={{ width: 90, height: 80 }} /></button></li>
          <li><button onClick={handleChangeCategory} value='pequenos-electrodomesticos' className="border font-medium px-2 py-2 hover:rounded-md flex flex-col justify-center align-middle items-center transition-transform transform hover:border-gray-300" >Pequeños cocina <img src={Pava} style={{ width: 90, height: 80 }} /></button></li>
        </ul>
      </div>
    </>
  );
};
