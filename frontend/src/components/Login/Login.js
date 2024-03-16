import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {


  const handleLogin=async()=>{

    localStorage.setItem("userid",5000)
  }

  return (
    <div class="grid">

    
    <form  class="form login" onSubmit={handleLogin}>
      <div class="form__field">
         <h1>LogIn</h1>
      </div>
      <div class="form__field">
        <label for="login__username"><span class="hidden"></span></label>
        <input id="login__username" type="text" name="username" class="form__input" placeholder="Username" required/>
      </div>

      <div class="form__field">
        <label for="login__password"><span ></span></label>
        <input id="login__password" type="password" name="password" class="form__input" placeholder="Password" required/>
      </div>

      <div class="form__field">
        <input type="submit" value="Log In"/>
      </div>

    </form>

    <p class="text--center">Not a member? <Link to="/signup">Sign Up</Link> </p>

  </div>
  )
}

export default Login