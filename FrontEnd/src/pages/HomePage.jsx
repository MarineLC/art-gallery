import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/home.module.css';
import '../App.css'

const HomePage = () => {
  return (
    <div className={classes.page}>
     <h1 className={classes.mainText}>
     <span>
  <Link to="/gallery" className={classes.link}>
    ArtHub
  </Link>
  </span>{' '}
  is a digital gallery and a community for all art lovers. Every art lover is welcome to{' '}
  <Link to="/contribute" className={classes.link}>
    contribute 
  </Link>{' '}
  to the gallery and enrich our art collection. Discover the{' '}
  <Link to="/team" className={classes.link}>
    team
  </Link>{' '}
  which stands behind this project.
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

