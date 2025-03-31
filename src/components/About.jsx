import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-primaryBlue text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>I'm Luis, feel free to take a look around.</p>
          </div>
          <div>
            <p className="text-lg ">
              In my spare time I like to play guitar, listen to music,
              spend time with friends, and go hiking on different trails.
              As a software developer, I am passionate about building User Interfaces and
              software that improves the lives of those around me. I specialize
              in building aesthetically pleasing user interfaces that provide 
              a pleasant user experience. 
              <br></br>
              <span className="text-pink-500">P.S. I built this website using
              modern technologies</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
