import { Link, useNavigate } from "react-router-dom"; // FIX 1: useNavigate ko import kiya
import { assets } from '../assets/assets'
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { toast } from "react-toastify"; // FIX 2: Beautiful alerts ke liye toast ko import kiya

const Navbar = () => {
  const { user, logoutUser } = useContext(StoreContext);
  const navigate = useNavigate(); // FIX 3: Hooks initialization

  // FIX 4: Logout handler function jo state clear karega aur user ko turant redirect karega
  const handleLogoutClick = () => {
    logoutUser(); // Yeh context se states aur local storage ko clean karega
    toast.success("Logged out successfully! See you soon. ✨");
    navigate("/login"); // Instantly login screen par redirect
  };

  return (
    <nav className="bg-white border-b border-[#EFEBE4] p-4 sticky top-0 z-50 shadow-xs">
      <div className="flex container mx-auto justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex gap-2 items-center">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={assets.logo} alt="Logo" className="w-8 h-8 object-contain" />
            <p className="hidden sm:block text-xl tracking-wide text-[#3A332F] font-medium">
              Meta <span className="font-bold text-[#C5A880]">Blog</span>
            </p>
          </Link>
        </div>

        {/* Center Links */}
        <ul className="hidden sm:flex gap-8 text-sm uppercase tracking-widest font-semibold justify-center items-center text-gray-600">
          <Link to="/" className="cursor-pointer hover:text-[#C5A880] transition duration-300">
            Home
          </Link>
          <Link to="/blogs" className="cursor-pointer hover:text-[#C5A880] transition duration-300">
            Blogs
          </Link>
          <Link to="/about" className="cursor-pointer hover:text-[#C5A880] transition duration-300">
            About
          </Link>
          <Link to="/contact" className="cursor-pointer hover:text-[#C5A880] transition duration-300">
            Contact
          </Link>
        </ul>

        {/* Auth Buttons Side */}
        {user ? (
          <div className="flex gap-3 items-center">
            {/* Dashboard Button */}
            <Link
              to={"/dashboard"}
              className="border border-[#3A332F] text-[#3A332F] hover:bg-[#3A332F] hover:text-white text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-xl transition duration-300"
            >
              Dashboard
            </Link>
            
            {/* Logout Button: Ab yahan direct function hit hoga */}
            <button
              onClick={handleLogoutClick}
              className="bg-[#3A332F] hover:bg-[#C5A880] text-white text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-xl transition duration-300 cursor-pointer shadow-xs"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="bg-[#3A332F] hover:bg-[#C5A880] text-white text-xs uppercase tracking-widest font-bold px-6 py-2.5 rounded-xl transition duration-300 cursor-pointer shadow-xs"
          >
            Signin
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;