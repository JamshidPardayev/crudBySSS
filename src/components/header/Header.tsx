import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[80px] bg-gray-900 text-white font-semibold flex justify-center items-center gap-6">
      <Link to={"/"} className="hover:text-gray-300 duration-300">
        Home
      </Link>
      <Link to={"/about"} className="hover:text-gray-300 duration-300">
        About
      </Link>
      <Link to={"/blog"} className="hover:text-gray-300 duration-300">
        Blog
      </Link>
    </div>
  );
};

export default Header;
