import { useState, useContext, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { blogData } = useContext(StoreContext);
  const [loading, setLoading] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: null
  });

  // Blog Create Function
  const handleAddBlog = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("description", formData.description);
    data.append("authorName","Admin")
    data.append("image", formData.image);

    try {
      const response = await fetch("http://localhost:5000/api/blog/create", {
        method: "POST",
        body: data,
      });
      if (response.ok) {
        alert("Blog Added Successfully!");
        window.location.reload(); // Page refresh to update list
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Blog Delete Function
const deleteBlog = async (id) => {
  // 1. User se confirm karein
  const confirmed = window.confirm("Kya aap sach mein is blog ko delete karna chahte hain?");
  if (!confirmed) return;

  try {
    const response = await fetch(`http://localhost:5000/api/blog/delete/${id}`, { 
      method: "DELETE" 
    });
    
    if (response.ok) {
      alert("Blog deleted successfully!");
      // 2. UI ko refresh karne ka tareeka:
      // Ya to page reload karein:
      window.location.reload(); 
      // YA phir state update karein (jo zyada fast hota hai):
      // setBlogData(blogData.filter(b => b._id !== id));
    }
  } catch (error) {
    console.error("Delete karne mein error aaya:", error);
  }
};

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Link to="/" className="text-gray-500 hover:text-black">← Back to Website</Link>
      </div>

      {/* Add Blog Form */}
      <div className="bg-white p-6 rounded-xl shadow-sm border mb-10">
        <h2 className="text-xl font-semibold mb-4">Add New Blog</h2>
        <form onSubmit={handleAddBlog} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Title" className="p-2 border rounded" required onChange={(e) => setFormData({...formData, title: e.target.value})} />
          <input type="text" placeholder="Category" className="p-2 border rounded" required onChange={(e) => setFormData({...formData, category: e.target.value})} />
          <textarea placeholder="Description" className="p-2 border rounded col-span-full" required onChange={(e) => setFormData({...formData, description: e.target.value})} />
            <input 
  type="text" 
  placeholder="Author Name" 
  className="p-2 border rounded" 
  required 
  onChange={(e) => setFormData({...formData, authorName: e.target.value})} 
/>
          <input type="file" className="p-2 border rounded" required onChange={(e) => setFormData({...formData, image: e.target.files[0]})} />
          <button type="submit" className="bg-black text-white p-2 rounded" disabled={loading}>
            {loading ? "Uploading..." : "Publish Blog"}
          </button>
        </form>
      </div>

      {/* Blogs Table */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Manage Blogs</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogData.map((blog) => (
              <tr key={blog._id} className="border-b">
                <td className="p-3">{blog.title}</td>
                <td className="p-3">{blog.category}</td>
                <td className="p-3 text-right">
                  <button onClick={() => deleteBlog(blog._id)} className="text-red-500 font-bold">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;