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
`;
