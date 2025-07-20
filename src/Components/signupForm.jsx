import React from 'react'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
const signupForm = () => {
  const {FormData, setFormData} = useState({firstName: '',lastName: '', email: '', password: '', confirmPassword: ''});  
  const [showPassword, setShowPassword] = useState(false);  

  function changeHandler(event){
    const [name,value] = event .target;
    setFormData((prev) =>{
      return {
        ...prev,
        [name]: value
      }
    })

  }
  return (
    <div>
      {/* student-instructor-tab */}
      <div>
        <button>
          Stuent
        </button>
        <button>
          Instructor
        </button>
      </div>
      
      <form>

      <div>

        {/* first - last -name-input */}
        <label>
          <p>First Name<$up>*</$up></p>
          <input type="text"
          name='first-name'
          value ={FormData.firstName}
          onChange={changeHandler}
          placeholder='Enter your first name'
          required
          id='first-name-input'
          />
        </label>
        <label>
          <p>Last Name<$up>*</$up></p>
          <input type="text"
          name='Last-name'
          value ={FormData.lastName}
          onChange={changeHandler}
          placeholder='Enter your first name'
          required
          id='first-name-input'
          />
         
        </label>
       </div>
        <div>
          {/* email-input */}
          <label>
            <p>Email<$up>*</$up></p>
            <input type="email"
            name='email'
            value ={FormData.email}
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
            <p>Password<$up>*</$up></p>
            <input type={showPassword ? ("text") : ("password")}
            name='password'
            value ={FormData.password}
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
            <p>Confirm Password<$up>*</$up></p>
            <input type={showPassword ? ("text") : ("password")}
            name='confirmPassword'
            value ={FormData.confirmPassword}
            onChange={changeHandler}
            placeholder='Re-enter your password'
            required
            id='password-input'
            />
             <span onClick={()=> setShowPassword((prev)=> !prev)}>
               {showPassword ? (<AiOutlineEye/>): (<AiOutlineEyeInvisible/>)}
             </span>
          </label>
        </div>

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default signupForm
