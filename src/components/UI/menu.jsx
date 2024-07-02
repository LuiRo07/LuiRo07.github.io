import React from 'react';

function Menu() {
    return (
        <ul className="hidden relative w-full text-center top-9 bg-primaryBlue p-5">
            <li className="mb-2"><a href="#">Home</a></li>
            <li className="mb-2"><a href="#">My Story</a></li>
            <li className="mb-2"><a href="#">Portfolio</a></li>
            <li className="mb-2"><a href="#">Contact</a></li>
        </ul>
    )
}

export default Menu;