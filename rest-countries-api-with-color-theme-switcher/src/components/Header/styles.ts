import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px 1px rgba(0,0,0,.1);

    > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 3rem;
    }
`

export const ThemeContainer = styled.div`
    display: flex;
`

export const CountriesContainer = styled.section`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
`