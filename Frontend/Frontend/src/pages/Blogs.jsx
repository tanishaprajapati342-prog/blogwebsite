import BlogCard from "../component/BlogCard";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Blogs = () => {
  const { blogData,loading } = useContext(StoreContext);

  return (
    <div>
      <h1 className="text-3xl text-center font-bold my-6">All Blogs</h1>
      <p className="text-base px-3 sm:text-lg leading-6 max-w-2xl mx-auto text-gray-600">
        Discover our latest wedding stories, decor inspiration, and expert planning guides.
      </p>

      <div className="grid my-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-3 sm:px-4">
        {/* Agar data loading state mein hai, to 'blogData' undefined ho sakta hai */}
        {blogData && blogData.length > 0 ? (
          blogData.map((blog) => (
            <BlogCard key={blog._id || blog.id} blog={blog} />
          ))
        ) : (
          // Yahan check karein agar data load ho raha hai
          <p className="text-center w-full">No blogs found or loading...</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;