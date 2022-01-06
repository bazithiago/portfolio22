import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    font-family: 'Work sans', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    }

    :root {
    --primary: #000000;
    --secondary: #ffffff;

    }

    html,
    body {
        background: #ffffff;
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        display: flex;
        
        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none; 
        scrollbar-width: none;  

    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a, button {
        cursor: pointer;
    }

    .section {
        height: 100vh !important;
        height: calc(var(--vh, 1vh) * 100) !important;
    }
`;
 
export default GlobalStyle;