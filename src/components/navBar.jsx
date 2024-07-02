import React, { useState } from 'react';
import CheckBox from './UI/Checkbox';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-around items-center py-5 bg-primaryBlue ">
      <div>
        <a href="#" className="text-lg text-neutralWhite font-bold">
          Luis Rosas
        </a>
      </div>
      <div className="lg:hidden">
        <CheckBox />
        <button
          className={`hamburger ${isOpen? 'is-active' : ''}`}
          onClick={handleToggle}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <ul className="hidden lg:flex justify-between items-center text-neutralWhite">
        <li>
          <a href="#" className="text-lg">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-lg">
            My Story
          </a>
        </li>
        <li>
          <a href="#" className="text-lg">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#" className="text-lg">
            Contact
          </a>
        </li>
      </ul>
      {isOpen && (
        <div className="menu absolute top-0 right-0 bg-white shadow-md p-4 lg:hidden">
          <ul>
            <li>
              <a href="#" className="text-lg">
                Menu item 1
              </a>
            </li>
            <li>
              <a href="#" className="text-lg">
                Menu item 2
              </a>
            </li>
            <li>
              <a href="#" className="text-lg">
                Menu item 3
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;