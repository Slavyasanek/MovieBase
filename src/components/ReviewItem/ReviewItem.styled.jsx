import { devices } from "constants";
import styled from "styled-components";

export const Review = styled.li`
display: flex;
flex-direction: column;
background-color: ${props => props.theme.beige};
padding: 20px 10px;
border-radius: 8px;
@media screen and (${devices.tablet}){
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
}
@media screen and (${devices.desktop}) {
    padding: 20px;
}
`

export const AvatarWrapper = styled.div`
border-radius: 50%;
width: 100px;
height: 100px;
overflow: hidden;
border: 4px solid ${props => props.theme.darkRed};
background-color: ${props => props.theme.decorativeLight};
`

export const Avatar = styled.img`
width: 100%;
height: auto;
object-fit: cover;
object-position: center;
`

export const Data = styled.div`
display: flex;
@media screen and (${devices.maxTablet}){
    justify-content: space-between;
    margin-bottom: 20px;
}
@media screen and (${devices.tablet}) {
    flex-direction: column;
    gap: 10px;
    width: 120px;
}
@media screen and (${devices.desktop})  {
    width: 200px;
    align-items: center;
}
`

export const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media screen and (${devices.maxTablet}) {
        align-items: flex-end;
    }
`

export const Username = styled.p`
color: ${props => props.theme.beige};
background-color: ${props => props.theme.darkRed};
border-radius: 8px;
padding: 5px 10px;
font-size: 18px;
word-break: break-all;
width: fit-content;
text-align: center;
align-self: center;
`
export const SingleData = styled.p`
 font-size: 15px;
`
export const Comment = styled.p`
font-size: 14px;
font-family: 'Prompt', sans-serif;
line-height: 1.2;
@media screen and (${devices.tablet}) {
    width: 620px;
    font-size: 16px;
}
@media screen and (${devices.desktop}) {
    width: 100%;
}
`

export const Rate = styled.span`
    color: ${props => props.theme.decorativeLight};
    padding: 4px;
    border-radius: 8px;
    ${(props) => {
        switch (props.rateType) {
            case 'good':
                return `background-color: #295f48;`;
            case 'bad':
                return `background-color: #440700`;
            default:
                return `background-color: #295f48;`;
        }
    }}
`