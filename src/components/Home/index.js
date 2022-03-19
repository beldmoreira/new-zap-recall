import {HomeStyle, Container, Typography} from "./style";
import {HomeButton} from "../HomeButton"
import Logo from "../assets/logo.svg"
import {useState} from 'react';

export default function Home(){
    return(
    <HomeStyle>
    <Container>
        <img src = {Logo} alt = "game-logo" />
        <Typography> Zap Recall </Typography>
        <HomeButton onClick={() => setScreen('')}/>
    </Container>
    </HomeStyle>    
    );
}

export default function StartButton(){
    const[screen,setScreen]= useState('') 
     return(
        setScreen()
   );
}