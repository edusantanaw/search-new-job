import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    padding: 1.5em 5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFE81B;

    ul{
        display: flex;
        align-items: center;
        gap: 2em;
        a{
            color: #000;
            text-decoration: none;
        }
        li{
            list-style: none;
            display: flex;
            align-items: center;
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

