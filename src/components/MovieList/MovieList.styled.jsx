import styled from "styled-components";
import { devices } from "constants";

export const ListWrapper = styled.ul`
    padding-bottom: 40px;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: -5px;
    @media screen and (${devices.desktop}) {
        margin: -8px;
    }
`

export const Pagination = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (${devices.desktop}) {
        min-width: 800px;
    }
`;
