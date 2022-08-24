import styled from "styled-components";

export const InputElementContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    padding: 0 1rem;
    background-color: ${({theme}) => theme.base};
    box-shadow: 0 0px 8px 0px rgba(0,0,0,.1);
    border-radius: 6px;

    svg {
        color: ${({theme}) => theme.input};;
    }

    input {
        width: 400px;
        border: none;
        padding: 1rem;
        color: ${({theme}) => theme.input};
        font-weight: 600;
        letter-spacing: .5px;
        background-color: transparent;
    }   
`