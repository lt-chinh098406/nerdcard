import React, { useState } from 'react';
import { BsSunFill } from 'react-icons/bs';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">NerdCard</div>
        <BsSunFill size={'24px'} color="#e9c463" className="cursor-pointer" />
      </div>
      <ul className="ml-auto text-16 font-semibold">
        {openMenu ? (
          <MdOutlineClose
            size={'24px'}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <HiOutlineMenu
            onClick={handleMenu}
            size={'24px'}
            className="cursor-pointer"
          />
        )}
        {openMenu && (
          <div className="absolute right-8 bg-white p-8 text-center text-black text-13">
            <li>Feature</li>
            <li>Menu</li>
            <li>Our Store</li>
            <li>Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
}
export default NavBar;
