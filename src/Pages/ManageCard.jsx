import React from 'react'
import { Outlet } from 'react-router-dom'

const ManageCard = () => {
  return (
    <div className='flex justify-center w-full items-center'>
        <Outlet/>
    </div>
  )
}

export default ManageCard