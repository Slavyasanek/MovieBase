import { devices } from "constants";
import styled from "styled-components";

export const ErrorWrapper = styled.div`
position: fixed;
top: 50%;
left: 50%;
background-color: rgba(0, 0, 0, 0.2);
transform: translate(-50%, -50%);
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
z-index: 99;
gap: 10px;
& svg {
    width: 70px;
    height: 70px;
    fill: ${props => props.theme.darkRed};
    color: ${props => props.theme.red};
}
`

export const ErrorMessage = styled.p`
    font-size: 22px;
    color: ${props => props.theme.red};
    font-weight: 700;
    font-family: 'Prompt', sans-serif;
    @media screen and (${devices.tablet}) {
        font-size: 30px;
    }
`