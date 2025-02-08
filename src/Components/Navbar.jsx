import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import CardLogo from '../assets/CardLogo.png'


const Navbar = () => {
  return (
    <div className='border-2 border-black'>
      <div className='bg-blue-600 h-20 p-6 flex justify-between'>
      <div>
            <img src={CardLogo} className='size-16 -mt-3.5' alt="Logo" />
          </div>
        <ul className='flex'>
          <li ><NavLink to='/login' className='mx-4 bg-blue-300 p-2 rounded-sm'>Login</NavLink></li>
          <li ><NavLink to='/signup' className='mx- bg-blue-300 p-2 rounded-sm'>Sign Up</NavLink></li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar