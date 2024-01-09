
import Navbar from '../components/Navbar.jsx';
import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from '../styles/add.module.css'


const AddArtworkPage = () => {
  const navigate = useNavigate()
 
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


  const handleSubmit = async event => {
    event.preventDefault()
    const payload = {
      title,
      dimensions,
      img: imageUrl,
      artist_display: artist,
      place_of_origin: place,
      medium_display: medium,
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/arts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (response.ok) {
        const newArt =  response.json()
        console.log(newArt)
        navigate('/GalleryPage')
      }
    } catch (error) {
      console.error(error)
    }


}


  return (
    <div>
     <Navbar/>
     <div className={classes.mainCtn}>
      <h1>Add Artwork</h1>
      <form  onSubmit={handleSubmit} className={classes.formCtn}>
     <label>Title</label>
          <input
            type='text'
            name='title'
            placeholder='  Title'
            value={title}
            onChange={handleTitle}
          />
          <label>Image</label>
           <input
            type='text'
            name='imageUrl'
            placeholder='  Image URL'
            value={imageUrl}
            onChange={handleImageUrl}
          />
          <label>Artist</label>
           <input
            type='text'
            name='artist'
            placeholder='  Name of the artist'
            value={artist}
            onChange={handleArtist}
          />
          <label>place</label>
           <input
            type='text'
            name='place'
            placeholder='  Place of origin'
            value={place}
            onChange={handlePlace}
          />
          <label>Medium display</label>
           <input
            type='text'
            name='medium'
            placeholder='  Medium display'
            value={medium}
            onChange={handleMedium}
          />
          <label>Dimension : width x height</label>
           <input
            type='text'
            name='dimension'
            placeholder='  Dimension'
            value={dimensions}
            onChange={handleDimensions}
          />
          <button  type='submit'>
            Add 
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArtworkPage;