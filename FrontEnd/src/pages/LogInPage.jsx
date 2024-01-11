import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import classeLogin from '../styles/login.module.css'
import email_icon from '../loginImages/email_icon.png'
import user_icon from '../loginImages/user_icon.png'
import password_icon from '../loginImages/password_icon.png'


import { useNavigate} from 'react-router-dom'

const LogInPage = () => {
const [action, setAction] = useState('Sign Up');
const navigate = useNavigate()




const initialValues = {username:'', email: '', password:''};
const [formValues , setFormValues] = useState(initialValues);
const [formErrors , setFormErrors] = useState({});
const [isSubmit , setIsSubmit] = useState(false);



const handleChange= (e) => {

  const{name, value} = e.target;
  setFormValues({...formValues, [name]:value});
 
}

const handleSubmit= (e) => {
e.preventDefault();
setFormErrors(validate(formValues));
setIsSubmit(true)
}

useEffect(() => {
  console.log(isSubmit)
  if(Object.keys(formErrors).length === 0  && isSubmit){
    navigate('/profile')
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        navigate('/profile')
        
      }
      document.addEventListener("keydown", listener);
    };return () => {
      document.removeEventListener("keydown", listener);
    };
    
  }else{
    setFormErrors(validate(formValues));
  }
  

}, [formErrors]);

const validate =(values) => {
const errors ={}
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
if(!values.username && action==='Sign Up'){
  errors.username = 'Username is required!';
}
if(!values.email){
  errors.email = 'Email is required!';
}else if(!regex.test(values.email)){
  errors.email = 'Not a valid email format!';
}
if(!values.password){
  errors.password = 'Password is required!';
}else if(values.password.length < 4 ){
  errors.password = 'Password must be more than 4 characters!';
}

return errors;
}
localStorage.setItem("myName", formValues.username);
  return (
    <div>

     <Navbar/>
     <div className={classeLogin.mainCtn} >
     <div className={classeLogin.header}>

      <div className={classeLogin.text}>
        {action}
      </div>
      <div className={classeLogin.underline}></div>
      </div>

      
      <form onSubmit={handleSubmit}>
      <div className={classeLogin.inputs}>
        {action==='Login'?<div></div>:<div className={classeLogin.input}>
          <img src={user_icon} alt='user_icon'/>
          <input type="text" name='username' placeholder='Name' value={formValues.username}  onChange={handleChange}/>
        </div>}
      <p>{formErrors.username}</p>
        <div className={classeLogin.input}>
          <img src={email_icon} alt='email_icon'/>
          <input type="email" name='email' placeholder='Email' value={formValues.email} onChange={handleChange}/>
        </div>
        <p>{formErrors.email}</p>
        <div className={classeLogin.input}>
          <img src={password_icon} alt='password_icon'/>
          <input type="password" name='password' placeholder='Password' value={formValues.password} onChange={handleChange}/>
      
        </div>
        <p>{formErrors.password}</p>
        
        
        
      </div>
       
      <button className={classeLogin.connectionCtn}>Connect</button>
      </form>
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