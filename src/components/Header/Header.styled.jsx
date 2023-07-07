import { devices } from "constants";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const HeaderWrapper = styled.header`
    background-color: ${props => props.theme.red};
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;
    z-index: 99;
    width: 100%;
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
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
    @media screen and (${devices.tablet}) and (${devices.maxDesktop}){
        margin-top: 8px;
    }
`;

export const Settings = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    position: absolute;
    bottom: -100%;
    background-color: ${p => p.theme.red};
    padding: 10px 20px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const SettingsOpen = styled.button`
    background-color: ${p => p.theme.beige};
    border-radius: 50%;
    height: 35px;
    width: 35px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover, &:focus, &:active {
        background-color: ${p => p.theme.greyRed};
    }
    & > svg {
        width: 20px;
        height: 20px;
        color: ${p => p.theme.red};
    }
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
    gap: 8px;
    @media screen and (${devices.maxTablet}){
        margin-top: 20px;
    }
`

export const Link = styled(NavLink)`
    color: ${props => props.theme.beige};
    padding: 8px;
    border-radius: 8px;
    width: fit-content;
    font-size: 20px;
    &.active {
        background-color: ${props => props.theme.darkRed};
    }
    @media screen and (${devices.tablet}) {
        font-size: 18px;
    }
`