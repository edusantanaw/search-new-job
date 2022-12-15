import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding-top: 5em;
    display: flex;
    align-items: center;
    flex-direction: column;

    .decorate{
        border-bottom: 3px solid #D9D9D9;
    }
    .search{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2em;
    }

    .header{
        margin-top: 3em;
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 10em;
        border-bottom: 2px solid #FFE81B;
        h2{
        font-size: 1.7em;
        font-weight: 400;
        padding-bottom: 0.5em;
        cursor: pointer;
        }
    }

    .content{
        display: flex;
        position: relative;
    }

    .details{
        top: 0;
        margin-top: 1em;
        margin-left: 4em;
        padding: 1em;
        width: 26em;
        height:40em;
        border: 2px solid #FFE81B;
        border-radius: 10px;
        margin-bottom: 1em;
        position: sticky ;    
    }

`

