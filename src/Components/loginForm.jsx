import React from 'react'
import { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link } from 'react-router-dom'
// import { $up } from '../Styles/StyledComponents'    

const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({email:'', password:''});
  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    // Basic validation
    if (!formData.email || !formData.password) {
      alert('Please fill in all fields.');
      return;
    }
    // Simulate login success
    alert('Login successful!');
    if (setIsLoggedIn) setIsLoggedIn(true);
    // You can add navigation or API call here
  }

  return (
    <form onSubmit={submitHandler}>
        <label>
          <p>
            Email Address 
          </p>
          <input type="email"
           placeholder='Enter email id'
           required
           onChange={changeHandler} 
           value={formData.email}
           name='email'/>
  
        </label>
  
        <label>
          <p>
            Password 
          </p>
          <input type={showPassword ? ("text") : ("password")}
           placeholder='Enter password'
           required
           onChange={changeHandler} 
           value={formData.password}
           name='password'/>

           <span onClick={()=> setShowPassword((prev)=> !prev)}>
            {showPassword ? (<AiOutlineEye/>): (<AiOutlineEyeInvisible/>)}
           </span>

           <Link to ="#">
           <p>Forgot Password </p>
           </Link>

        </label>
        <button type="submit">
          Login
        </button>
      </form>
    )
}

export default LoginForm
