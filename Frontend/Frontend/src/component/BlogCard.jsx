import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  // Safe destructuring
  const {
    _id, id,
    title,
    category,
    image, imageUrl,
    author = {},
    createdAt,
  } = blog || {};

  // Image URL logic: Agar imageUrl hai (static) to wahi lo, warna localhost path lo
  const displayImage = imageUrl || (image ? `http://localhost:5000/images/${image}` : "https://via.placeholder.com/400");
  const blogId = _id || id;

  return (
    <div className="bg-white border border-[#EFEBE4] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group">
      
      <Link to={`/blog/${blogId}`} className="block overflow-hidden bg-gray-100 aspect-video relative">
        <img
          src={displayImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103 cursor-pointer"
        />
      </Link>

      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[10px] uppercase tracking-widest font-bold text-[#C5A880] mb-2 block">
          {category || "Wedding Story"}
        </span>

        <Link to={`/blog/${blogId}`}>
          <h3 className="text-lg font-bold text-[#3A332F] hover:text-[#C5A880] transition duration-200 line-clamp-2 leading-snug cursor-pointer mb-4">
            {title}
          </h3>
        </Link>

        <div className="mt-auto pt-4 border-t border-[#FAF8F5] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <img
              className="w-7 h-7 rounded-full object-cover border border-[#E6E1DA]"
              // via.placeholder ki jagah ye use karein
src={author.image ? `http://localhost:5000/images/${author.image}` : "https://placehold.co/150"}
            />
            <p className="text-xs font-semibold text-gray-600 truncate max-w-[100px]">
              {author.name || "Admin"}
            </p>
          </div>

          <p className="text-[11px] text-gray-400 font-medium">
            {createdAt ? new Date(createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }) : "Recent"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;