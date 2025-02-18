import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import CardLogo from '../assets/CardLogo.png'
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <div>
      <nav className='sticky top-0 flex justify-between items-center bg-[#3D8D7A] text-white shadow-lg'>
        <div className='flex items-center'>
          <img src={CardLogo} alt="card-image" className='size-16 rounded-full ml-10 hidden sm:block' />
          <RxHamburgerMenu className='sm:hidden ml-4'/>
          {/* <span className='ml-2 text-2xl font-semibold'>Credit</span> */}
        </div>
        
        <div className='mr-10'>
          <ul className='flex gap-x-2 lg:gap-x-6'>
            <li>
              <NavLink
                to="/login"
                className="px-3 py-1.5 rounded transition duration-200 hover:bg-[#A3D1C6] hover:text-black"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className="px-3 py-1.5 rounded transition duration-200 hover:bg-[#A3D1C6] hover:text-black"
              >
                SignUp
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;