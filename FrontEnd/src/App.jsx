import { useState } from 'react'
import { Routes, Route } from "react-router-dom"; 
import HomePage from "./pages/HomePage";       
import AboutPage from "./pages/AboutPage";     
import GalleryPage from "./pages/GalleryPage"; 
import AddArtworkPage from "./pages/AddArtworkPage";  
import UserProfilePage from "./pages/UserProfilePage";   
import LogInPage from "./pages/LogInPage";   
import ArtDetailsPage from "./pages/ArtDetailsPage";{/*MISSING ROUTE PATH TO ART DETAILS PAGE*/}
import ErrorPage from "./pages/ErrorPage";
import './App.css'


function App() {

  return (
    <>
      <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/create" element={<AddArtworkPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/login" element={<LogInPage />} />
        {/*MISSING ROUTE PATH TO ART DETAILS PAGE*/}
        <Route path="*" element={ <ErrorPage /> } />          
     </Routes>



     </div>
    </>
  )
}

export default App
