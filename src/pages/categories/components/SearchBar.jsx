import { IoIosSearch } from "react-icons/io";
import useSearch from "./../../../hooks/useSearch";
const SearchBar = ({ products }) => {
  const { results, search, hanleInputchange } = useSearch(products);
  return (
    <div>
      <form className="form-search d-flex align-items-center mb-4 mb-sm-0 p-1">
        <IoIosSearch size="24" />
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar Productos"
          value={search}
          name="search"
          onChange={hanleInputchange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
