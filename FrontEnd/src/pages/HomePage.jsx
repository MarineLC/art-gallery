import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/home.module.css';
import '../App.css'

const HomePage = () => {
  return (
    <div className={classes.page}>
     <h1 className={classes.mainText}>
     <span className={classes.artHub}>ARTHUB<br/></span>{' '}
  Digital {' '}
  <Link to="/gallery" className={classes.link}>
  gallery 
  </Link>{' '}
  where every art lover is welcome to{' '}
  <Link to="/create" className={classes.link}>
    contribute 
  </Link>{' '}
   and enrich our art collection. 
   Discover the{' '}
  <Link to="/team" className={classes.link}>
    team
  </Link>{' '}
  behind this project.
  </h1>
  <div className={classes.loginCtn}>
  <Link to="/login" className={`${classes.link} ${classes.linkLogin}`}>
  <p>log in </p>
  </Link>{' '}
  <p className={classes.orText}>{' '} or {' '}</p>
  <Link to="/login" className={`${classes.link} ${classes.linkSignUp}`}>
  <p>sign up</p>
  </Link>
  </div>
    </div>
  );
  };

  export default HomePage;

