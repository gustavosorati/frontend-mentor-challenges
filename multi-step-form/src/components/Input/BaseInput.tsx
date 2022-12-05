import { forwardRef, InputHTMLAttributes } from 'react';
import * as Styled from './styles';

type Input = Partial<InputHTMLAttributes<HTMLInputElement>>

interface BaseInputProps extends Input {
  title: string;
  placeholder: string;
  error?: string | undefined;
}


export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(({title, placeholder, error, ...props}: BaseInputProps, ref) => {
  return (
    <Styled.BaseInputContainer error={error}>
      <p>{title}</p>
      <input
        ref={ref}
        placeholder={placeholder}
        {...props}
      />
      {error && <span className='error'>{error}</span>}
    </Styled.BaseInputContainer>
  );
});
