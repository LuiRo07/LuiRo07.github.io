import React, { useState } from 'react';

function HamburgerMenu({ clicked=false }) {

    // Creates X for close menu if menu has been clicked
    if (clicked) {
        return (
            <span className="block hamburger-box *:my-[5px]">
                <span className="block w-[25px] h-[3px] bg-neutralWhite origin-center translate-y-2 rotate-45" />
                <span className="block w-[25px] h-[3px] bg-neutralWhite opacity-0" />
                <span className="block w-[25px] h-[3px] bg-neutralWhite origin-center -translate-y-2 -rotate-45" />
            </span>
        )
    }

    return (
        <span className="block hamburger-box *:my-[5px] z-30">
            <span className="block w-[25px] h-[3px] bg-neutralWhite" />
            <span className="block w-[25px] h-[3px] bg-neutralWhite" />
            <span className="block w-[25px] h-[3px] bg-neutralWhite" />
        </span>
    )
}

export default HamburgerMenu;
