import { devices } from "constants";
import styled from "styled-components";
import { imagePath } from "constants";

export const MovieWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
@media screen and (${devices.tablet}){
    flex-direction: row;
    gap: 30px;
}
@media screen and (${devices.desktop}) {
    gap: 50px;        
}
&::after{
    content: "";
    position: fixed;
    width: 120%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${props => props.back ? `url(${imagePath.default}${props.back})` : `url(${imagePath.oddBackground})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    /* filter: blur(0px); */
    z-index: -1;
    opacity: 0.3;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1); 
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
    margin-right: 5px;
`
export const CompaniesList = styled.ul`
    display: inline-flex;
    align-items: center;
    gap: 5px;
`

export const Company = styled.img`
    width: 50px;
    filter: grayscale(50%);
    @media screen and (${devices.desktop}) {
        width: 120px;
        aspect-ratio: 3/2;
        object-fit: contain;
    }
`

export const HomepageLink = styled.a`
    text-decoration: underline;
    font-weight: 700;
    background-color: ${props => props.theme.beige};
    color: ${props => props.theme.red};
    padding: 2px 3px;
    border-radius: 8px;
    margin-right: 5px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1); 
    &:hover, &:focus {
        background-color: ${props => props.theme.red};
    color: ${props => props.theme.beige};
    }
`