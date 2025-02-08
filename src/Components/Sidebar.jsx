import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdHome , MdDashboardCustomize } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='border-2 border-black w-fit'>
      <div className='flex justify-between'>
        <div className='bg-blue-300 w-52 h-dvw'>
          <div className='mx-5'>
            <ul>
              <li className='my-3'><NavLink to='/home' className='flex text-xl'><MdHome className='size-7 mt-0.5 mx-2'/>Home</NavLink></li>
              <li><NavLink to='/dashboard' className='flex text-xl'><MdDashboardCustomize className='size-6 mt-0.5 mx-2'/>Dashboard</NavLink></li>
              {/* <li className='my-3 relative'><NavLink to='/dashboard'>Dashboard</NavLink>
              <div className='absolute hidden'>
                <li className='my-3 block'><NavLink to='card'>Card</NavLink></li>
                <li className='my-3 block'><NavLink to='history'>History</NavLink></li>
              </div>
            </li> */}
              {/* <li className='relative group'>
              <NavLink to="/dashboard" className='flex'>
                Dashboard
              </NavLink>
              <div className='absolute hidden group-hover:block z-10 p-2 pt-7'>
                <NavLink to="/card" className='block bg-white p-2'>
                  Card
                </NavLink>
                <NavLink to="/history" className='block bg-white p-2'>
                  History
                </NavLink>
              </div>
            </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar