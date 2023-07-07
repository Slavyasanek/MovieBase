import styled from "styled-components";

export const SwitcherTrack = styled.div`
    width: 60px;
    position: relative;
    border-radius: 15px;
    background-color: ${p => p.theme.greyRed};
    height: 30px;
`;

export const SwitcherButton = styled.div`
    background-color: ${p => p.theme.beige};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: absolute;
    top: -1px;
    left: -1px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    & > svg {
        color: ${p => p.theme.darkRed};
    }
    &.checked {
        transform: translateX(100%);
    }
`;

export const SwitcherInput = styled.input`
    cursor: inherit;
    position: absolute;
    opacity: 0;
    width: 300%;
    height: 100%;
    top: 0px;
    left: -100%;
    margin: 0px;
    padding: 0px;
    z-index: 1;
`;

