import React from "react";
import { Route, Routes, useLocation } from "react-router-dom"; 
import Navbar from "./component/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/SignUp.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";
import Footer from "./component/Footer.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => {
  // 1. Hook ko yahan initialize karein
  const location = useLocation();

  // 2. Variable yahan define karein (function body ke andar, return ke upar)
  const showNavbar = !location.pathname.startsWith("/admin");
  const showLayout = location.pathname !== "/dashboard";

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      
      {/* Navbar show/hide logic */}
      {showNavbar && <Navbar />}

      {/* Main Content */}
      <div className={`${showNavbar ? "max-w-7xl mx-auto px-4" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </div>

      {/* Footer */}
      {showNavbar && <Footer />}
 
    </div>
  );
};

export default App;