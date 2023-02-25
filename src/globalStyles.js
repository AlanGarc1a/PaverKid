import { createGlobalStyle } from "styled-components";

export const size = {
  mobile: "30em",
  tablet: "96em",
};

const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #495464;
        --white : #F4F4F2;
        --lightGray: #E8E8E8;
        --gray: #BBBFCA;
        --black: #181823;
        --green: #064420;
        --defaultFontSize: 1.8rem;
        --largeFont: 2rem;
    }
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    //default browser font-size = 16px;
    html {
        font-size: 62.5%; //1rem = 10px 10px/16px = 62.5%;
        scroll-behavior: smooth;
    }
    
    @media only screen and (max-width: ${size.tablet}) {
        html {
            font-size: 50%; //1rem = 8px 8 /16
        }
    }
    
    @media only screen and (max-width: ${size.mobile}) {
        html {
            font-size: 43.75%; //1rem = 7.5px  7.5/16
        }
    }

    body {
        box-sizing: border-box;
        line-height: 1.8;
        font-weight: 400;
        font-family: 'Lato', sans-serif;
        @media only screen and (max-width: 30em) {
            overflow-x: hidden;
            overflow: ${(props) => (props.menuOpen ? "hidden" : "auto")}
        }
    }
`;

export default GlobalStyle;
