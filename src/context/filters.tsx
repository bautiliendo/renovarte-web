import { ReactNode, createContext } from "react";
import { useFilters } from "../hooks/UseFilters";
import { FiltersType } from "../types";

interface FiltersProviderProps {
    children: ReactNode;
}

interface FiltersContextType {
    filters: FiltersType;
    setFilters: (filters: FiltersType) => void;
}

//crear contexto
export const FiltersContext = createContext<FiltersContextType | undefined>(undefined);
//crear provider
export const FiltersProvider: React.FC<FiltersProviderProps> = ({ children }) => {
    const { filters, setFilters } = useFilters();

    return (
        //proveerlo
        <FiltersContext.Provider value= {{filters, setFilters}}>
            {children}
        </FiltersContext.Provider>
    )
}
