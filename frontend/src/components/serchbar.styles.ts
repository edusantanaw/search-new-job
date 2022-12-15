import styled from "styled-components"

type inputprops = {
    w: string; // width
}

export const Input = styled.input<inputprops>`
    width: ${props => props.w ? props.w : "5em"};
    height: 2.9em;
    padding: 1em;
    background-color: #D9D9D9;
    border: 1px solid #D9D9D9;
    border-radius: 5px;
`

export const Button = styled.button`
    font-size: 1.1em;
    padding:  1.2em;
    display: flex;
    align-items: center;
    gap: 0.3em;
    height: 2.1em;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    border: none;
    background-color: blue;
`