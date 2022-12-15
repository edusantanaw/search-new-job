import styled from "styled-components";

export const Recents = styled.div`
    width: 30em;
    margin-top: 2em;
    ul{
        display: flex;
        flex-direction: column;
        gap: 1em;

        a{
            text-decoration: none;
            color: #000;
        }
    }
    li{
        list-style: none;
        width: 100%;
        padding: 0.5em 1em;
        background-color: #D9D9D9;
        border-radius: 5px;
    }
`