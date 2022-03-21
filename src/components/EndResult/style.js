import styled from 'styled-components';

const Typography = styled.span `
font-family: Recursive;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
background: #333333;
`;

const ResultMessage = styled.span `
font-family: Recursive;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
`;
const Container = styled.div `
display: block;
align-self: flex-start;

`;

const Message = styled.div `
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 12px;
min-height: 50vh;
`;
export {
    ResultMessage,
    Message,
    Container,
    Typography
}



