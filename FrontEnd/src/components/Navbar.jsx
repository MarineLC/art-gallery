import React from "react";
import classes from '../styles/navbar.module.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    console.log('Navbar rendered')
    return (  
        <div className={classes.navbarCtn}>  
            <Link to='/' className={`${classes.link} ${classes.logo}`}>ARTHUB</Link>
            <div className={classes.linksContainer}>
                <Link to='/GalleryPage' className={classes.link}>gallery</Link> 
                <Link to='/AddArtworkPage' className={classes.link}>add</Link>   
                <Link to='/profile' className={classes.link}>profile</Link>
                <Link to='/team' className={classes.link}>team</Link>
            </div>
        </div>
    );
}

export default Navbar;
