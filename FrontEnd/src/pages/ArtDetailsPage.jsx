import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import classesArtDetailsStyle from '../styles/artdetails.module.css'
import {
  Button,
  EditableText,
  InputGroup,
  Toaster,
  Position,
} from "@blueprintjs/core"

const ArtDetailsPage = () => {
  const navigate = useNavigate()
  const { artId } = useParams()
  const [art, setArt]= useState([])

  React.useEffect(() => {axios.get(`http://localhost:4000/arts/${artId}`).then(response => {
    const artData =  response.data
    setArt(artData);
  })
  
}, []);

const updateArtwork = artId => {
  //const art = arts.find(art => art.id === id)

  fetch(`http://localhost:4000/arts/${artId}`, {
    method: "PUT",
    body: JSON.stringify(art),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(response => response.json())
}

const deleteArtwork = artId => {
  fetch(`http://localhost:4000/arts/${artId}`, {
    method: "DELETE",
  })
    .then(response => response.json())
    .then(() => {
      navigate(-1)
    
    })
}

const onChangeHandler = (id, key, value) => {
  setArt(values => {
    return values.map(item =>
      item.id === id ? { ...item, [key]: value } : item
    )
  })
}


  return (
    <div  >
     <Navbar/>
     {<img src={art.img} alt={art.alt_text} width={art.width} height={art.height}  />}
    <div className={classesArtDetailsStyle.textCtn}>
          <p>Title : {art.title}</p>
          <p>Dimensions : {art.dimensions}</p>
          {/*<p>Artist : {art.artist_display}</p>*/}
          <EditableText
                  value={art.artist_display}
                  onChange={value => onChangeHandler(art.id, "artist_display", value)}
                />
          <p>Origin : {art.place_of_origin}</p>
          <p>Medium : {art.medium_display}</p>
          
          </div>
          <button intent='btn btn-primary' onClick={() => deleteArtwork(artId) } >
                  Delete
                </button>
          <button
            className='btn btn-primary'
            onClick={() => 
              updateArtwork(artId)
            }
          >
            Update
          </button>
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