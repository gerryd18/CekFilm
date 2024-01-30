import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layouts