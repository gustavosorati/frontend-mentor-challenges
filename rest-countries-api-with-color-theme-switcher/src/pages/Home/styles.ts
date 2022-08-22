import styled from "styled-components";

export const HomeContainer = styled.main`
    margin: 5rem auto;
    padding: 3rem;
`

export const FiltersContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const PageContainer = styled.div`
    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

`


export const Page = styled.div` 
    padding: 1rem;
    background: ${({theme}) => theme.base};
    border-radius: 6px;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
`