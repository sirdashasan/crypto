import { useNavigate } from "react-router-dom";
import { LogoIcon, SearchIcon } from "../icons/icons";
import { useSearch } from "../context/SearchContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { setSearchTerm } = useSearch();

  return (
    <div className="bg-gray-800 text-white h-14 flex items-center">
      <div className="wrapper-container w-full">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="flex items-center gap-1 cursor-pointer">
            <LogoIcon />
            <p className="font-semibold">
              <span className="text-yellow-500">C</span>rypto
              <span className="text-yellow-500">H</span>asan
            </p>
          </div>

          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search Coin..."
              className="pl-2 h-8 rounded-lg text-black"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute ml-40 ">
              <SearchIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
