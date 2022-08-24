import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        outline: none;
    }


    body {
        background-color: ${({theme}) => theme.background};
        font-family: 'Nunito Sans', sans-serif;
        color: ${({theme}) => theme["text-500"]};
    }

    input, button, option, select {
        font-family: 'Nunito Sans', sans-serif;
        color: ${({theme}) => theme["text-500"]};
    }
`