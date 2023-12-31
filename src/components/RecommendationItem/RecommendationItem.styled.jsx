import { devices } from "constants";
import styled from "styled-components";
// import { Link } from 'react-router-dom';

export const Recommandation = styled.li`
    width: calc((100% - 4 * 5px) / 2);
    margin: 5px;
    @media screen and (${devices.tablet}) {
        width: calc((100% - 8 * 5px) / 4);
    }
    @media screen and (${devices.desktop}) {
        width: calc((100% - 10 * 5px) / 5);
    }
`

export const PosterWrapper = styled.div`
    position: relative;
    border: 2px solid ${p => p.theme.beige};
`

export const Poster = styled.img`
    height: 200px;
    width: 100%;
    @media screen and (${devices.tablet}) {
        height: 250px;
    }
    @media screen and (${devices.desktop}) {
        height: 320px;
    }
`

    export const Title = styled.p`
    font-size: 16px;
    margin-top: 5px;
    @media screen and (${devices.tablet}) {
        font-size: 18px;
    }
    @media screen and (${devices.desktop}) {
        font-size: 20px;
    }
`

export const RecommendationList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: -5px;
`