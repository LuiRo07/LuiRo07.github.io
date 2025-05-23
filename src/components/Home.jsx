import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-primaryBlue w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-xl">Hi, I'm</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Luis Rosas
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          A Frontend Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Developer who specializes in building beautiful UIs and
          exceptional digital experiences. From small project ideas to large and scalable
          applications, let me help bring your ideas to life.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
