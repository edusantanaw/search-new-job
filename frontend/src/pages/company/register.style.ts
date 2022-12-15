import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 4em;

`
export const Form = styled.form`
    width: 30em;
    height: 60em;
    padding:1em;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    div{
        display: flex;
        flex-direction:column;
    }
    input[type="submit"]{
        width: 100%;
        height: 3em;
        border: none;
        background-color: blue;
        color: #fff;
        cursor: pointer;
    }
`