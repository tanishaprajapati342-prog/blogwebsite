import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you shortly. ✨");
  };

  return (
    // FIX: Removed font-serif to match the rest of your app's typography
    <div className="min-h-screen bg-[#FDFBF7] py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Matched Header Section */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs tracking-[0.2em] text-[#C5A880] uppercase font-semibold block mb-2">
          Let’s Connect
        </span>
        {/* FIX: Using clean standard font to match Navbar */}
        <h1 className="text-3xl md:text-4xl text-[#3A332F] font-bold tracking-wide">
          Write To Us
        </h1>
        <div className="w-16 h-0.5 bg-[#C5A880] mx-auto my-4"></div>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Whether you want to feature your beautiful wedding story, discuss vendor collaborations, or just say hello, we’d love to hear from you.
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-[#EFEBE4] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Side: Clean Form */}
          <form onSubmit={onSubmitHandler} className="p-8 sm:p-12 md:col-span-7 space-y-6">
            <h3 className="text-xl text-[#3A332F] font-semibold tracking-wide mb-2">
              Send a Message
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Tanisha"
                  className="w-full bg-[#FAF8F5] px-4 py-3 border border-[#E6E1DA] rounded-xl focus:border-[#C5A880] focus:bg-white outline-none transition duration-300 text-sm text-gray-800"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="name@example.com"
                  className="w-full bg-[#FAF8F5] px-4 py-3 border border-[#E6E1DA] rounded-xl focus:border-[#C5A880] focus:bg-white outline-none transition duration-300 text-sm text-gray-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
                Subject / Query Type
              </label>
              <select className="w-full bg-[#FAF8F5] px-4 py-3 border border-[#E6E1DA] rounded-xl focus:border-[#C5A880] focus:bg-white outline-none transition duration-300 text-sm text-gray-700 cursor-pointer">
                <option>Share Our Wedding Story</option>
                <option>Vendor / Brand Collaboration</option>
                <option>Advertising & PR</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
                Tell Us Your Story / Message
              </label>
              <textarea 
                rows="5"
                required
                placeholder="Share your wedding dates, themes, or details..."
                className="w-full bg-[#FAF8F5] px-4 py-3 border border-[#E6E1DA] rounded-xl focus:border-[#C5A880] focus:bg-white outline-none transition duration-300 text-sm text-gray-800 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#3A332F] hover:bg-[#C5A880] text-white tracking-widest uppercase text-xs font-bold py-4 px-6 rounded-xl transition duration-300 shadow-sm cursor-pointer"
            >
              Submit Inquiry
            </button>
          </form>

          {/* Right Side: Info & Image */}
          <div className="bg-[#FAF8F5] p-8 sm:p-12 md:col-span-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#EFEBE4]">
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl text-[#3A332F] font-semibold tracking-wide mb-3">
                  The Wedding Desk
                </h3>
                {/* FIX: Fixed typo "palaccs" to "palaces" */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  We are based in the beautiful land of royalty and palaces. Let's create magic together.
                </p>
              </div>

              {/* Minimal Contact Info */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-[#C5A880] font-bold">✦</span>
                  <div>
                    <p className="font-semibold text-[#3A332F]">Location</p>
                    <p className="text-xs text-gray-600">Kota, Rajasthan, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C5A880] font-bold">✦</span>
                  <div>
                    <p className="font-semibold text-[#3A332F]">Editorial Email</p>
                    <p className="text-xs text-gray-600">stories@metablog.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aesthetic Framed Image */}
            <div className="mt-8 md:mt-0 p-2 bg-white border border-[#E6E1DA] rounded-2xl shadow-xs">
              <div className="rounded-xl overflow-hidden h-48 md:h-52 relative group">
                <img 
                  src={assets.contact_us || assets.contact} 
                  alt="Wedding Inspiration" 
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 transition duration-300 group-hover:bg-transparent"></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;