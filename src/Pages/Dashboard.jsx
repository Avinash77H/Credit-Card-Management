import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className=''>
      <Outlet/>
    </div>
  )
}

export default Dashboard