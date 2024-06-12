
interface FiltrosProps {
  changeFilters: (filters: { category: string }) => void;
}

export const Filtros: React.FC<FiltrosProps> = ({ changeFilters }) => {

  const handleChangeCategory = (event) => {
    changeFilters({
      category: event.target.value
    });
  }

  return (
    <div className="flex justify-center my-10">
      <ul className="flex gap-4">
        <li><button onClick={handleChangeCategory} value='celulares'>Celulares</button></li>
        <li><button onClick={handleChangeCategory} value='televisores'>Televisores</button></li>
        <li><button onClick={handleChangeCategory} value='heladeras'>Heladeras</button></li>
        <li><button onClick={handleChangeCategory} value='lavarropas'>Lavarropas</button></li>
        <li><button onClick={handleChangeCategory} value='climatizacion'>Climatización</button></li>
        <li><button onClick={handleChangeCategory} value='pequenos-electrodomesticos'>Pequeños electrodomésticos</button></li>
      </ul>
    </div>
  );
};
