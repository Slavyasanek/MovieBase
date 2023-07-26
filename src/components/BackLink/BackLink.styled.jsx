import styled from "styled-components";
import { Link } from "react-router-dom";

export const BtnBack = styled(Link)`
    background-color: ${props => props.theme.darkRed};
    color: ${props => props.theme.beige};
    padding: 5px 15px;
    border-radius: 16px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    width: max-content;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    & svg {
        fill: ${props => props.theme.decorativeLight};
        width: 30px;
        height: 30px;
    }
    &:hover, &:focus, &.active {
        background-color: ${props => props.theme.beige};
        color: ${props => props.theme.darkRed};
    }
`