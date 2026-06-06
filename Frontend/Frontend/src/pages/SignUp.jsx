import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: null,
  });
  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const fileHandler = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("image", formData.image);
      
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5000/api/user/register",
        data,
        {
          headers: {
            // FIX 1: Capital 'D' ko lowercase 'd' kiya (multipart/form-data)
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.data.success) {
        toast.success(res.data.message || "Account created successfully! ✨");
        navigate("/login");
      } else {
        toast.error(res.data.message || "Registration failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    // FIX 2: Pink background hata kar same minimal beige container aur flex centering add ki hai
    <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Wedding Theme Card */}
      <div className="w-full bg-white max-w-md p-8 sm:p-10 rounded-3xl border border-[#EFEBE4] shadow-sm">
        
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-xs tracking-[0.2em] text-[#C5A880] uppercase font-semibold block mb-2">
            Join Our Community
          </span>
          <h2 className="text-2xl font-bold text-[#3A332F] tracking-wide">
            Create your account!
          </h2>
          <div className="w-12 h-[1.5px] bg-[#C5A880] mx-auto my-3"></div>
        </div>

        {/* Form */}
        <form onSubmit={submitHandler} className="flex flex-col gap-5 w-full">
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1.5">
              Full Name
            </label>
            <input
              onChange={onChangeHandler}
              name="name"
              value={formData.name}
              type="text"
              placeholder="Your name"
              className="w-full bg-[#FAF8F5] px-4 py-2.5 border border-[#E6E1DA] rounded-xl focus:border-[#C5A880] focus:bg-white outline-none transition duration-300 text-sm text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1.5">
              Email Address
            </label>
            <input
              onChange={onChangeHandler}
              name="email"
              value={formData.email}
              type="email"
              placeholder="name@example.com"
              className="w-full bg-[#FAF8F5] px-4 py-2.5 border border-[#E6E1DA] rounded-xl focus:border-[#C5A880] focus:bg-white outline-none transition duration-300 text-sm text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1.5">
              Password
            </label>
            <input
              onChange={onChangeHandler}
              name="password"
              value={formData.password}
              type="password"
              placeholder="Create a password"
              className="w-full bg-[#FAF8F5] px-4 py-2.5 border border-[#E6E1DA] rounded-xl focus:border-[#C5A880] focus:bg-white outline-none transition duration-300 text-sm text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1.5">
              Profile Picture
            </label>
            <input
              onChange={fileHandler}
              accept="image/*"
              type="file"
              className="w-full bg-[#FAF8F5] px-4 py-2 border border-[#E6E1DA] rounded-xl focus:border-[#C5A880] focus:bg-white outline-none transition duration-300 text-sm text-gray-600 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#3A332F] file:text-white hover:file:bg-[#C5A880] file:transition-all file:duration-300 file:cursor-pointer"
              required
            />
          </div>

          {/* FIX 3: Classy charcoal button with loading states */}
          <button 
            disabled={loading}
            className="w-full bg-[#3A332F] hover:bg-[#C5A880] text-white tracking-widest uppercase text-xs font-bold py-3.5 px-4 rounded-xl transition duration-300 shadow-xs mt-2 cursor-pointer disabled:bg-gray-400"
          >
            {loading ? "Creating Account..." : "Signup"}
          </button>
        </form>

        {/* Footer Link Matching Colors */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link 
            to={"/login"} 
            className="text-[#C5A880] hover:text-[#3A332F] font-semibold underline underline-offset-4 transition duration-300 cursor-pointer"
          >
            Login Here
          </Link>{" "}
        </p>

      </div>
    </div>
  );
};

export default Signup;