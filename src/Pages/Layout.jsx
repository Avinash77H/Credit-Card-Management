import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Dashboard'
import Sidebar from '../Components/Sidebar'
import History from './History'
import Card from './Card'
import Login from './Login'
import SignUp from './SignUp'
import Navbar from '../Components/Navbar'
import Container from './Container'
import Home from './Home'

const Layout = () => {

    const List = createBrowserRouter([
        {
            path:'/',
            element:<Navbar/>,
            children:[
                {
                    path:'/',
                    element:<Container/>,
                    children:[
                        {
                            path:'login',
                            element:<Login/>
                        },
                        {
                            path:'signup',
                            element:<SignUp/>
                        },
                        {
                            path:'/home',
                            element:<Home/>
                        },
                    ], 
                }
            ]
        }
    ])

  return (
    <div>
        <RouterProvider router={List}></RouterProvider>
    </div>
  )
}

export default Layout