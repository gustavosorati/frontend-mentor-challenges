import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${animation} 400ms ease-in-out forwards;
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
  gap: 2rem;
  background-color: ${({theme}) => theme.COLORS['alabaster']};
  border-radius: 8px;

  span {
    font-weight: ${({theme}) => theme['FONT-WEIGHT']['700']};
    color: ${({theme}) => theme.COLORS['blue-marine']};
  }
`;

export const CartContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: .5rem;
  padding: 1rem;
  border-radius: 8px;
`;

export const CartProducts = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS['magnolia']};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    strong {
      font-weight: ${({theme}) => theme['FONT-WEIGHT']['700']};
      color: ${({theme}) => theme.COLORS['blue-marine']};
      line-height: 140%;
    }

    span {
      color: ${({theme}) => theme.COLORS['gray-cool']};
      font-size: 0.875rem;
      cursor: pointer;

      &:hover {
        color: ${({theme}) => theme.COLORS['blue-purplish']};
        text-decoration: underline;
      }
    }
  }

  .price {
    font-weight: ${({theme}) => theme['FONT-WEIGHT']['700']};
    color: ${({theme}) => theme.COLORS['blue-marine']};
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({theme})  => theme.COLORS['gray-light']};
`;

export const OptionalProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({theme})  => theme.COLORS['gray-cool']};
  font-size: .875rem;

  span {
    color: ${({theme})  => theme.COLORS['blue-marine']};
    font-weight: ${({theme})  => theme['FONT-WEIGHT'][500]};
  }
`;

export const Amount = styled(OptionalProduct)`
  padding: 1rem;

  span {
    font-size: 1.3rem;
    color: ${({theme})  => theme.COLORS['blue-purplish']};
    font-weight: ${({theme})  => theme['FONT-WEIGHT'][700]};
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

