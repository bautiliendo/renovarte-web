import { ReactNode, createContext, useState } from "react";
import { FiltersType, Producto } from "../types";

interface FiltersProviderProps {
    children: ReactNode;
}

interface FiltersContextType {
    filters: FiltersType;
    setFilters: (filters: FiltersType) => void;
    filterProducts: (producto: Producto[]) => Producto[];
}

//crear contexto
export const FiltersContext = createContext<FiltersContextType | undefined>(undefined);
//crear provider
export const FiltersProvider: React.FC<FiltersProviderProps> = ({ children }) => {
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
    return (
        //proveerlo
        <FiltersContext.Provider value= {{filters, setFilters, filterProducts}}>
            {children}
        </FiltersContext.Provider>
    )
}
