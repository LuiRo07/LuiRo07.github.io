import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  return (
    <>
      <ul className="md:hidden xs:inline-flex justify-around basis-full">
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/luis46rosas/">
            <FaLinkedin size={25} />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/LuiRo07">
            <FaGithub size={25} />
          </a>
        </li>
        <li>
          <a href="mailto: luis_rm142@yahoo.com">
            <HiOutlineMail size={25} />
          </a>
        </li>
        <li className="">
          <a
            href="https://docs.google.com/document/d/1g6NyBJrGO_yGdPdpkEsrHVAwRMWWdTjK-FnZyy5jLyY/edit?usp=sharing"
            target="_blank"
          >
            <BsFillPersonLinesFill size={25} />
          </a>
        </li>
      </ul>
    </>
  );
}

export default SocialLinks;
