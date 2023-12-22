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
            ARTHUB
          </Link>
        </span>{' '}
        is a digital gallery and a community for all art lovers. Every art lover is welcome to{' '}
        <span>
          <Link to="/contribute" className={classes.link}>
            contribute 
          </Link>
        </span>{' '}
        to the gallery and enrich our art collection. Discover the{' '}
        <span>
          <Link to="/team" className={classes.link}>
            team
          </Link>
        </span>{' '}
        which stands behind this project.
      </h1>
      <p>log in or sign up...</p>
    </div>
  );
};

export default HomePage;

