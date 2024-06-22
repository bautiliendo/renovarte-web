import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

interface FiltrosProps {
    changeFilters: (filters: { category: string, searched: string }) => void;
}

export const SearchBar: React.FC<FiltrosProps> = ({ changeFilters }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        changeFilters({
            category: '',
            searched: searchInput
        });
    }

    return (
        <div className="font-medium my-2">
            <form className="flex justify-center" onSubmit={handleSearch}>
                <input
                    type='text'
                    placeholder='Buscar producto'
                    className=" text-black px-5 py-2 border border-gray-500 rounded-md hover:border-black"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                />
                <button
                    type="submit"
                    className="mx-0.5 px-5 py-2 border border-gray-500 rounded-md"
                >
                    <AiOutlineSearch />
                </button>
            </form>
        </div>
    )
}
