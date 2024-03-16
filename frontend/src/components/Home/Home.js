import React, { useState,useEffect } from 'react'
import '../Home/Home.css'
import { Link } from 'react-router-dom'

function Home() {

  var userid=localStorage.getItem("userid")

  /*const user=()=>{
    if(userid){

    }
     console.log(userid);
  }
 

  useEffect(()=>{
    user()
  })*/
  
  return (
    
    <div>
   {
    userid == null ?

    <div className='home'>

      <h1><span className='inno' >Inno</span> <span className='bytes'>Bytes </span></h1>
      <h2> User Management</h2>
    <div className='logbuttons'>
          <Link to={"/login"}>
          <button type="button"  class="btn btn-primary me-2">Login</button>
          </Link>
          <Link to={"/signup"}>
          <button type="button" class="btn btn-warning">Sign-up</button>
          </Link>
          
    </div>
    </div>


    
    :
    <h1>UserHome</h1>
   }
  
    </div>
  )
}

export default Home