import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="hidden sm:flex gap-2 items-center rounded-md ring-1 ring-gray-200 py-1 px-2 shadow-md">
      <Search className="w-4 h-4" />
      <input
        type="text"
        id="search"
        placeholder="search..."
        className="outline-none"
      />
    </div>
  );
};

export default SearchBar;
