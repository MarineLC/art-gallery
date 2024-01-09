import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/Navbar.jsx';
import classesArtDetailsStyle from '../styles/artdetails.module.css';

const ArtDetailsPage = () => {
  const navigate = useNavigate();
  const { artId } = useParams();
  const [art, setArt] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/arts/${artId}`).then((response) => {
      const artData = response.data;
      setArt(artData);
    });
  }, [artId]);

  const updateArtwork = () => {
    axios.put(`${import.meta.env.VITE_API_URL}/arts/${artId}`, art).then(() => {
      setIsEditing(false);
    });
  };

  const deleteArtwork = () => {
    axios.delete(`${import.meta.env.VITE_API_URL}/arts/${artId}`).then(() => {
      navigate(-1);
    });
  };

  const onChangeHandler = (key, value) => {
    setArt((prevArt) => ({
      ...prevArt,
      [key]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <div className={classesArtDetailsStyle.mainCtn}>
       <div className={classesArtDetailsStyle.imageContainer}>
         <img
           src={art.img}
            alt={art.alt_text}
         />
       </div>
      <div className={classesArtDetailsStyle.textCtn}>
        <p>
          <span className={classesArtDetailsStyle.label}>Title:</span>{' '}
          {isEditing ? (
            <input
              type="text"
              value={art.title}
              onChange={(e) => onChangeHandler('title', e.target.value)}
              className={classesArtDetailsStyle.editInput}
            />
          ) : (
            art.title
          )}
        </p>
        <p>
          <span className={classesArtDetailsStyle.label}>Dimensions:</span>{' '}
          {isEditing ? (
            <input
              type="text"
              value={art.dimensions}
              onChange={(e) => onChangeHandler('dimensions', e.target.value)}
              className={classesArtDetailsStyle.editInput}
            />
          ) : (
            art.dimensions
          )}
        </p>
        <p>
          <span className={classesArtDetailsStyle.label}>Artist:</span>{' '}
          {isEditing ? (
            <input
              type="text"
              value={art.artist_display}
              onChange={(e) => onChangeHandler('artist_display', e.target.value)}
              className={classesArtDetailsStyle.editInput}
            />
          ) : (
            art.artist_display
          )}
        </p>
        <p>
          <span className={classesArtDetailsStyle.label}>Origin:</span>{' '}
          {isEditing ? (
            
            <input
              type="text"
              value={art.place_of_origin}
              onChange={(e) => onChangeHandler('place_of_origin', e.target.value)}
              className={classesArtDetailsStyle.editInput}
            />
           
          ) : (
            art.place_of_origin
          )}
        </p>
        <p>
          <span className={classesArtDetailsStyle.label}>Medium:</span>{' '}
          {isEditing ? (
            <input
              type="text"
              value={art.medium_display}
              onChange={(e) => onChangeHandler('medium_display', e.target.value)}
              className={classesArtDetailsStyle.editInput}
            />
          ) : (
            art.medium_display
          )}
        </p>
        <div className={classesArtDetailsStyle.buttonCtn}>
        <button 
        className={classesArtDetailsStyle.deleteButton}
        onClick={() => deleteArtwork(artId)}>
          Delete
        </button>
        {isEditing ? (
          <button 
          className={classesArtDetailsStyle.saveButton}
          onClick={updateArtwork}>Save</button>
        ) : (
          <button 
          className={classesArtDetailsStyle.editButton}
          onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button 
        className={classesArtDetailsStyle.backButton}
        onClick={() => navigate(-1)}>Back</button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default ArtDetailsPage;