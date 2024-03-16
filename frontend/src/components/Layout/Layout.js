import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import image from '/home/gifin/user_mgmt-innobytes/frontend/src/Assets/Images/hr.jpg'

function Layout(props) {
  return (
    <div className='layout' style={{backgroundImage:{image}}} >
    
    <Header/>
    <main>{props.children}</main>
    <Footer/>
    </div>

  )
}

export default Layout