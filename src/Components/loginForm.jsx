import React from 'react'
import { useState } from 'react'
import {toast} from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// import { $up } from '../Styles/StyledComponents'    

const LoginForm = ({ setIsLoggedIn}) => {
  const [formData, setFormData] = useState({email:'', password:''});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()

  function changeHandler(event) {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
   setIsLoggedIn(true);
   toast.success("Logged in");
   navigate("/Dashboard");
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
          Sign In
        </button>
      </form>
    )
}

export default LoginForm
