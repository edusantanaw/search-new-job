import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    padding: 1.5em 5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #E7E7E7;

    ul{
        display: flex;
        align-items: center;
        gap: 2em;
        li{
            list-style: none;
            display: flex;
            align-items: center;
            cursor: pointer;
            font-size: 1.2em;
        }

        img{
            width: 1.7em;
            height: 1.7em;
            object-fit: cover;
            border-radius: 50%;
        }
    }
`

export const Logo = styled.h1`
    font-size: 1.4em;
`

