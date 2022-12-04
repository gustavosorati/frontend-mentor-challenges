import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateY(0);
  }
`;



export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${animation} 300ms ease forwards;
`;

export const InputPriceContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const MonthlyPayment = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS['alabaster']};
  border-radius: 8px;

  span {
    font-weight: ${({theme}) => theme['FONT-WEIGHT']['700']};;
    color: ${({theme}) => theme.COLORS['blue-marine']};;
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

