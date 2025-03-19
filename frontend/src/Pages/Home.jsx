import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div className='flex h-[98vh] md:flex-row gap-4'>
      <div className='flex flex-col justify-between w-1/6 border-1 border-gray-500 rounded-xl p-5  '><Sidebar></Sidebar></div>
      <div className='w-5/6 border-1 border-gray-500 rounded-xl p-5'>
        <Outlet></Outlet>
      </div>

    </div>
  )
}

export default Home