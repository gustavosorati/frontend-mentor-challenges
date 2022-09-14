import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.base};
    box-shadow: 0px 10px 15px 0 rgba(0,0,0,.1);
    border-radius: 6px;

    max-width: 280px;
    width: 100%;

    a {
        > div {
            width: 100%;
            height: 172px;
        }

        img {
            width: 100%;
            height: 100%;
            border-radius: 6px 6px 0 0;
        }
    }
    

    

`

export const BasicInformationContainer = styled.div`
    padding: 0 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 12px;



`