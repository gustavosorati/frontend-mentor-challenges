import styled from 'styled-components';


export  const BaseInputContainer = styled.label`
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
