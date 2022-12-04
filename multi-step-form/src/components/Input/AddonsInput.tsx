import { forwardRef } from 'react';
import * as Styled from './styles';

interface AddonsInputProps {
  title: string;
  description: string;
  price: string;
}

export const AddonsInput = forwardRef<HTMLInputElement, AddonsInputProps>(({title, description, price, ...props}: AddonsInputProps, ref) => {
  return (
    <Styled.AddonsInputContainer>

      <input type="checkbox" name="addons" id="addons" {...props} ref={ref} />

      <div className="services">
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

      <span className='price'>${price}/mo</span>
    </Styled.AddonsInputContainer>
  );
});
