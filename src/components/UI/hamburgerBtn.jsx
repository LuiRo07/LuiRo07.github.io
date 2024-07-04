import React, { useState } from 'react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className={`hamburger ${isOpen ? 'is-active' : ''}`}
        onClick={handleToggle}
      >
        <span className="hamburger-box block *:mb-1">
          <span className="block w-[40px] h-[3px] bg-neutralWhite"></span>
          <span className="block w-[40px] h-[3px] bg-neutralWhite"></span>
          <span className="block w-[40px] h-[3px] bg-neutralWhite"></span>
        </span>
      </button>
      {isOpen && (
        <div className="menu absolute top-0 right-0 bg-white shadow-md p-4">
          <ul>
            <li>Menu item 1</li>
            <li>Menu item 2</li>
            <li>Menu item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;