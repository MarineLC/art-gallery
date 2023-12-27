import React from "react";
import classes from '../styles/navbar.module.css'
import { Link } from "react-router-dom";


const Navbar = () => {
    console.log('Navbar rendered')
    return (  
        <div className={classes.navbarCtn}>  
        <Link to='/' className={classes.link}>home</Link>
        <Link to='/team' className={classes.link}>team</Link>
        <Link to='/AddArtworkPage' className={classes.link}>add </Link>   
        <Link to='/profile' className={classes.link}>profile</Link>
        </div>
    );
}
 
export default Navbar;