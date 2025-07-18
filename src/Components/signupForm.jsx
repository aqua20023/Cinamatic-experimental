import React from 'react'
import { useState } from 'react'

const signupForm = () => {
  const {formData, setFormData} = useState({email:'', password:''});

  const {password, setPassword} = useState(false);

  function changeHandler(event) {
    // const {name, value} = event.target;
    setFormData(prev => (
      {
        ...prev,
        //  [name]: value
        [event.target.name]: event.target.value
      }));
  }
urn (
    <form action="">
      <label>
        <p>
          Email Address <$up>*</$up>
        </p>
        <input type="email"
         placeholder='Enter email id'
         required
         onChange={changeHandler} 
         value={formData.email}/>

      </label>

      <label>
        <p>
          Password <$up>*</$up>
        </p>
        <input type={password ? ("text") : ("password")}
         placeholder='Enter password'
         required
         onChange={changeHandler} 
         value={formData.password}/>

      </label>
    </form>
  )
}

export default signupForm
