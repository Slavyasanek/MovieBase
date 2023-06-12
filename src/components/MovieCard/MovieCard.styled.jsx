import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { devices } from "constants";

export const Card = styled.li`
    width: calc((100% - 5px * 4) / 2);
    margin: 5px;
    @media screen and (${devices.tablet}){
        width: calc((100% - 5px * 8) / 3);
    }
    @media screen and (${devices.desktop}) {
        width: calc((100% - 8px * 10) / 4);
        margin: 8px;
    }
`
export const Link = styled(NavLink)`
    position: relative;
`

export const Poster = styled.img`
    height: 232px;
    width: 100%;
    object-fit: cover;
    @media screen and (${devices.tablet}) {
        height: 370px;
    }
    @media screen and (${devices.desktop}) {
        height: 426px;
    }
`

export const Title = styled.p`
    font-size: 20px;
    text-align: center;
    margin-top: 8px;
    background-color: ${props => props.theme.beige};
`

export const Rate = styled.span`
    position: absolute;
    top: 5px;
    right: 5px;
    color: ${props => props.theme.decorativeLight};
    background-color: ${props => props.theme.darkRed};
    padding: 4px;
    border-radius: 8px;
`