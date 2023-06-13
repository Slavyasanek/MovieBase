import { devices } from "constants";
import styled from "styled-components";

export const MovieWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
@media screen and (${devices.tablet}){
    flex-direction: row;
    gap: 30px;
}
@media screen and (${devices.desktop}) {
    gap: 50px;        
}
`
export const PosterWrapper = styled.div`
    border: 2px solid ${props => props.theme.red};
    @media screen and (${devices.tablet}) {
        height: 100%;
        width: 40%;
        flex-shrink: 0;
    }
    @media screen and (${devices.desktop}) {
        width: 30%;
    }
`

export const Slogan = styled.li`
    font-style: italic;
    font-size: 16px;
    @media screen and (${devices.tablet}) {
        font-size: 14px;
    }
`

export const Poster = styled.img`
    object-fit: cover;
    width: 100%;
    height: auto;
`

export const MovieData = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 8px;
   font-size: 16px;
   @media screen and (${devices.desktop}) {
     font-size: 20px;
     gap: 12px;
     line-height: 1.2;
    }
`

export const MovieDetail = styled.span`
    background-color: ${props => props.theme.red};
    color: ${props => props.theme.beige};
    padding: 2px 3px;
    border-radius: 8px;
`