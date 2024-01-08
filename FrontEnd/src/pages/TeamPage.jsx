import React from 'react';
import Navbar from '../components/Navbar.jsx';
import classes from '../styles/about.module.css';
import imgHristina from '../teamImages/hristina.jpeg'
import imgMarine from '../teamImages/marine.png'
import { Link } from "react-router-dom";


const TeamMember=({imgSrc, name, text}) => {
  return(
    <div className={classes.memberCtn}>
      <img src={imgSrc} className={classes.img}/>
      <h1 className={classes.name}>{name}</h1>
      <p className={classes.text}>{text}</p>
    </div>
  )
};

const TeamPage = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.ctn}>
        <TeamMember
         imgSrc={imgHristina}
         imgType='jpeg'
         name='Hristina Gjorgieva'
         text='Hi, I am Hristina. I am a passionate UX Designer with a background in architecture. 
         Currently enrolled in the web development course, determined to further upskill my capabilities as a UX Designer.'
        />
        <TeamMember
         imgSrc={imgMarine}
         imgType='png'
         name='Marine Le Cléach'
         text='Hi, I am Marine. After a master degree in chemistry, I learned Java and I worked as a Java developper for 4 years. 
         I started the IronHack bootcamp in web development to learn new technical skills.'
        />
      </div>
      <div className={classes.link}>
      <Link to="/GalleryPage" className={classes.linkButton}>
        Go to Gallery {'->'}
      </Link>
      </div>
    </div>
  );
};

export default TeamPage;


