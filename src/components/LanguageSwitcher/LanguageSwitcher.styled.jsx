import Flag from "react-flagkit";
import styled from "styled-components";

export const LanguageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const StyledFlag = styled(Flag)`
    width: auto;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    mix-blend-mode: luminosity;
    &.selected {
        mix-blend-mode: normal;
        border-color: ${p=> p.theme.greyRed}
    }
`;
