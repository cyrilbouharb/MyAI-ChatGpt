import React from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Chat = () => {
  const auth = useAuth();
  return ( <Box sx={{display:'flex', flex:1, width:'100%', height:'100%', mt:3, gap:3}}>

    <Box sx={{display: {md:"flex", xs: "none", sm:"none"}, flex:0.2, flexDirection:'column'}}> 

    <Box sx={{display:'flex', width:'100%', height:'60vh', bgcolor: "#424242", borderRadius: 5, flexDirection:'column', mx: 3}}> 

    <Avatar sx={{mx:'auto', my:2, bgcolor: '#676767', color: '#f9f9f9', fontWeight: 700,}}>
        {auth?.user?.name[0]}{auth?.user?.name.split(" ")[1][0]}
    </Avatar>
    <Typography sx={{mx:'auto', fontFamily: 'Helvetica'}}>
      You are talking to Cyril's Own OpenAI ChatBot
    </Typography>
    <Typography sx={{mx:'auto', fontFamily: 'Helvetica', my:4, p:3}}>
    Hello! I'm here to help answer your questions and provide information on a wide range of topics.
    You can ask me  about history, science, technology, or just about anything else you're curious about. 
    Let's chat!
    </Typography>
    <Button sx={{width:'200px', 
    my:'auto', 
    color:'white', 
    fontWeight:'700', 
    borderRadius: 3, 
    mx:'auto', 
    bgcolor: '#ff0000', 
    ":hover": {
      bgcolor: '#b30000',
    },}}>Delete Chat</Button>
    </Box>
    </Box>
    <Box sx={{display:'flex', flex:{md: 0.8, xs:1, sm:1}}}>
      <Typography sx={{textAlign:'center', fontSize:'30px', color:'white', mb:2, mx:'auto'}}>ChatGPT 3.5 Turbo</Typography>
    </Box>
     </Box>
)};

export default Chat;