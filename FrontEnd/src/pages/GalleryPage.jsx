import { useEffect, useState } from "react"
//import '../App.css'
import classeGallery from '../styles/gallery.module.css'
import { Link } from 'react-router-dom'
import React from "react";
import axios from "axios";

const GalleryPage =() => {
const [arts, setArts]= useState([])



React.useEffect(() => {axios.get(`http://localhost:4000/arts`).then(response => {
    const artsData =  response.data
    setArts(artsData);
  })
  
}, []);





return(
    

    <div className={classeGallery.container}>
     {arts.map(art => (
          <div className={classeGallery.art} key ={art.id}>
             <Link to={'/arts/' + art._id}></Link>
            {<img src={art.img} alt={art.alt_text} width={art.width} height={art.height} className={classeGallery.image1} />}
         {/* <p>Title : {art.title}</p>
          <p>Dimensions : {art.dimensions}</p>
          <p>Artist : {art.artist_display}</p>
          <p>Origin : {art.place_of_origin}</p>
     <p>Medium : {art.medium_display}</p>*/}
        </div>
    ))}

</div>
 


)


} 

export default GalleryPage;