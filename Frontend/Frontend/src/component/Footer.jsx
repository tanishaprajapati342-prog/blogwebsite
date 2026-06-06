import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#E6E1DA] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Section */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
             <h2 className="text-2xl font-serif font-bold text-[#3A332F]">Meta<span className="text-[#C5A880]">Blog</span></h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Capturing timeless love stories and wedding inspirations for your dream day.
          </p>
        </div>

        {/* Links Columns */}
        {[ 
          { title: "Explore", links: ["Real Weddings", "Bridal Fashion", "Decor"] }, 
          { title: "Planning", links: ["Venue Guide", "Budget", "Vendors"] } 
        ].map((sec) => (
          <div key={sec.title}>
            <h4 className="font-bold text-[#3A332F] mb-4 text-xs uppercase tracking-widest">{sec.title}</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {sec.links.map(l => (
                <li key={l} className="hover:text-[#C5A880] cursor-pointer transition">{l}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Section */}
        <div>
          <h4 className="font-bold text-[#3A332F] mb-4 text-xs uppercase tracking-widest">Stay Inspired</h4>
          <input 
            type="email" 
            placeholder="Email for inspiration" 
            className="bg-transparent border-b border-gray-400 w-full pb-1 text-sm outline-none focus:border-[#C5A880]" 
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-[#E6E1DA] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2026 MetaBlog. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;