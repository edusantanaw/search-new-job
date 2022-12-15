import styled, { createGlobalStyle, } from "styled-components";

export const Global = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto Condensed', sans-serif;
    }
`
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: 1em;
    padding-bottom: 1em;
    padding-right: 2em;
    gap: 1em;
`