import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="text-center text-4xl uppercase font-extrabold text-[#3A332F] mb-10">
        About Us
      </h1>

      {/* Main Content Layout */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={assets.contact}
            alt="About Us"
            className="w-full h-80 object-cover rounded-3xl shadow-lg transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-[#3A332F] mb-4">
            Sharing knowledge and inspiring creativity.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to{" "}
            <span className="text-[#C5A880] font-semibold">MyBlog</span>, a
            curated space where timeless love stories meet modern inspiration.
            We believe that a wedding is more than just a celebration—it is the
            beginning of a beautiful, lifelong story. Our mission is to guide
            you through every step of your journey—from discovering the latest
            bridal fashion trends and dreamy decor ideas to finding expert
            advice that makes planning effortless. Whether you are a bride-to-be
            seeking the perfect aesthetic, a groom looking for inspiration, or a
            wedding enthusiast passionate about beautiful details, we are here
            to walk this path with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
