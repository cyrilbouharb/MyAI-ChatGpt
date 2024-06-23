import React from 'react';
import { Box } from '@mui/material';
import TypingAnim from '../components/typer/TypingAnim';
import Footer from '../components/footer/Footer';
const Home = () => {
  return (
    <Box width={"100%"} height={"100%"}>
       <Box sx={{ display: "flex", mx: "auto" }}>
          <img
            src="chat.png"
            alt="chatbot"
            style={{
              display: "flex",
              margin: "auto",
              width: "60%",
              borderRadius: 10,
              boxShadow: "-5px -5px 105px rgba(16, 163, 127) ",
              marginTop: 30,
              marginBottom: '-15%',
              padding: 5,
            }}
          />
        </Box>
    <Box
      sx={{
        width: '100%',
        height: '80vh', // Ensure the box takes up the full viewport height
        display: 'flex', // Added to enable flex properties on the container
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // Centers content vertically in the container
        mx: 'auto'
      }}
    >
      <Box sx={{ mt: 0, width: '100%', textAlign: 'center', mb: '-8%'}}>
        <TypingAnim />
      </Box>
      <Box
  sx={{
    width: '100%',
    display: 'flex',
    flexDirection: { md: 'row', xs: 'column' },
    gap: 'auto',
    my: 0, // Explicitly set vertical margin to 0
    justifyContent: 'space-around', // This ensures that items are spaced evenly
    alignItems: 'center', // Align items vertically
  }}
>
  <img
    className='robot rotate'
    src='robot-home1.png'
    alt="robot"
    style={{
      maxWidth: '200px', // Set a maximum width for smaller screens
      width: '100%', // Make width responsive
      height: '100%', // Maintain aspect ratio
    }}
  />
  {/* <img
    src='openai.png'
    alt="openai"
    style={{
      maxWidth: '200px', // Consistent sizing with the first image
      width: '100%', // Make width responsive
      height: '80%' // Adjusted height
    }}
  /> */}
    </Box>
    <Box></Box>

    </Box>
    <Footer/>
    </Box>
  );
}

export default Home; 
