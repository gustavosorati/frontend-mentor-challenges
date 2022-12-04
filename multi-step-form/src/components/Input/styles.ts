import styled from 'styled-components';


export const BaseInputContainer = styled.label`
  width: 100%;

  p {
    margin-bottom: .5rem;
    color: ${({theme}) => theme.COLORS['blue-marine']};
    font-weight: ${({theme}) => theme['FONT-WEIGHT'][500]};
    font-size: .875rem;
  }

  input {
    width: 100%;
    padding: 1rem;
    color: ${({theme}) => theme.COLORS['blue-marine']};
    font-weight: ${({theme}) => theme['FONT-WEIGHT'][700]};
    font-size: 1rem;
    border-radius: 8px;
    border: 1.5px solid ${({theme}) => theme.COLORS['gray-light']};
    outline: none;

    &::placeholder {
      color: ${({theme}) => theme.COLORS['gray-cool']};
    }

    &:focus {
      border-color: ${({theme}) => theme.COLORS['blue-purplish']};
    }
  }
`;

export const PriceInputContainer = styled.label`
  width: 140px;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  border-radius: 8px;
  border: 1.5px solid ${({theme}) => theme.COLORS['gray-light']};
  background-color: transparent;
  cursor: pointer;

  &:hover {
    border-color: ${({theme}) => theme.COLORS['blue-purplish']};
  }

  img {
    margin-bottom: 3rem;
    width: 50px;
    height: 50px;
  }

  footer {
    display: flex;
    flex-direction: column;

    strong {
      color: ${({theme}) => theme.COLORS['blue-marine']};
      font-weight: ${({theme}) => theme['FONT-WEIGHT'][700]};
    }

    .price {
      color: ${({theme}) => theme.COLORS['gray-light']};
      font-weight: ${({theme}) => theme['FONT-WEIGHT'][500]};
    }
  }
`;

export const AddonsInputContainer = styled.label`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem;

  background-color: transparent;
  border-radius: 8px;
  border: 1.5px solid ${({theme}) => theme.COLORS['gray-light']};
  cursor: pointer;

  &:hover {
    border-color: ${({theme}) => theme.COLORS['blue-purplish']};
  }

  .services {
    display: flex;
    flex-direction: column;
    flex: 1;

    strong {
      color: ${({theme}) => theme.COLORS['blue-marine']};
      line-height: 140%;
    }

    span {
      color: ${({theme}) => theme.COLORS['gray-cool']};
      font-size: 0.875rem;
    }
  }

  .price {
    color: ${({theme}) => theme.COLORS['blue-purplish']};
  }
`;
