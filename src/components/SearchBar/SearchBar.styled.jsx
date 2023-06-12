import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
`

export const Search = styled.input`
    padding: 10px;
    width: 200px;
    border-radius: 8px;
    background-color: transparent;
    border: 2px solid ${props => props.theme.red};
    outline: none;
    font-family: 'Anonymous Pro', monospace;
`

export const SubmitBtn = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 8px;
    font-family: 'Prompt', sans-serif;
`