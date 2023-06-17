import { devices } from "constants";
import styled from "styled-components";

export const CastTitle = styled.h2`
margin-bottom: 10px;
`

export const CastList = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: -5px;
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1); 
`;

export const Actor = styled.li`
width: calc((100% - 6 * 5px) / 3);
margin: 5px;
display: flex;
flex-direction: column;
gap: 8px;
padding: 5px;
	box-sizing: border-box;
@media screen and (${devices.tablet}){
    width: calc((100% - 10 * 5px) / 5);
}
@media screen and (${devices.desktop}){
    width: calc((100% - 14 * 5px) / 7);
}
`

export const Photo = styled.img`
    width: 100%;
    height: 150px;
    object-fit: contain;
    object-position: center;
    @media screen and (${devices.tablet}){
        height: 200px;
    }
`

export const ActorCredits = styled.p`
    font-size: 14px;
    font-family: 'Prompt', sans-serif;
    line-height: 1.4;
`