import React, { useState } from 'react'
import allProducts from '../data/products.json'
import { Filtros } from './Filtros';
import { RenderProducts } from './RenderProducts';
import { useFilters } from '../hooks/UseFilters';

export const Productos: React.FC = () => {

  const [productos] = useState(allProducts);
  const { filterProducts, setFilters } = useFilters()
  const filteredProducts = filterProducts(productos);

  return (
    <div className='w-full bg-white py-[50px] text-center justify-center'>
      <Filtros changeFilters={setFilters} />
      <RenderProducts productos={filteredProducts} />
    </div>
  )
}

