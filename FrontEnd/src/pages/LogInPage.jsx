import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import classeLogin from '../styles/login.module.css'
import email_icon from '../loginImages/email_icon.png'
import user_icon from '../loginImages/user_icon.png'
import password_icon from '../loginImages/password_icon.png'

const LogInPage = () => {
const [action, setAction] = useState('Sign Up');

  return (
    <div>
     <Navbar/>
     <div className={classeLogin.mainCtn}>
     <div className={classeLogin.header}>

      <div className={classeLogin.text}>
        {action}
      </div>
      <div className={classeLogin.underline}></div>
      </div>
      <div className={classeLogin.inputs}>
        {action==='Login'?<div></div>:<div className={classeLogin.input}>
          <img src={user_icon} alt='user_icon'/>
          <input type="text" placeholder='Name'/>
        </div>}
      
        <div className={classeLogin.input}>
          <img src={email_icon} alt='email_icon'/>
          <input type="email" placeholder='Email'/>
        </div>
        <div className={classeLogin.input}>
          <img src={password_icon} alt='password_icon'/>
          <input type="password" placeholder='Password'/>
        </div>
      </div>
      {action==='Sign Up'?<div></div>: <div className={classeLogin.forgotPassword}>Lost Password? <span>Click Here!</span></div>
}
           <div className={classeLogin.submitCtn}>
        <div className={action==='Login'?classeLogin.submitGray:classeLogin.submit} onClick={()=>{setAction('Sign Up')}}>
          Sign Up
        </div>
        <div className={action==='Sign Up'?classeLogin.submitGray:classeLogin.submit} onClick={()=>{setAction('Login')}}>
          Login
        </div>
      </div>
     </div>
    </div>
  );
};

export default LogInPage;