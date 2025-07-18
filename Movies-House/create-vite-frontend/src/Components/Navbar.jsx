import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    isActive ? "text-blue-400 font-semibold" : "text-white hover:text-blue-300";

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo */}
          <div>
            <NavLink to="/" className="text-xl font-bold text-blue-400 flex items-center space-x-2">
              <span role="img" aria-label="clapper">🎬</span>
              <span>MovieApp</span>
            </NavLink>
          </div>

          {/* Right: Nav Links */}
          <div className="hidden sm:flex space-x-6 items-center">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink to="/movies" className={linkClasses}>Movies</NavLink>
            <NavLink to="/movie/tt0848228" className={linkClasses}>Movie</NavLink>
          </div>

          {/* Mobile: Dropdown */}
          <div className="sm:hidden">
            <details className="relative">
              <summary className="cursor-pointer">☰</summary>
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg py-2 z-10">
                <NavLink to="/" className={({ isActive }) => isActive ? "block px-4 py-2 text-blue-500 font-semibold" : "block px-4 py-2 hover:bg-gray-100"}>Home</NavLink>
                <NavLink to="/movies" className={({ isActive }) => isActive ? "block px-4 py-2 text-blue-500 font-semibold" : "block px-4 py-2 hover:bg-gray-100"}>Movies</NavLink>
                <NavLink to="/movie/tt0848228" className={({ isActive }) => isActive ? "block px-4 py-2 text-blue-500 font-semibold" : "block px-4 py-2 hover:bg-gray-100"}>Movie</NavLink>
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
