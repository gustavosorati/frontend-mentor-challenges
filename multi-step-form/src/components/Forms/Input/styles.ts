import styled from 'styled-components';

interface InputProps {
  error?: string;
}

export const BaseInputContainer = styled.label<InputProps>`
  width: 100%;
  position: relative;

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
    outline: none;

    border: 1.5px solid ${({theme, error}) => error ? theme.COLORS['red-strawberry'] : theme.COLORS['gray-light']};

    &::placeholder {
      color: ${({theme}) => theme.COLORS['gray-cool']};
    }

    &:focus {
      border-color: ${({theme}) => theme.COLORS['blue-purplish']};
    }
  }

  .error {
    position: absolute;
    top: 0;
    right: 0;

    color: ${({theme}) => theme.COLORS['red-strawberry']};
    font-weight: ${({theme}) => theme['FONT-WEIGHT'][700]};
    font-size: .875rem;
  }
`;

interface PriceInputContainerProps {
  error?: string;
  checked?: boolean;
}

export const PriceInputContainer = styled.label<PriceInputContainerProps>`
  position: relative;
  width: 140px;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;

  border: 1.5px solid ${({checked, theme}) => checked ? theme.COLORS['blue-purplish'] : theme.COLORS['gray-light']};
  background-color: ${({checked, theme}) => checked ? theme.COLORS['magnolia'] : 'transparent'};


  &:hover {
    border-color: ${({theme}) => theme.COLORS['blue-purplish']};
  }


  /* input {
    visibility: hidden;
    opacity: 0;
    width: 0px;
    height: 0px;
  } */

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
      color: ${({theme}) => theme.COLORS['gray-cool']};
      font-weight: ${({theme}) => theme['FONT-WEIGHT'][500]};
    }
  }

  .error {
    position: absolute;
    top: 0;
    right: 0;

    color: ${({theme}) => theme.COLORS['red-strawberry']};
    font-weight: ${({theme}) => theme['FONT-WEIGHT'][700]};
    font-size: .875rem;
  }
`;

interface AddonsInputContainerProps {
  checked?: boolean;
}

export const AddonsInputContainer = styled.label<AddonsInputContainerProps>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem;

  background-color: transparent;
  border-radius: 8px;

  cursor: pointer;

  border: 1.5px solid ${({theme, checked}) => checked ? theme.COLORS['blue-purplish'] : theme.COLORS['gray-light']};

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

export const RenovationInput = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 22px;
  dos

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({theme}) => theme.COLORS['blue-marine']};;
    -webkit-transition: .4s;
    transition: .4s;

    &::before {
      position: absolute;
      content: "";
      height: 14px;
      width: 14px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }
  }

  input:checked + .slider {
    background-color: ${({theme}) => theme.COLORS['blue-purplish']};
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  input:focus + .slider {
  box-shadow: 0 0 1px ${({theme}) => theme.COLORS['blue-marine']};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }
`;

