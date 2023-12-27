import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from '../styles/add.module.css'
import axios from "axios";

const AddArtworkPage = () => {
  const navigate = useNavigate()
  // State variables to store the values of the form inputs. You can leave these as they are.
  const [title, setTitle] = useState('')
  const [dimensions, setDimensions] = useState('')
  const [artist, setArtist] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [place, setPlace] = useState('')
  const [medium, setMedium] = useState('')

  const handleTitle = event => setTitle(event.target.value)
  const handleDimensions = e => setDimensions(e.target.value)
  const handleArtist = e => setArtist(e.target.value)
  const handleImageUrl = e => setImageUrl(e.target.value)
  const handlePlace = e => setPlace(e.target.value)
  const handleMedium = e => setMedium(e.target.value)
  const [arts, setArts]= useState([])

  const handleSubmit = async event => {
    event.preventDefault()
    const payload = {
      title,
      dimensions,
      image_url: imageUrl,
      artist_display: artist,
      place_of_origin: place,
      medium_display: medium,
    }
  

  React.useEffect(() => {axios.post(`http://localhost:4000/arts`).then(response => {
    body: JSON.stringify(payload)
    })
    if (response.ok) {
      const newArt =  response.json()
      console.log(newArt)
      navigate('/GalleryPage')
    }
  }, []);
  
}


  return (
    <div>
     <Navbar/>
     <div >
      <form className={classes.mainCtn}>
     <label>Title</label>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={title}
            onChange={handleTitle}
          />
          <label>Image</label>
           <input
            type='text'
            name='imageUrl'
            placeholder='Image URL'
            value={imageUrl}
            onChange={handleImageUrl}
          />
          <label>Artist</label>
           <input
            type='text'
            name='artist'
            placeholder='name of the artist'
            value={artist}
            onChange={handleArtist}
          />
          <label>place</label>
           <input
            type='text'
            name='place'
            placeholder='place or origin'
            value={place}
            onChange={handlePlace}
          />
          <label>Medium siplay</label>
           <input
            type='text'
            name='medium'
            placeholder='Meidum display'
            value={medium}
            onChange={handleMedium}
          />
          <label>Dimension</label>
           <input
            type='text'
            name='imageUrl'
            placeholder='Image URL'
            value={dimensions}
            onChange={handleDimensions}
          />
          <button  type='submit'>
            Add Art
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArtworkPage;