import { devices } from "constants";
import styled from "styled-components";
import { motion } from 'framer-motion';

export const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 20px;
    position: relative;
    @media screen and (${devices.desktop}) {
        flex-direction: row;
        gap: 20px;
    }
`
export const FilterColumn = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    @media screen and (${devices.desktop}) {
        position: sticky;
        top: 20px;
        height: 100%;
        max-width: 300px;
    }
`;


export const FilterButton = styled.button`
    min-width: 200px;
    padding: 8px;
    font-size: 20px;
    border-radius: 8px;
    background-color: ${props => props.theme.darkRed};
    border: 2px solid ${props => props.theme.darkRed};
    color: ${p => p.theme.beige};
    align-self: center;
    cursor: pointer;
`;

export const ButtonClose = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 50%;
    width: 30px;
    height: 29px;
    background-color: ${p => p.theme.red};
    padding: 0;
    border: none;
    cursor: pointer;
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:hover, &:focus &:active {
        background-color: ${p => p.theme.darkRed};
    }
    & > svg {
        color: ${p => p.theme.beige};
        height: 15px;
        width: 15px;
    }
`;

export const PopularButton = styled.button`
    width: 200px;
    background-color: ${p => p.theme.red};
    text-transform: uppercase;
    border: none;
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
    color: ${p => p.theme.beige};
    margin-bottom: 18px;
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    &:hover, &:focus, &:active {
        background-color: ${p => p.theme.darkRed};
    }
`


export const FilterContainer = styled(motion.div)`
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background-color: ${p => p.theme.decorativeLight};
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 12px;
        background-color: ${p => p.theme.darkRed};
    }
    @media screen and (${devices.maxDesktop}) {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10000;
        overflow-y: scroll;
        height: 100%;
        padding: 20px 50px 10px 20px;
    }
    @media screen and (${devices.tablet}) {
        max-width: 400px;
    }
    @media screen and (${devices.desktop}) {
        background-color: transparent;
    }
`;

export const FilterTitle = styled.p`
    font-size: 22px;
    font-weight: 700;
    color: ${p => p.theme.greyRed};
    @media screen and (${devices.tablet}) {
        font-size: 26px;
    }
`;

export const MobileBackdrop = styled(motion.div)`
    @media screen and (${devices.maxTablet}){
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 110;   
    }
`


export const FilterList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media screen and (${devices.tablet}) {
        flex-flow: wrap;
    }
    @media screen and (${devices.desktop}) {
        gap: 10px;
        border-right: 2px solid ${p => p.theme.red};
        padding: 10px 0;
    }
`;

export const Genre = styled.li`
    cursor: pointer;
    padding: 3px 7px;
    border-radius: 5px;
    width: fit-content;
    &.selected {
        background-color: ${p => p.theme.darkRed};
        color: ${p => p.theme.beige};
    }
`;
