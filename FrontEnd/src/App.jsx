
import { Routes, Route } from "react-router-dom"; 
     
import HomePage from './pages/HomePage.jsx'
import TeamPage from "./pages/TeamPage.jsx";   
  
import GalleryPage from "./pages/GalleryPage.jsx"; 
import AddArtworkPage from "./pages/AddArtworkPage.jsx";  
import UserProfilePage from "./pages/UserProfilePage.jsx";   
import LogInPage from "./pages/LogInPage.jsx";   
import ArtDetailsPage from "./pages/ArtDetailsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import './App.css'


function App() {

  return (
    <>
      <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/team" element={<TeamPage />} />
        <Route path="/GalleryPage" element={<GalleryPage />} />
        <Route path="/ArtDetailsPage/:artId" element={<ArtDetailsPage />} />
        <Route path="/AddArtworkPage" element={<AddArtworkPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="*" element={ <ErrorPage /> } />          
     </Routes>



     </div>
    </>
  )
}

export default App
