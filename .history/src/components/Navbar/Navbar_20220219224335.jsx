import React from 'react';
import { BsSunFill } from 'react-icons/bs';
import { HiOutlineMenu } from 'react-icons/hi';

function NavBar() {
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">NerdCard</div>
        <BsSunFill size={'24px'} color="#i9c463" className="cursor-pointer" />
      </div>
      <ul className="ml-auto text-16 font-semibold">
        <HiOutlineMenu size={'24px'} className="cursor-pointer" />
      </ul>
    </nav>
  );
}
export default NavBar;
