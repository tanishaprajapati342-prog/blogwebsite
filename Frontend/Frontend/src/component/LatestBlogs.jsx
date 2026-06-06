import { useContext } from "react";
import BlogCard from "./BlogCard.jsx";
import { StoreContext } from "../context/StoreContext";

const LatestBlogs = () => {
  const { blogData ,loading} = useContext(StoreContext);

  // Data ko safe banane ke liye ek naya variable banayein
  const displayBlogs = blogData ? [...blogData].reverse().slice(0, 6) : [];

  if (displayBlogs.length === 0) {
    return <div className="py-12 text-center">Loading stories...</div>;
  }

  return (
    <div className="py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#3A332F] mb-8 text-center px-4">
        Latest <span className="text-[#C5A880]">Stories</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {displayBlogs.map((blog) => (
          <BlogCard 
            key={blog._id || blog.id} 
            blog={blog} 
          />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;