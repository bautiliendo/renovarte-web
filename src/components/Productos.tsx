import { Filtros } from './Filtros';
import { RenderProducts } from './RenderProducts';
import { SearchBar } from './SearchBar';

export const Productos: React.FC = () => {
  return (
    <div className='w-full bg-white text-center py-4 justify-center'>
      <div className='block md:hidden fixed top-16 left-0 right-0 bg-gray-900 py-2.5 w-full z-10'>
        <SearchBar />
      </div>

      <Filtros />

      <RenderProducts />
    </div>
  )
}
