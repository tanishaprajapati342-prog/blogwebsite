import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StoreContext } from "../context/StoreContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loginUser } = useContext(StoreContext);
  const token = localStorage.getItem("token");
  
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5000/api/user/login", // Aapka actual backend URL
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("res", res);
      if (res.data.success) {
        const { user, token } = res.data;
        loginUser(user, token);
        toast.success(res.data.message || "Welcome back! ✨");
        navigate("/");
      } else {
        toast.error(res.data.message || "Login failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    // FIX 1: Pink color hata kar soft minimal beige background kiya hai aur centered structure lagaya hai
    <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center px-4 sm:px-6 lg:px-8 -mt-12">
      
      {/* Elegant Card Container */}
      <div className="w-full bg-white max-w-md p-8 sm:p-10 rounded-3xl border border-[#EFEBE4] shadow-sm">
        
        {/* Wedding Theme Minimal Header */}
        <div className="text-center mb-8">
          <span className="text-xs tracking-[0.2em] text-[#C5A880] uppercase font-semibold block mb-2">
            Welcome Back
          </span>
          <h2 className="text-2xl font-bold text-[#3A332F] tracking-wide">
            Login into your account!
          </h2>
          <div className="w-12 h-[1.5px] bg-[#C5A880] mx-auto my-3"></div>
        </div>

        {/* Form */}
        <form onSubmit={submitHandler} className="flex flex-col gap-5 w-full">
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
              Email Address
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
              type="email"
              placeholder="name@example.com"
              className="w-full bg-[#FAF8F5] px-4 py-3 border border-[#E6E1DA] rounded-xl focus:border-[#C5A880] focus:bg-white outline-none transition duration-300 text-sm text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
              Password
            </label>
            <input
              name="password"
              value={formData.password}
              onChange={onChangeHandler}
              type="password"
              placeholder="Your password"
              className="w-full bg-[#FAF8F5] px-4 py-3 border border-[#E6E1DA] rounded-xl focus:border-[#C5A880] focus:bg-white outline-none transition duration-300 text-sm text-gray-800"
              required
            />
          </div>

          {/* FIX 2: Orange button ko classy charcoal-brown button me convert kiya aur loading check dala */}
          <button 
            disabled={loading}
            className="w-full bg-[#3A332F] hover:bg-[#C5A880] text-white tracking-widest uppercase text-xs font-bold py-3.5 px-4 rounded-xl transition duration-300 shadow-xs mt-2 cursor-pointer disabled:bg-gray-400"
          >
            {loading ? "Signing In..." : "Signin"}
          </button>
        </form>

        {/* Footer Link Matching Colors */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link 
            to={"/register"} 
            className="text-[#C5A880] hover:text-[#3A332F] font-semibold underline underline-offset-4 transition duration-300 cursor-pointer"
          >
            Register Here
          </Link>{" "}
        </p>

      </div>
    </div>
  );
};

export default Login;