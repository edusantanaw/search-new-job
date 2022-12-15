import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: relative;

    .details{
        top: 0;
        margin-top: 1em;
        margin-left: 4em;
        padding: 1em;
        width: 26em;
        height:40em;
        border: 2px solid #D9D9D9;
        border-radius: 10px;
        margin-bottom: 1em;
        position: sticky ;    
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