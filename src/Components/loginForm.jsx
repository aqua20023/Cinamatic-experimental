import React from 'react'
import { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { $up } from '../Styles/StyledComponents'    

const loginForm = () => {
  const {formData, setFormData} = useState({email:'', password:''});
  
    const {showPassword, setShowPassword} = useState(false);
  
    function changeHandler(event) {
      // const {name, value} = event.target;
      setFormData(prev => (
        {
          ...prev,
          //  [name]: value
          [event.target.name]: event.target.value
        }));
    }
  return (
      <form action="">
        <label>
          <p>
            Email Address <$up>*</$up>
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
            Password <$up>*</$up>
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
        <button>
          Login
        </button>
      </form>
    )
}

export default loginForm
