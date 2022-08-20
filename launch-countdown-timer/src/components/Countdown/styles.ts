import styled, { keyframes } from "styled-components";

export const CountdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    p {
        color: ${({theme}) => theme.colors["grayish-blue"]};
        text-transform: uppercase;
        font-size: .675rem;
        font-weight: 400;
    }
`

export const CountdownWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 115px;
    height: 120px;
    box-shadow: 0px 8px 0px 0px ${({theme}) => theme.colors["very-dark-blue-500"]};
    border-radius: 6px;
    position: relative;
    overflow: hidden;

    .section {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;


        width: 100%;
        height: 50%;

        color: ${({theme}) => theme.colors["soft-red"]};
        font-size: 3.5rem;
    }

    .top, .top-flip {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 2rem;
        overflow: hidden;
        line-height: 1;
        display: flex;
        justify-content: center;
        overflow: hidden;
        background-color: ${({theme}) => 'rgb(44, 44, 68)'};
        transform-origin: bottom;

        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    .topFlip {
        /* background-color: ${({theme}) => 'red'}; */
        border-bottom: 1px solid ${({theme}) => theme.colors["very-dark-blue-500"]};
    }

    .bottom, .bottom-flip {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;       
        background-color: ${({theme}) => theme.colors["dark-desaturated-blue"]};
        border-bottom: 1px solid ${({theme}) => theme.colors["very-dark-blue-500"]};
        
        display: flex;
        align-items: end;
        justify-content: center;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        padding: 1.35rem 0;
        transform-origin: top;
        transform-style: preserve-3d;
    }

`

export const Line = styled.div`
    position: absolute;
    top: calc(50%);
    width: 100%;
    height: 1px;
    background-color: ${({theme}) => theme.colors["very-dark-blue-500"]};
    z-index: 50;

    &::after, &::before {
        content: '';
        width: 10px;
        height: 5px;
        position: absolute;
        background-color: ${({theme}) => theme.colors["very-dark-blue-500"]};
        top: calc(50% - 5px);
        z-index: 20;
    }

    &::before {
        left: -5px;
        border-radius: 0 50% 0 0; 
    }

    &::after {
        right: -5px;
        border-radius: 50% 0 0 0; 
    }
    
`

export const LineBottom = styled(Line)`
    &::after, &::before {
        top: 1px;
    }


    &::before {
        left: -5px;
        border-radius: 0 0 50% 0; 
    }

    &::after {
        right: -5px;
        border-radius: 0 0 0 50%; 
    }
`