import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import ChatItem from '../components/chat/ChatItem';
import {IoMdSend} from 'react-icons/io';
import { useRef } from 'react';
import { getUserChats, sendChatRequest } from '../helpers/api-communicator';
import toast from 'react-hot-toast';
type Message = {
  role: "user" | "assistant";
  content: string;
};

//For debugging purposes 
// const chatMessages = [
//   { role: "assistant", content: "Hello! How can I assist you today?" },
//   { role: "user", content: "I need help with my account." },
//   { role: "assistant", content: "Sure, I can help with that. What seems to be the problem?" },
//   { role: "user", content: "I'm unable to log in to my account." },
//   { role: "assistant", content: "I understand. Can you please provide the email address associated with your account?" },
//   { role: "user", content: "Yes, it's example@email.com." },
//   { role: "assistant", content: "Thank you. I'll check this information for you. One moment, please." },
//   { role: "assistant", content: "I've found your account. You need to reset your password. Would you like me to send a reset link to your email?" },
//   { role: "user", content: "Yes, please do that." },
//   { role: "assistant", content: "I've sent the reset link to your email. Please check your inbox and follow the instructions to reset your password." },
//   { role: "user", content: "I received it. Thanks for your help!" },
//   { role: "assistant", content: "You're welcome! Let me know if there's anything else I can do for you. Have a great day!" }
// ];



const Chat = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const auth = useAuth();
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const handleSubmit = async () => {
    const content = inputRef.current?.value as string;
    // console.log(inputRef.current?.value);
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
    const newMessage: Message = {role: "user", content};
    setChatMessages((prev) =>[...prev, newMessage]);
    const chatData = await sendChatRequest(content);
    setChatMessages([...chatData.chats]);

  };

  useLayoutEffect(() => {
    if (auth?.isLoggedIn && auth.user) {
      toast.loading("Getting the chats", {id: "loadchats"});
      getUserChats().then((data) =>  {
        setChatMessages([...data.chats]);
        toast.success("Successfully loaded the chats", {id: "loadchats"});
      }).catch(err => {
        console.log(err);
        toast.error("Failed to load the chats", {id: "loadchats"});
      });
    }
  }, [auth]);

  return ( <Box sx={{display:'flex', flex:1, width:'100%', height:'100%', mt:3, gap:3}}>

    <Box sx={{display: {md:"flex", xs: "none", sm:"none"}, flex:0.2, flexDirection:'column'}}> 

    <Box sx={{display:'flex', width:'100%', height:'60vh', bgcolor: "#424242", borderRadius: 5, flexDirection:'column', mx: 3}}> 

    <Avatar sx={{mx:'auto', my:2, bgcolor: '#676767', color: '#f9f9f9', fontWeight: 700,}}>
        {auth?.user?.name[0]}{auth?.user?.name.split(" ")[1][0]}
    </Avatar>
    <Typography sx={{mx: 2, fontFamily: 'Helvetica'}}>
      You are talking to Cyril's Own OpenAI ChatBot
    </Typography>
    <Typography sx={{mx:'auto', fontFamily: 'Helvetica', my:4, p:3}}>
    Hello! I'm here to help answer your questions and provide information on a wide range of topics.
    You can ask me  about history, science, technology, or just about anything else you're curious about. 
    Let's chat!
    </Typography>
    <Button sx={{width:'200px',
    my: -4,
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
    <Box sx={{display:'flex', flex:{md: 0.8, xs:1, sm:1}, flexDirection:"column", px:3}}>
      <Typography sx={{textAlign:'center', fontSize:'30px', color:'white', mb:2, mx:'auto'}}>ChatGPT 3.5 Turbo</Typography>
      <Box sx={{width:'100%', height:'60vh', borderRadius:3, mx:"auto", display:'flex', flexDirection:"column", overflow:"scroll",
        overflowX:"hidden", overflowY:"auto" ,scrollBehavior:"smooth",
      }}> {chatMessages.map( (chat, index) => (
        //@ts-ignore
        <ChatItem content={chat.content} role={chat.role} key={index}/>
      ))}</Box>
    <div style={{width:'100%', borderRadius:8, backgroundColor:"#424242", display:'flex', margin:'auto', height:'12%'}}> 
    {" "}
    <input ref={inputRef} type='text' style={{width:'100%', backgroundColor:"transparent", padding:'30px', 
      border:"none", outline: "none", color:"white", fontSize:"20px"}}/>
      <IconButton onClick={handleSubmit} sx={{ml:'auto', color:'white'}}><IoMdSend/></IconButton>
    </div>
     </Box>
     </Box>
)};

export default Chat;