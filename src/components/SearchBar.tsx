import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useFiltersContext } from "../hooks/useFiltersContext";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchBar: React.FC = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');
    const { setFilters } = useFiltersContext()

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    }

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFilters({
            category: '',
            searched: searchInput
        });
        navigate('/productos')
        if(pathname != '/') {
            window.scrollTo(0, 0);
        }
    }

    return (
        <div className="font-medium mt-2 ">
            <form className="flex justify-center mx-4" onSubmit={handleSearch}>
                <input
                    type='text'
                    placeholder='Buscar producto'
                    className="md:w-[300px] w-full text-black px-5 py-2 border border-gray-500 rounded-md hover:border-black"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                />
                <button
                    type="submit"
                    className="mx-0.5 px-5 py-2 border border-gray-500 rounded-md bg-gray-900 text-white"
                >
                    <AiOutlineSearch />
                </button>
            </form>
        </div>
    )
}
