import styled from "styled-components";

interface HomeContainerProps {
    images: string[];
}

export const HomeContainer = styled.main<HomeContainerProps>`
    width: 100%;
    height: 100vh;
    background: ${({ images }) => `
        url(${images[0]}) no-repeat bottom,
        url(${images[1]}) repeat center,
        linear-gradient(
            180deg,
            rgba(30,30,42,255) 0%, rgba(33,29,43,255) 60%, rgba(36,29,44,255) 100%
        )`};
    background-size: 100%;   

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        margin: 2.5rem;

        .social {
            display: flex;
            align-items: center;
            gap: 2rem;
        }

        p {
            color: ${({theme}) => theme.colors["grayish-blue"]};
            letter-spacing: 1px;
        }
    }
`

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
 
    h1 {
        color: ${({theme}) => theme.colors.white};
        font-size: 2rem;
        text-transform: uppercase;
        letter-spacing: 10px;

        margin-bottom: 5rem;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    footer {
        
    }
`
