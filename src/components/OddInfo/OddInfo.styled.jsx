import { devices } from "constants";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const OddWrapper = styled.div`
margin-bottom: 20px;`

export const OptionTitle = styled.p`
    font-size: 20px;
    color: ${props => props.theme.darkRed};
    margin-bottom: 10px;
    font-weight: 700;
`

export const OptionList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media screen and (${devices.maxTablet}) {
        margin: -5px;
    }
    @media screen and (${devices.tablet}) {
        gap: 10px;
    }
`

export const Option = styled(NavLink)`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: ${props => props.theme.beige};
    color: ${props => props.theme.darkRed};
    border-radius: 8px;
    padding: 5px 10px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (${devices.maxTablet}) {
        width: calc((100% - 4 * 5px) / 2);
        margin: 5px;
    }
    & svg {
        height: 30px;
        width: 30px;
    }
    &.active {
        background-color: ${props => props.theme.darkRed};
        color: ${props => props.theme.beige};
        box-shadow: 0px 10px 34px -11px rgba(0,0,0,0.75);
    }
`