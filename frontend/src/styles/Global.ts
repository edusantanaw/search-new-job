import styled, { createGlobalStyle, } from "styled-components";

export const Global = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto Condensed', sans-serif;
    }
`
type inputprops = {
    w: string; // width
    h: string
}

export const Input = styled.input<inputprops>`
    width: ${props => props.w ? props.w : "5em"};
    height: ${props => props.h ? props.h : "2.9em"};
    padding: 1em;
    background-color: #D9D9D9;
    border: 1px solid #D9D9D9;
    border-radius: 5px;
`