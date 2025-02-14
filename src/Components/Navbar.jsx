import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import CardLogo from '../assets/CardLogo.png'

function Navbar() {
  return (
    <div>
      <nav className='flex justify-between items-center bg-[#3D8D7A] text-white shadow-lg h-20'>
        <div className='flex items-center'>
          <img src={CardLogo} alt="card-image" className='size-28 rounded-full ml-10' />
          {/* <span className='ml-2 text-2xl font-semibold'>Credit</span> */}
        </div>
        <div></div>
        <div className='mr-10'>
          <ul className='flex space-x-6'>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `px-4 py-2 rounded transition duration-200 ${isActive ? 'bg-[#A3D1C6] text-black' : 'hover:bg-[#A3D1C6] hover:text-black'
                  }`
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `px-4 py-2 rounded transition duration-200 ${isActive ? 'bg-[#A3D1C6] text-black' : 'hover:bg-[#A3D1C6] hover:text-black'
                  }`
                }
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