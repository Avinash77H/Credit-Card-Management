import React from 'react'
import { NavLink } from 'react-router-dom'
import CardLogo from '../assets/CardLogo.png'

const Sidebar = () => {
  return (
    <div className='flex justify-between'>
      <div className='bg-blue-300 w-52 h-dvw'>
        <div>
          <img src={CardLogo} className='size-20 m-8 mx-14' alt="Logo" />
        </div>
        <div className='mx-5'>
          <ul>
            <li className='my-3'><NavLink to='/'>Home</NavLink></li>
            <li className='my-3'><NavLink to='/dashboard'>Dashboard</NavLink></li>
            <li className='my-3'><NavLink to='card'>Card</NavLink></li>
            <li className='my-3'><NavLink to='history'>History</NavLink></li>
          </ul>
        </div>
      </div>
      <div className='m-8'>
        <ul className='flex'>
          <li ><NavLink to='/login' className='mx-4 bg-blue-300 p-2 rounded-sm'>Login</NavLink></li>
          <li ><NavLink to='/signup' className='mx- bg-blue-300 p-2 rounded-sm'>Sign Up</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar