import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import classesArtDetailsStyle from '../styles/artdetails.module.css'

const ArtDetailsPage = () => {
  const navigate = useNavigate()
  const { artId } = useParams()
  const [art, setArt]= useState([])

  React.useEffect(() => {axios.get(`http://localhost:4000/arts/${artId}`).then(response => {
    const artData =  response.data
    setArt(artData);
  })
  
}, []);

  return (
    <div >
     <Navbar/>
     {<img src={art.img} alt={art.alt_text} width={art.width} height={art.height}  />}
    <div className={classesArtDetailsStyle.mainCtn}>
          <p>Title : {art.title}</p>
          <p>Dimensions : {art.dimensions}</p>
          <p>Artist : {art.artist_display}</p>
          <p>Origin : {art.place_of_origin}</p>
          <p>Medium : {art.medium_display}</p>
          </div>
     <button
            className='btn btn-primary'
            onClick={() => {
              navigate(-1)
            }}
          >
            Back
          </button>
    </div>
  );
};

export default ArtDetailsPage;