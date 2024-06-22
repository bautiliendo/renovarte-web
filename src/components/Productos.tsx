import { Filtros } from './Filtros';
import { RenderProducts } from './RenderProducts';
import { SearchBar } from './SearchBar';

export const Productos: React.FC = () => {

  return (
    <div className='w-full bg-white text-center py-4 justify-center'>
      <div className='py-4 block md:hidden'><SearchBar /></div>
      <Filtros />
      <RenderProducts />
    </div>
  )
}

