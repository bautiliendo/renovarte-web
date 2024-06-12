import { useState } from "react";
import { Producto } from '../types';

export function useFilters() {
    const [filters, setFilters] = useState({
      category: 'celulares'
    })
  
    const filterProducts = (productos: Producto[]) => {
      return productos.filter((producto) => {
        return (
          filters.category === 'all' ||
          producto.category === filters.category
        );
      });
    };
  
    return {filters, setFilters, filterProducts }
  }