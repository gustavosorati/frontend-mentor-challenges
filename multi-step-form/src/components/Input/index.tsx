import { forwardRef, InputHTMLAttributes } from 'react';
import * as Styled from './styles';

type Input = Partial<InputHTMLAttributes<HTMLInputElement>>

interface BaseInputProps extends Input {
  title: string;
  placeholder: string;
  error?: string;
}


export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(({title, placeholder, ...props}: BaseInputProps, ref) => {
  return (
    <Styled.BaseInputContainer>
      <p>{title}</p>
      <input
        ref={ref}
        placeholder={placeholder}
        {...props}
      />
    </Styled.BaseInputContainer>
  );
});
