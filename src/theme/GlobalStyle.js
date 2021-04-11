import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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
