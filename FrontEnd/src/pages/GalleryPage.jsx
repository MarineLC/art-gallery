import { useEffect, useState } from "react"
//import '../App.css'
import classeGallery from '../styles/gallery.module.css'
import { Link } from 'react-router-dom'
import React from "react";
import axios from "axios";
import HomePage from './HomePage.jsx';
import Navbar from '../components/Navbar.jsx';
const GalleryPage =() => {
const [arts, setArts]= useState([])



React.useEffect(() => {axios.get(`http://localhost:4000/arts`).then(response => {
    const artsData =  response.data
    setArts(artsData);
  })
  
}, []);





return(
  <div>
  <Navbar/>  
    <div className={classeGallery.container}>
      
     {arts.map(art => (
          <div className={classeGallery.art} key={art.id}>
            <div className={classeGallery.item} >
             <Link to={'/ArtDetailsPage/' + art.id}>
            {<img src={art.img} alt={art.alt_text} width={art.width} height={art.height}/>}
            <p className={classeGallery.text}>{art.title}</p>
            </Link>
            </div>
        </div>
    ))}

</div>
</div>


)


} 

export default GalleryPage;