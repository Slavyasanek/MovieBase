import { motion } from "framer-motion";
import styled from "styled-components";

export const Menu = styled(motion.div)`
    height: 100%;
    background-color: ${p => p.theme.red};
    width: 50%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10000;
    border-left: 2px solid ${p => p.theme.darkRed};
    padding: 20px;
    pointer-events: all;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Links = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 50%;
    border: none;
    background-color: ${p => p.theme.darkRed};
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover, &:focus, &:active {
        background-color: ${p => p.theme.decorativeLight};
    }
    & > svg {
        width: 18px;
        height: 20px;
        color: ${p => p.theme.beige};
    }
`;

