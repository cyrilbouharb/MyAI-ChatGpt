import React from 'react';
import { Link } from 'react-router-dom';
  import { Typography } from '@mui/material';

function Logo() {
  return (
    <div style={{
        display: 'flex', 
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
        marginTop: "0", // Ensure the top margin is zero
        paddingTop: "0", // Ensure the padding at the top is zero
    }}>
        <Link to={"/"}>
            <img src="openai.png" alt="openai" width={'30px'} height={"30px"} className='image-inverted'/>
        </Link>
        <Typography sx={{
            display: { md: "block", sm: "none", xs: "none" },
            mr: "auto", 
            fontWeight: "800", 
            textShadow: "2px 2px 20px #000",
            margin: "0", // Remove any default margins
            padding: "0", // Remove any default padding
        }}>
            <span style={{ fontSize: "20px" }}>MyAI</span>-ChatGPT
        </Typography>
    </div>
  );
};

export default Logo;
