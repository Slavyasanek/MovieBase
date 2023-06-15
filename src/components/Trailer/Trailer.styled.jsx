import { devices } from "constants";
import styled from "styled-components";

export const Video = styled.iframe`
    height: 200px;
    width: 100%;
    border: none;
    @media screen and (${devices.tablet}) {
        height: 500px;
    }
    @media screen and (${devices.desktop}) {
        height: 700px;
    }
`