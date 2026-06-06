import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";


const SingleBlog = () => {
  // ... (logic)
  const { id } = useParams();
  const { blogData } = useContext(StoreContext);
  
  // 1. Pehle check karein ki kya blogData load hua hai
  if (!blogData || blogData.length === 0) {
    return <div className="text-center py-20">Loading...</div>;
  }

  // 2. Data milne ke baad find karein
  const blog = blogData.find((b) => b._id === id);
  const BASE_URL = "http://localhost:5000";

  // 3. Agar ID match nahi hui toh error handle karein
  if (!blog) {
    return <div className="text-center py-20 text-red-500">Blog not found!</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* 1. Header Section - Clean & Centered */}
      <div className="text-center mb-12 space-y-4">
        <span className="text-[#4B6BFB] font-semibold tracking-[0.2em] uppercase text-xs border border-[#4B6BFB]/20 px-3 py-1 rounded-md">
          {blog.category}
        </span>
        <h1 className="text-5xl font-extrabold text-slate-900 leading-tight">
          {blog.title}
        </h1>
        
        {/* Author Section - Minimalist */}
        <div className="flex items-center justify-center gap-3 pt-6">
          <img
            className="w-12 h-12 rounded-full shadow-md"
            src={`${BASE_URL}/images/${blog.author?.image}`}
            alt={blog.author?.name}
          />
          <div className="text-left">
            <p className="font-bold text-slate-900">{blog.author?.name}</p>
            <p className="text-slate-500 text-sm">
              {new Date(blog.createdAt).toLocaleDateString("en-US", { month: "long", day: "2-digit", year: "numeric" })}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Featured Image - Full Width with Large Radius */}
      <div className="mb-16">
        <img
          className="w-full h-125 object-cover rounded-4xl shadow-2xl shadow-slate-200"
          src={`${BASE_URL}/images/${blog.image}`}
          alt={blog.title}
        />
      </div>

      {/* 3. Article Body - Great Readability */}
      <article className="prose prose-slate prose-lg max-w-none text-slate-700 leading-8">
        {blog.description}
      </article>
    </div>
  );
};
export default SingleBlog;