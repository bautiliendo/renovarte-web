import { useState } from "react";
import { Producto } from '../types';

export function useFilters() {
  const [filters, setFilters] = useState({
    category: 'celulares',
    searched: ''
  })

  const filterProducts = (productos: Producto[]) => {
    return productos.filter((producto) => {
      const matchesCategory = filters.category === 'all' || producto.category === filters.category
      const matchesSearch = producto.title.toLowerCase().includes(filters.searched.toLowerCase());

      if (filters.searched) { // string vacio es considerado FALSO en JS
        return matchesSearch;
      } else {
        return matchesCategory;
      }
    });
  };

  return { filters, setFilters, filterProducts }
}