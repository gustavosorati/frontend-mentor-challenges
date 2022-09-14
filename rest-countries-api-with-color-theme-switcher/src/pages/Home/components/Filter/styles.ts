import styled from "styled-components";

export const FilterButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    max-width: 150px;
    
    background-color: transparent;
    border: none;
    

    cursor: pointer;

    span {
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        font-weight: 600;
        background-color: ${({theme}) => theme.base};
        box-shadow: 0 0px 8px 0px rgba(0,0,0,.1);

        border-radius: 6px;


    }

    ul {
        margin-top: 6px;
        list-style: none;
        width: 100%;
        background-color: ${({theme}) => theme.base};
        box-shadow: 0 0px 8px 0px rgba(0,0,0,.1);
        border-radius: 6px;       

        li {
            padding: 1rem;
        }
    }
    

`