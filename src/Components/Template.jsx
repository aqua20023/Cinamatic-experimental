import React from 'react'
import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
const Template = ({title , desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>
        {formtype === "signup" ?
        (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
        (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
        <div>
            <div></div>
            <div>OR</div>
            <div></div>
        </div>

        <button>
            <p>Sign in with Google</p>
        </button> 
      </div>

      <div>
        <img src={frameImage}
         alt="Pattern"
         width={558}
         height={584}
         loading='lazy'/>
        <img src={image}
         alt="Pattern"
         width={558}
         height={584}
         loading='lazy'/>
      </div>
    </div>
  )
}

export default Template
