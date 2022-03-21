import styled from 'styled-components';

const CardFront = styled.div `
height: 65px;
width: 300px;
border-radius: 5px;
background-color: #FFFFFF;
box-shadow: 0px 4px 5px 0px #00000026;
padding:15px;
`;
const QuestionNumber = styled.span `
font-family: Recursive;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color: #333333;
display:flex;
align-self:flex-start;
justify-content: center;

`;
const CardQuestion = styled.div `
height: 131px;
width: 299px;
border-radius: 5px;
background-color: #FFFFD4;
box-shadow: 0px 4px 5px 0px #00000026;
`;
const CardAnswer= styled.div`
height: 131px;
width: 299px;
border-radius: 5px;
background-color: #FFFFD4;
box-shadow: 0px 4px 5px 0px #00000026;
`;
const CardContent = styled.span `
font-family: Recursive;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
background: #333333;
margin-top:18px;
`;
const ButtonAlignment = styled. div`
display: flex;
justify-content: space-between;
gap: 16px;
`;
export {
    CardFront,
    CardQuestion,
    CardAnswer,
    CardContent,
    QuestionNumber,
    ButtonAlignment
}