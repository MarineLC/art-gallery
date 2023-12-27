import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { useEffect, useState } from 'react'


const ArtDetailsPage = () => {

  const { artId } = useParams()

  return (
    <div>
     <Navbar/>
    </div>
  );
};

export default ArtDetailsPage;