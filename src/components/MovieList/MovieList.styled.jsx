import styled from "styled-components";
import { devices } from "constants";
import ReactPaginate from "react-paginate";

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

export const MoviePagination = styled(ReactPaginate)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 4px;
    justify-content: center;
    li a {
        width: 20px;
        background-color: ${p => p.theme.beige};
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
        border-radius: 8px;
        color: ${p => p.theme.darkRed};
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        @media screen and (${devices.desktop}) {
            padding: 10px 20px;
        }
    }
    li.selected a {
        background-color: ${p => p.theme.red};
        color: ${p => p.theme.beige};
    }
    li.disabled a {
        background-color: ${p => p.theme.mainFont};
        color: #e7e7e7;
    }
`;
