import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 3em 17em;
    h2{
        font-size: 5em;
        font-weight:400;
        padding-bottom: 0.4em;
    }
    .search{
        width: 100%;
        display: flex;
        justify-content: space-between;
    };

    span{
        font-size: 2em;
    }
    button {
        font-size: 1.4em;
        padding: 0 2em;
        border: none;
        background-color: blue;
        border-radius: 5px;
        color: #fff;
    }

    h3{
        margin-top: 1em;
        font-size: 3em;
        font-weight: 300; 
        margin-bottom: 0.4em;
    }


`
export const Lists = styled.ul`
    display: flex;
    gap: 2em;
`

export const Items = styled.li`
    list-style: none;
    display: flex;
    gap: 1em;
    background-color: #D9D9D9;
    padding: 1em 1em;
    border-radius: 10px;
    img{
        width: 6em;
        height: 5em;
        object-fit: cover;
        border-radius: 10px;
    }
    .company{
        h3{
            margin: 0;
            font-size: 2em;
            font-weight:400;
        }
        span{
            font-size: 01em;
        }
        div{
            display: flex;
            gap: 0.7em;
        }
    }

`