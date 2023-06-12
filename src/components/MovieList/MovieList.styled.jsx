import styled from "styled-components";
import { devices } from "constants";

export const MovieList = styled.ul`
    padding-top: 80px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: -5px;
    @media screen and (${devices.desktop}) {
        margin: -8px;
    }
`