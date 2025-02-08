import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='border border-black'>
        <div className='m-8'>
          <ul className='flex'>
            <li ><NavLink to='/login' className='mx-4 bg-blue-300 p-2 rounded-sm'>Login</NavLink></li>
            <li ><NavLink to='/signup' className='mx- bg-blue-300 p-2 rounded-sm'>Sign Up</NavLink></li>
          </ul>
        </div>
            <Outlet/>
    </div>
  )
}

export default Navbar