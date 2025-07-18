import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
const Navbar = (props) => {
 let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-evenly'>
      <Link to='/'>
      <img src={Logo} alt="Logo" width={160} height={32} loading='lazy'/>
      </Link>

      <nav>
        <ul className='flex gap-4'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
        </ul>
      </nav>
      
      {/* Login - Signup - Logout - Dashboard */}
      <div className='flex gap-3 ml-4 mr-3'>
        { !isLoggedIn &&
        <Link to={"/Login"}>
        <button>Login</button>
        </Link>
        }
        { !isLoggedIn &&
        <Link to={"/Signup"}>
        <button onClick={()=>{
          setIsLoggedIn(true);
          toast.success("Signinng up successful");
        }}>Signup</button>
        </Link>
        }
        { isLoggedIn &&
        <Link to={"/"}>
        <button onClick={()=>{
          setIsLoggedIn(false);
          toast.success("Logged out successfully");
        }}>Logout</button>
        </Link>
        }
        { isLoggedIn &&
        <Link to={"/Dashboard"}>
        <button>Dashboard</button>
        </Link>
        }

      </div>
    </div>
  )
}

export default Navbar
