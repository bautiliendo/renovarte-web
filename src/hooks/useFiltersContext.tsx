import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export const useFiltersContext = () => {
    const context = useContext(FiltersContext);
    if (context === undefined) {
        throw new Error("useFiltersContext must be used within a FiltersProvider");
    }
    return context;
}