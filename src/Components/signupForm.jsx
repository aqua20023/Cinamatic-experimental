import React from 'react'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'


const SignupForm = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({firstName: '', lastName: '', email: '', password: '', confirmPassword: ''});  
  const [showPassword, setShowPassword] = useState(false);   


  const Navigate = useNavigate()

  function changeHandler(event){
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }
  function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
      else{ 
    setIsLoggedIn(true);
    toast.success("Signed up successfully");
    Navigate("/Dashboard");
    const userData = {
      ...formData
    };
    console.log(userData);
  }
   
  }
  return (
    <div>
      {/* student-instructor-tab */}
      <div>
        <button>
          Student
        </button>
        <button>
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div>
          {/* first - last -name-input */}
          <label>
            <p>First Name*</p>
            <input type="text"
              name='firstName'
              value={formData.firstName}
              onChange={changeHandler}
              placeholder='Enter your first name'
              required
              id='first-name-input'
            />
          </label>
          <label>
            <p>Last Name*</p>
            <input type="text"
              name='lastName'
              value={formData.lastName}
              onChange={changeHandler}
              placeholder='Enter your last name'
              required
              id='last-name-input'
            />
          </label>
        </div>
        <div>
          {/* email-input */}
          <label>
            <p>Email</p>
            <input type="email"
              name='email'
              value={formData.email}
              onChange={changeHandler}
              placeholder='Enter your email'
              required
              id='email-input'
            />
          </label>
        </div>

        <div>
          {/* password-input */}
          <label>
            <p>Password</p>
            <input type={showPassword ? ("text") : ("password")}
              name='password'
              value={formData.password}
              onChange={changeHandler}
              placeholder='Enter your password'
              required
              id='password-input'
            />
             <span onClick={()=> setShowPassword((prev)=> !prev)}>
              {showPassword ? (<AiOutlineEye/>): (<AiOutlineEyeInvisible/>)}
             </span>
          </label>
          <label>
            <p>Confirm Password*</p>
            <input type={showPassword ? ("text") : ("password")}
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder='Re-enter your password'
              required
              id='confirm-password-input'
            />
             <span onClick={()=> setShowPassword((prev)=> !prev)}>
               {showPassword ? (<AiOutlineEye/>): (<AiOutlineEyeInvisible/>)}
             </span>
          </label>
        </div>

        <button type='submit'>Create Account</button>
      </form>
    </div>
  )
}

export default SignupForm
