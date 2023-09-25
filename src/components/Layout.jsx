import React from 'react'
import Topbar from './Topbar'
import Leftbar from './Leftbar'
import Footer from './Footer'

function Layout() {
  return (
    <>
    <div className='Appbar'>
        <Topbar/>
        <Leftbar/>
        <Footer/>
    </div>
    </>
  )
}

export default Layout