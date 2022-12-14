import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    padding: 1em 5em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .search {
        display: flex;
        align-items: center;
        gap: 0.5em;
    }
`

export const Logo = styled.h1`
    font-size: 1.4em;
`

type inputprops = {
    w: string; // width
}

export const Input = styled.input<inputprops>`
    width: ${props => props.w ? props.w : "5em"};
    height: 2em;
`

export const Button = styled.button`
    font-size: 1.1em;
    padding: 0.1em 0.3em;
    border-radius: 4px;
    border: none;
    background-color: blue;
`