import styled, { css } from 'styled-components';

interface ButtonProps {
  type?: string;
  variant?: 'PRIMARY' | 'SECONDARY';
}

export const Button = styled.button.attrs<ButtonProps>(({variant, type}) => ({
  type: type ? type : 'button',
  variant: variant
}))<ButtonProps>`
  width: 120px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;

  justify-content: '';
  font-weight: ${({theme}) => theme['FONT-WEIGHT'][700]};
  color: ${({theme}) => theme.COLORS['gray-cool']};
  background-color: transparent;
  border-color: transparent;

  ${({theme, variant}) => variant === 'PRIMARY' && css`
    justify-content: center;
    color: ${theme.COLORS.white};
    background-color: ${theme.COLORS['blue-marine']};
    border-color: ${theme.COLORS['blue-marine']};
    padding: 1rem;
  `}
`;
