import { devices } from "constants";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
    background-color: ${props => props.theme.red};
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;
    z-index: 99;
`

export const HeaderFlex = styled.div`
    @media screen and (${devices.tablet}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    @media screen and (${devices.desktop}) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const NavContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    @media screen and (${devices.desktop}) {
        gap: 80px;
    }
`;

export const MobileButton = styled.button`
    background-color: ${p => p.theme.decorativeLight};
    border: none;
    border-radius: 5px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover, &:focus, &:active {
        background-color: ${p => p.theme.beige};
    }
    & > svg {
        width: 20px;
        height: 20px;
        color: ${p => p.theme.darkRed};
    }
`

export const Features = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;


export const Logo = styled(NavLink)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: center;
    & svg {
        fill: ${props => props.theme.beige};
        width: 30px;
        height: 30px;
        @media screen and (${devices.tablet}) {
            width: 50px;
            height: 50px;
        }
     }
`
export const LogoTitle = styled.h3`
    font-size: 26px;
    color: ${props => props.theme.beige};
    @media screen and (${devices.tablet}) {
        font-size: 30px;
    }
`
export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media screen and (${devices.maxTablet}){
        margin-top: 20px;
    }
`

export const Link = styled(NavLink)`
    color: ${props => props.theme.beige};
    padding: 8px;
    border-radius: 8px;
    width: fit-content;
    &.active {
        background-color: ${props => props.theme.darkRed};
    }
    @media screen and (${devices.tablet}) {
        font-size: 24px;
    }
`