import useState from 'react';
import TurnCard from '../../assets/setinha.png';
import Vector from '../../assets/Vector.svg';
import GreenButton from '../GreenButton';
import RedButton from '../RedButton';
import YellowButton from '../YellowButton';
import { CardQuestion, CardContent } from './style';

export default function Cards(){
    const [questions,setQuestions] = useState([
    {
     question:"O que é JSX?",
     answer:"Uma extensão de linguagem do JavaScript"
    },
    {
     question:"O React é __ ",
     answer:"uma biblioteca JavaScript para construção de interfaces"},
    {
     question:"Componentes devem iniciar com __",
     answer:"letra maiúscula"},
    {
     question:"Podemos colocar __ dentro do JSX", 
     answer:"expressões"}
    

]);

const [currentPosition,setCurrentPosition] = useState(0)

}

 function FlashCards({currentPosition, question }){
    const [hasBeenAnswered,setHasBeenAnswered] = useState(false);
    const [hasBeenTurned, setHasBeenTurned] = useState(false);
    const [hasBeenChecked,setHasBeenChecked] = useState(false);

    if(hasBeenTurned){

    return(
      const deck = deck.map(card => (   
        <CardQuestion>
            <CardContent> {question}</CardContent>
            <img src ={TurnCard} alt= "Turning Arrow" onClick={() => setHasBeenTurned(true)} />
             <CardAlignment>
              <RedButton answer = "bad"/>
              <YellowButton answer = "medium"/>
              <GreenButton answer = "great"/>
            </CardAlignment>
        </CardQuestion>

    );
}
 

 }

 function (){
   const cardAnswers = deck.map(card => ()
  <>


   )
 }
