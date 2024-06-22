
interface FiltrosProps {
  changeFilters: (filters: { category: string, searched: string }) => void;
}

export const Filtros: React.FC<FiltrosProps> = ({ changeFilters }) => {

  const handleChangeCategory = (event) => {
    changeFilters({
      category: event.target.value,
      searched: ''
    });
  }

  return (
    <>
      <div className="flex justify-center my-5">
        <ul className="flex flex-wrap justify-center gap-0.5">
          <li><button onClick={handleChangeCategory} value='celulares' className="border border-gray-500 font-medium px-5 py-2 rounded-md hover:border-black">Celulares</button></li>
          <li><button onClick={handleChangeCategory} value='televisores' className="border border-gray-500 font-medium px-5 py-2 rounded-md hover:border-black">Televisores</button></li>
          <li><button onClick={handleChangeCategory} value='heladeras' className="border border-gray-500 font-medium px-5 py-2 rounded-md hover:border-black">Heladeras</button></li>
          <li><button onClick={handleChangeCategory} value='lavarropas' className="border border-gray-500 font-medium px-5 py-2 rounded-md hover:border-black">Lavarropas</button></li>
          <li><button onClick={handleChangeCategory} value='climatizacion' className="border border-gray-500 font-medium px-5 py-2 rounded-md hover:border-black">Climatización</button></li>
          <li><button onClick={handleChangeCategory} value='pequenos-electrodomesticos' className="border border-gray-500 font-medium px-5 py-2 rounded-md hover:border-black">Pequeños electrodomésticos</button></li>
        </ul>
      </div>
    </>
  );
};
