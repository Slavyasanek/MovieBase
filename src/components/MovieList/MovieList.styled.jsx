import styled from "styled-components";
import { devices } from "constants";

export const ListWrapper = styled.ul`
    padding-top: 80px;
    padding-bottom: 80px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: -5px;
    @media screen and (${devices.desktop}) {
        margin: -8px;
    }
`