import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Dashboard'
import Sidebar from '../Components/Sidebar'
import History from './History'
import Card from './Card'

const Layout = () => {

    const List = createBrowserRouter([
        {
            path:'/',
            element:<Sidebar/>,
            children:[
                {
                    path:'/dashboard',
                    element:<Dashboard/>,
                    children:[
                        {
                            path:'card',
                            element:<Card/>
                        },
                        {
                            path:'history',
                            element:<History/>
                        }
                    ]  
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