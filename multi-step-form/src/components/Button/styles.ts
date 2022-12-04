import styled from 'styled-components';


export const Button = styled.button`
  width: 120px;
  font-weight: ${({theme}) => theme['FONT-WEIGHT'][700]};
  color: ${({theme}) => theme.COLORS.white};
  background-color: ${({theme}) => theme.COLORS['blue-marine']};
  border-radius: 6px;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
