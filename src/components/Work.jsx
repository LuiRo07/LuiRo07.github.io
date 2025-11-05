import React from "react";

// project screenshots
import resultSummaryComponentImg from "/project-screenshots/results-summary-component.png";
import recipePageImg from "/project-screenshots/recipe-page.png";
import dessertEcommerceImg from "/project-screenshots/desserts-ecommerce.png";
import poveriaStore from "/project-screenshots/poveria-ecommerce.png";
import manageLandingPage from "/project-screenshots/manage-landing-page.png";
import workoutTracker from "/project-screenshots/workout-tracker-app.png";

const Work = () => {
  return (
    <div
      id="work"
      name="work"
      className="bg-primaryBlue w-full md:h-screen text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${resultSummaryComponentImg})` }}
            className="bg-gray-700 hover:bg-blend-soft-light shadow-lg shadow-[#4899ff] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="md:opacity-0 opacity-100 group-hover:md:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center">
                <a
                  href="https://testing-results-component.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/LuiRo07/results-summary-component"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${recipePageImg})` }}
            className="bg-gray-700 hover:bg-blend-soft-light shadow-lg shadow-[#4899ff] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="md:opacity-0 group-hover:md:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center">
                <a
                  href="https://tasty-omelette-recipe-page.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/LuiRo07/recipe-page"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${dessertEcommerceImg})` }}
            className="bg-gray-700 hover:bg-blend-soft-light shadow-lg shadow-[#4899ff] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="md:opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center">
                <a
                  href="https://tasty-desserts-store.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/LuiRo07/product-list-with-cart"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${poveriaStore})` }}
            className="bg-gray-700 hover:bg-blend-soft-light shadow-lg shadow-[#4899ff] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="md:opacity-0 opacity-100 group-hover:md:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center">
                <a href="https://poveria-apparel.netlify.app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/LuiRo07/Poveria-Apparel"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${manageLandingPage})` }}
            className="bg-gray-700 hover:bg-blend-soft-light shadow-lg shadow-[#4899ff] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="md:opacity-0 opacity-100 group-hover:md:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center">
                <a href="https://monday-manage.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/LuiRo07/manage-landing-page"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workoutTracker})` }}
            className="bg-gray-700 hover:bg-blend-soft-light shadow-lg shadow-[#4899ff] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="md:opacity-0 opacity-100 group-hover:md:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center">
                <a href="https://workoutbudd.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/LuiRo07/Workout-Buddy"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
