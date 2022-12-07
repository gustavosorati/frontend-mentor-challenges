import styled from 'styled-components';


export const Container = styled.header`
  width: 100%;
  margin-bottom: 1rem;

  h1 {
    color: ${({theme}) => theme.COLORS['blue-marine']};
    margin-bottom: 8px;
  }

  p {
    color: ${({theme}) => theme.COLORS['gray-cool']};
    font-weight: ${({theme}) => theme['FONT-WEIGHT'][500]};
  }

  @media (max-width: 768px) {
    margin-bottom: 0;

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: .875rem;
    font-weight: ${({theme}) => theme['FONT-WEIGHT'][400]};

    }
  }
`;
