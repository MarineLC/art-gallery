
import { useEffect, useState } from "react"
import '../App.css'
import classeGallery from '../styles/gallery.module.css'
import Navbar from '../components/Navbar.jsx';


import React from "react";
import axios from "axios";

const GalleryPage =() => {
const [arts, setArts]= useState([])



React.useEffect(() => {axios.get(`http://localhost:4000/arts`).then(response => {
    console.log(response)

    const artsData =  response.data
    console.log(artsData)
    setArts(artsData);
  })
  
}, []);





return(
  <div>
    <Navbar/>
    <div className={classeGallery.ulGallery}>
    
    <ul>
     {arts.map(art => (
          <li key ={art.id}>
            {<img src={art.img} alt={art.alt_text} width={art.width} height={art.height} />}
         {/* <p>Title : {art.title}</p>
          <p>Dimensions : {art.dimensions}</p>
          <p>Artist : {art.artist_display}</p>
          <p>Origin : {art.place_of_origin}</p>
     <p>Medium : {art.medium_display}</p>*/}
        </li>
    ))}

</ul>
  </div>
    </div>


)


} 

export default GalleryPage;