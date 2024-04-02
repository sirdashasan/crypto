import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../icons/icons";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 text-white h-14 flex items-center">
      <div className="wrapper-container w-full">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <LogoIcon />
          <p className="font-semibold">
            <span className="text-yellow-500">C</span>rypto
            <span className="text-yellow-500">H</span>asan
          </p>

          <input
            type="text"
            placeholder="Search..."
            className="search text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
