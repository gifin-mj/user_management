import React from 'react'
import { Route,BrowserRouter, Router,useHistory, Link } from 'react-router-dom';


function Header() {

  let userLogged=true
  
 
  return (
    <header class="p-3 bg-black">
   
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
       

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to={"/"} >
          <button className="btn btn-warning">Home</button>
          </Link></li>
          {
            userLogged &&
            <>
            <li><a  class="nav-link px-2 text-white">Features</a></li>
            <li><a  class="nav-link px-2 text-white">Pricing</a></li>
            <li><a  class="nav-link px-2 text-white">FAQs</a></li>
            <li><a  class="nav-link px-2 text-white">About</a></li>
            </>
          
          }
          
        </ul>

      

      </div>
   
  </header>
  )
}

export default Header