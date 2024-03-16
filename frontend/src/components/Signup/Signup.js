import React from 'react'
import '../Signup/Signup.css'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div class="grid">
    
    <form  class="form login">
      <div class="form__field">
       <h1>Sign Up</h1>
     </div>
     <div class="form__field">
        <label for="login__username"><span class="hidden">Username</span></label>
        <input id="login__username" type="text" name="username" class="form__input" placeholder="Username" required></input>
     </div>

     <div class="form__field">
        <label for="login__password"><span class="hidden">Password</span></label>
        <input id="login__password" type="password" name="password" class="form__input" placeholder="Password" required/>
     </div>

     <div class="form__field">
        <input type="submit" value="Sign Up"/>
     </div>

     </form>

     <p class="text--center">Already a member? <Link to="/login">Sign Up</Link> </p>

  </div>
  )
}

export default Signup