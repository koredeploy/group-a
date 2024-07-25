import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarInternal from '../components/sidebarInternal/SidebarInternal'
import Header from '../components/header/Header'
import Dashboard from '../components/Dashboard/Dashboard'
import Cart from '../components/Cart/Cart'

const LayoutInternal = () => {
  return (
    <div className='flex flex-row bg-[#EDF5FA] h-full w-full'>
        <SidebarInternal/>
        <div className='bg-[#EDF5FA] w-full'>
            <Header />
            <div>{<Outlet/>}</div>
        </div>
    </div>
  )
}

export default LayoutInternal
