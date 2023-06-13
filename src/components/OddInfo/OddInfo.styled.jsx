import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const OptionTitle = styled.p`
    font-size: 20px;
    color: ${props => props.theme.red};
    margin-bottom: 10px;
    font-weight: 700;
`

export const OptionList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const Option = styled(NavLink)``