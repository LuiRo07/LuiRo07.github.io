import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import Menu from './Menu';

function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  return (
    <>
      <nav className="py-5 bg-primaryBlue ">
        <div className="flex justify-around items-center">
          <a href="#" className="text-lg text-neutralWhite font-bold">
            Lorem Ipsum
          </a>
          {/* Mobile Menu */}
          <div className="md:hidden" onClick={handleToggle}>
            <HamburgerMenu clicked={isOpen}/>
          </div>
        </div>
      </nav>
      {isOpen? <Menu /> : <div></div>}
    </>
  );
}

export default MobileNavBar;