import { devices } from "constants";
import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    min-width: 320px;
    padding-left: 15px;
    padding-right: 15px;
    @media screen and (${devices.mobile}) {
        max-width: 320px;
    }
    @media screen and (${devices.tablet}) {
      max-width: 768px;
    }
    @media screen and (${devices.desktop}){
        max-width: 1200px;
    }
`