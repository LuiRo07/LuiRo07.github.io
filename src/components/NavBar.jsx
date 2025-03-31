import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import SocialLinks from "./SocialLinks";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const hamburgerStyling =
    "absolute top-0 left-0 w-full h-screen bg-primaryBlue flex flex-col justify-center items-center";

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primaryBlue text-gray-300">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="Name logo" className="w-[50px] cursor-pointer" />
        </Link>
      </div>

      <SocialLinks />

      {/* Menu */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li className="hover:text-pink-600">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-pink-600">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="hover:text-pink-600">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="hover:text-pink-600">
            <Link to="work" smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li className="hover:text-pink-600">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul className={!nav ? "hidden" : hamburgerStyling}>
        <li className="py-6 text-4xl hover:text-pink-600">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*Social Icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://www.linkedin.com/in/luis46rosas/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#33333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://github.com/LuiRo07"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto: luis_rm142@yahoo.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565F69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://docs.google.com/document/d/1XBn-s1KvSHCJRwt1C1C_W5IRQmbzSA6IWtkRjROjMqw/edit?usp=sharing"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
