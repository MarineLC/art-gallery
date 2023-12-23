import { useState } from 'react'
import { Routes, Route } from "react-router-dom"; 
     
import HomePage from './pages/HomePage.jsx'
import TeamPage from "./pages/TeamPage.jsx";   
  
import GalleryPage from "./pages/GalleryPage.jsx"; 
import AddArtworkPage from "./pages/AddArtworkPage.jsx";  
import UserProfilePage from "./pages/UserProfilePage.jsx";   
import LogInPage from "./pages/LogInPage.jsx";   
import ArtDetailsPage from "./pages/ArtDetailsPage.jsx";{/*MISSING ROUTE PATH TO ART DETAILS PAGE*/}
import ErrorPage from "./pages/ErrorPage.jsx";
import './App.css'


function App() {

  return (
    <>
      <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/team" element={<TeamPage />} />
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
