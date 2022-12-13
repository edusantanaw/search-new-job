import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;

    img{
        width: 65%;
        height: 100vh;
        object-fit: cover;
    }
`

export const Title = styled.h1`
    font-size: 2.5em;
    align-self: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 35%;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 2.5em;
    gap: 1.5em;
    div{
        display: flex;
        flex-direction: column;
        gap: 0.4em;
        width: 100%;
    }

    input[type="submit"]{
        margin-top: 0.5em;
        background-color: #2A63F5;
        width: 100%;
        padding: 0;
        height: 2.3em;
        color: #fff;
        font-size: 1.2em;
        font-weight: bold;
        cursor: pointer;
    }
`

export const Paraghaph = styled.p`
    font-size: 1.1em;
    font-weight: 400;
    display: flex;
    gap: 0.3em;
    span{
        color: #2a63f5;
        font-weight: 500;
        cursor: pointer;

    }

`

export const Input = styled.input`
    height: 3em;
    border: none;
    padding: 1em;
    border-radius: 5px;
    background-color: #D9D9D9;
    width: 100%;
    &:focus{
        outline: none;
        border: 1px solid #000;
    }
`

export const Label = styled.label`
    font-size: 1.2em;
    font-weight: 500;
`