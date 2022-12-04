
import { forwardRef } from 'react';
import * as Styled from './styles';

interface PriceInputProps {
  image: string;
  title: string;
  price: string;
}

export const PriceInput = forwardRef<HTMLInputElement, PriceInputProps>(({image,title, price, ...props}: PriceInputProps, ref) => {

  return (
    <Styled.PriceInputContainer>
      <input type="radio" name="plano" value={title} ref={ref} {...props} />

      <img src={image} />

      <footer>
        <strong>{title}</strong>
        <span className='price'>${price}/mo</span>
      </footer>
    </Styled.PriceInputContainer>
  );
});
