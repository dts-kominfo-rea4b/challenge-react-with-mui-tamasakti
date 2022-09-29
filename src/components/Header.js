// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import '../App.css';
import Divider from '@mui/material/Divider';
// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (     
   <>
        <h1>Call a Friend</h1>
        <center>
        <Divider sx={{ width: "50%"}}> 
          Your friendly contact app
        </Divider> </center>      
        </>
  );
};

export default Header;
