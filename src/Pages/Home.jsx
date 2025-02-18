import React from 'react'
// import Sildebar from '../Components/Sildebar'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <pre>
        sm : 0 to 640 <br />
        md: 640 to 768 <br />
        lg: 768 to 1023 <br />
        xl: 1024 to 1280 <br />
        2xl: 1280 to 1440
      </pre>
    </div>
  )
}

export default Home