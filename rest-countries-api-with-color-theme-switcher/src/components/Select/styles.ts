import styled from "styled-components";

export const SelectElementContainer = styled.select`
    width: 120px;
    border: none;
    padding: 1rem;
    background-color: ${({theme}) => theme.base};
    box-shadow: 0 0px 8px 0px rgba(0,0,0,.1);
    border-radius: 6px;

    -webkit-appearance: none;
    -moz-appearance:    none;
    appearance:         none;
`