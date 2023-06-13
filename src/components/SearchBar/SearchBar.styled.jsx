import { devices } from "constants";
import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
    margin-bottom: 20px;
`

export const Search = styled.input`
    padding: 10px;
    width: 200px;
    border-radius: 8px;
    background-color: transparent;
    border: 2px solid ${props => props.theme.red};
    outline: none;
    font-size: 20px;
    font-family: 'Anonymous Pro', monospace;
    @media screen and (${devices.tablet}) {
        width: 300px;
        padding-top: 15px;
        padding-bottom: 15px;
    }
`

export const SubmitBtn = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 8px;
    font-family: 'Prompt', sans-serif;
    background-color: ${props => props.theme.darkRed};
    border: none;
    padding: 8px;
    font-size: 16px;
    cursor: pointer;
    color: ${props => props.theme.beige};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    & svg {
        width: 30px;
        height: 30px;
    }
    @media screen and (${devices.tablet}) {
        padding-left: 15px;
        padding-right: 15px;
    }
    &:hover, &:focus {
        background-color: ${props => props.theme.beige};
        color: ${props => props.theme.darkRed};
    }
`