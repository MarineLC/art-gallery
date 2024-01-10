import React from 'react';
import Navbar from '../components/Navbar.jsx';
import classeUser from '../styles/userprofile.module.css'
import { Link } from 'react-router-dom';


const UserProfilePage = () => {

  const name = localStorage.getItem("myName");


  return (
    <div>
      <Navbar/>
      <div className={classeUser.page}>
     <h1 className={classeUser.mainText}>
     <span className={classeUser.artHub}>ARTHUB<br/></span>{' '}
     Hello {name}, welcome to your profile, if you want to contribute to the gallery it's <Link to="/AddArtworkPage" className={classeUser.link}>
    here 
  </Link>{' '} 
  
  </h1>
 
    </div>
    </div>
  );
};

export default UserProfilePage;