import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'PRIMARY' | 'SECONDARY';
}

export const Button = styled.button<ButtonProps>`
  width: 120px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;

  justify-content: ${({theme}) => ''};
  font-weight: ${({theme}) => theme['FONT-WEIGHT'][700]};
  color: ${({theme, variant}) => theme.COLORS['gray-cool']};
  background-color: ${({theme, variant}) => 'transparent'};
  border-color: ${({theme, variant}) => 'transparent'};


  ${({theme, variant}) => variant === 'PRIMARY' && css`
    justify-content: center;
    color: ${theme.COLORS.white};
    background-color: ${theme.COLORS['blue-marine']};
    border-color: ${theme.COLORS['blue-marine']};
    padding: 1rem;
  `}
`;
