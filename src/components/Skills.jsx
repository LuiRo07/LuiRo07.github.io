import HTML from "../assets/icons/html.png";
import CSS from "../assets/icons/css.png";
import JavaScript from "../assets/icons/javascript.png";
import Node from "../assets/icons/node.png";
import ReactIcon from "../assets/icons/react.png";
import Github from "../assets/icons/github.png";
import Git from "../assets/icons/git.png";
import TailWindCSS from "../assets/icons/tailwind-css.png";
import MongoDB from "../assets/icons/MongoDB.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-primaryBlue text-gray-300 w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        {/* container for all icons */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#4899ff] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#4899ff] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#4899ff] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#4899ff] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-[#4899ff] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactIcon} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#4899ff] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#4899ff] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Git} alt="Git icon" />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-md shadow-[#4899ff] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={TailWindCSS}
              alt="tailwind css icon"
            />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[#4899ff] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={MongoDB}
              alt="MongoDB icon"
            />
            <p className="my-4">Mongo DB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
