import styled from "styled-components";

export const CountryContainer = styled.main`
    margin: 2rem auto;
    padding: 3rem;

    font-size: 0.875rem;
`

export const Button = styled.button`
    background: ${({theme}) => theme.base};
    border: none;
    display: flex;
    border-radius: 6px;
    margin-bottom: 4rem;
    box-shadow: 0 0px 10px  rgba(0,0,0,.1);
    
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: .5rem 2rem;
    }
`

export const CountryContent = styled.div`
    display: grid;
    grid-template-columns: .7fr 1fr;
    align-items: center;
    justify-content: center;


    img {
        width: 100%;
        height: 320px;
    }

    > div {
        margin-left: 8rem;

        h1 {
            font-size: 1.5rem;
            margin-bottom: 3rem;
        }
    }
`

export const CountryInformations = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: ${({theme}) => theme["text-500"]};

    strong {
        font-weight: 600;
    }

    li, p {
        display: flex;
        gap: 12px;
        font-weight: 300;
    }

`

export const BorderCountriesContainer = styled.div`
    margin-top: 5rem;
    display: flex;
    align-items: center;
    
    
    gap: 1rem;

    div {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;

        span {
            background-color: ${({theme}) => theme.base};
            box-shadow: 0 0px 10px  rgba(0,0,0,.1);
            padding: 0.5rem;
            border-radius: 6px;
        }

    }
`