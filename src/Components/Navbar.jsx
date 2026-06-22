import { LuFlame, LuShoppingBag, LuUser } from "react-icons/lu";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-[#f6f2ed] border-b">
      <div className="max-w-7xl mx-auto h-18 flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
            <LuFlame className="text-white text-2xl" />
          </div>

          <h1 className="text-3xl font-bold font-serif">
            Ember<span className="text-red-600">&Crust</span>
          </h1>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-12 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold"
                : "text-gray-800 hover:text-red-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/foods"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold"
                : "text-gray-800 hover:text-red-600"
            }
          >
            Foods
          </NavLink>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <button className="text-2xl text-gray-800 hover:text-red-600">
            <LuShoppingBag />
          </button>

          <Link  to="/registerCard" className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-2xl font-semibold transition">
            <LuUser />
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
