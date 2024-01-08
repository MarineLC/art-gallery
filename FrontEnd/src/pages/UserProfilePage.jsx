import React from 'react';
import Navbar from '../components/Navbar.jsx';
import classeUser from '../styles/userprofile.module.css'

const UserProfilePage = () => {
  return (
    <div>
      <Navbar/>
      <div className={classeUser.text}>
     <p>Hello name, welcome to your profile </p>
     </div>
    </div>
  );
};

export default UserProfilePage;