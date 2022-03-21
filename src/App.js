import Home from "./components/Home";
import DeckPage from "./components/DeckPage";
import { useState } from "react";

export default function App(){
    const [screen,setScreen] = useState('home') 
    if(screen === 'home'){
    return(
    <Home setScreen={setScreen}/>)
    } else if (screen === 'deckPage') {
    return(
    <DeckPage setScreen={setScreen}/>  
        ); 
    }
       
  
}

