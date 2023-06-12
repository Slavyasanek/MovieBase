import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Anonymous Pro', monospace;
        background-color: ${props => props.theme.decorativeLight};
        color: ${props => props.theme.mainFont};
        margin: 0;
        font-size: 20px;
        min-width: 320px;
    }
`