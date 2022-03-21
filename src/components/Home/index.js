import {HomeStyle, Container, Typography} from "./style";
import HomeButton from "../HomeButton";
import Logo from "../../assets/logo.svg";

export default function Home({setScreen}){
    return(
    <HomeStyle>
    <Container>
        <img src = {Logo} alt = "game-logo" />
        <Typography> Zap Recall </Typography>
        <HomeButton onClick={() => setScreen('deckPage')}/>
    </Container>
    </HomeStyle>    
    );
}

