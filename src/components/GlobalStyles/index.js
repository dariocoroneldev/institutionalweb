import { createGlobalStyle } from 'styled-components';
 import background from './../../assets/background.png';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: lato, Helvetica, Sans-Serif;
    background-image: url(${background});
    background-position: -50% -45%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    backdrop-filter:blur(2px);
    list-style-type: none;
    text-decoration: none;
    position:relative;
   

  }

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;
 
export default GlobalStyle;