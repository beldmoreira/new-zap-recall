import { Container, Message, ResultMessage, Results, Typography } from "./style";
import RestartButton from '../RestartButton';
import PartyLogo from '../../assets/party.png';
import Sad from '../../assets/sad.png';


export default function EndResults(result){
   
    if (result === 'congrats'){    
    return(
    <Message>
        <Container>
            <PartyLogo/>
            <ResultMessage> Parabéns!</ResultMessage>
        </Container>
        <Typography> 
            Você não esqueceu de nenhum flashcard!
            <br/>
            4/4 CONCLUÍDOS
        </Typography>
        <RestartButton onClick={() => setScreen('main')}/>
    </Message>
    );
    } else {
        return(
            <Message>
                <Container>
                    <Sad/>
                    <ResultMessage> Putz...</ResultMessage>
                </Container>
                <Typography> 
                Ainda faltam alguns... Mas não desanime!
                <br/>
                4/4 CONCLUÍDOS
                </Typography>
                <RestartButton onClick={() => setScreen('main')}/>
            </Message>
            );
    }
}
