import React from 'react'
import { Outlet } from 'react-router'
import { Built_by } from '@/components/utilities/Built_by'
import {Toaster} from 'react-hot-toast'
import { Test } from '@/Test'
import {NavBar} from '@/components/NavBar'

const Home_Layout = () => {
  return (
    <div>
      {/* <Test /> */}
      <Built_by />
      <NavBar />
      <Toaster/>
      <Outlet/>
    </div>
  )
}

export default Home_Layout