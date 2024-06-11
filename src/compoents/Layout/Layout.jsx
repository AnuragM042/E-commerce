import React, { Children } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <div className='content pt-[80px]'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout