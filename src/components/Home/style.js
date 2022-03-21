import styled from 'styled-components';

const HomeStyle = styled.div`
background-color: #FB6B6B;
min-height: 100vh;
`
const Container = styled.div `
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 148px;
`;

const Typography = styled.p `
font-family: Righteous;
font-size: 36px;
font-style: normal;
font-weight: 400;
line-height: 31px;
letter-spacing: -0.012em;
text-align: center;
color:#FFFFFF;
margin-top: 20px;

`;
export {
    HomeStyle,
    Container,
    Typography
}


