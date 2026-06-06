import React from 'react';
import LatestBlogs from '../component/LatestBlogs';

const Home = () => {
  return (
    <div className="w-full">
      
      {/* 1. Hero Section */}
      <div 
       className="relative w-screen -ml-[calc((100vw-100%)/2)] h-[70vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white p-4"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://www.k4fashion.com/wp-content/uploads/2019/07/Powder-pink-and-blush-pink-bridal-and-groom-wedding-dress-combination.jpg')" }}
      >
        {/* Dark overlay for better text readability */}
   
<h1 className="relative z-10 text-3xl md:text-4xl font-bold mb-4 text-center">
  Capturing Life’s Most Precious Chapters
</h1>
<p className="relative z-10 text-lg md:text-xl text-center max-w-2xl">
  From love stories to family bonds, we preserve the moments that matter most.
</p>
      {/* 2. Latest Stories Section */}
      </div>
      <div>
           <LatestBlogs />
      </div>
      
    </div>
  );
};

export default Home;