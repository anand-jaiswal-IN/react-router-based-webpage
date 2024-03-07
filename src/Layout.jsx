import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header, Footer, Home} from  "./Components"
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
