import styled from "styled-components";
import { devices } from "constants";
import { motion } from 'framer-motion';

export const Card = styled(motion.li)`
    width: calc((100% - 5px * 4) / 2);
    margin: 5px;
    background-color: transparent;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1); 
    height: auto;
    @media screen and (${devices.tablet}){
        width: calc((100% - 5px * 6) / 3);
    }
    @media screen and (${devices.desktop}) {
        width: calc((100% - 8px * 8) / 4);
        margin: 8px;
    }
    &:hover, &:focus {
        transform: scale(1.04);
    }
`

export const PosterWrapper = styled.div`
    position: relative;
`

export const Poster = styled(motion.img)`
    height: 220px;
    width: 100%;
    @media screen and (${devices.tablet}) {
        height: 370px;
    } 
    @media screen and (${devices.desktop}) {
        height: 320px;
    } 
`

export const Title = styled.p`
    font-size: 20px;
    text-align: center;
    margin-top: 8px;
`

export const Rate = styled.span`
    position: absolute;
    top: 5px;
    right: 5px;
    color: ${props => props.theme.beige};
    padding: 2px 4px;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.beige};
    ${(props) => {
        switch (props.rateType) {
            case 'good':
                return `background-color: #295f48;`;
            case 'bad':
                return `background-color: #440700`;
            case 'coming': 
                return 'background-color: rgba(0, 0, 0, 0.5)';
            default:
                return `background-color: #295f48;`;
        }
    }}
`