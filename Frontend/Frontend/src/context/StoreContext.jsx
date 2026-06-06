import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { DEFAULT_POSTS } from "../assets/assets";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [blogData, setBlogData] = useState(DEFAULT_POSTS);
  const [loading, setLoading] = useState(true); 

  const API_URL = "http://localhost:5000/api/blog";

  // Data Fetching Logic
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/all`);
      setBlogData(res.data.blogs || res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);


  const contextValue = { 
    blogData, 
    setBlogData, 
    loading, 
    fetchBlogs
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;