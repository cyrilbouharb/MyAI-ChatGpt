import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from './shared/Logo';
import { useAuth } from '../context/AuthContext';
import NavigationLink from './shared/NavigationLink';

const Header = () => {
    const auth = useAuth();
  return (
    <AppBar sx={{bgcolor: "transparent", position:"static", boxShadow:"none"}}>
        <Toolbar sx={{display: "flex"}}>
        <Logo />
        <div>
            {auth?.isLoggedIn ? (
            <>
           <NavigationLink bg="rgba(16, 163, 127)" to="/chat" text="Explore My-GPT" textColor='black'  />
           <NavigationLink bg="#ffffff" textColor='green' to="/" text='logout' onClick={auth.logout}  />

           </> ) : (
                <>           
                <NavigationLink bg="rgba(16, 163, 127)" to="/login" text="Login" textColor='black'  />
                <NavigationLink bg="#ffffff" textColor='green' to="/signup" text='Signup' />
                </>
           )} 
        </div>
        </Toolbar>
    </AppBar>
  
  );
};

export default Header;