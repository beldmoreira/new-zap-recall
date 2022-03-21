import MiniLogo from "../../assets/logo2.svg";
import { Container, DeckPageTop, Typography } from "./style";
import Footer from "../Footer";


export default function DeckPage({setScreen,children}){
    return(
        <>
        <DeckPageTop>
            <Container>
                <img src = {MiniLogo} alt= "Mini logo"/>
                <Typography> ZapRecall </Typography>
            </Container>
        </DeckPageTop>
            {children}
        <Footer/>
        </>   
    )
}

