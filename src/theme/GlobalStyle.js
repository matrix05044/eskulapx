import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;600&display=swap');

    *, *::after, *::before{
        box-sizing: border-box;
        
    }

    html {
        font-size: 62.5%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
         -webkit-font-smoothing: antialiased;
        font-weight: 100;
        
        
    }

    body{
        font-family: "Montserrat", sans-serif;
        font-size: 1.6rem;
        margin: 0;
        color: #666;
    }

    a{
        text-decoration: none;
    }
`;

export default GlobalStyle;
