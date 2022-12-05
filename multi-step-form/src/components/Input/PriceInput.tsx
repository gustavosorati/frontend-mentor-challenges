
import {useFormContext} from 'react-hook-form';
import { forwardRef, InputHTMLAttributes, useEffect, useState } from 'react';
import * as Styled from './styles';

interface PriceInputProps extends InputHTMLAttributes<HTMLInputElement>{
  image: string;
  title: string;
  price: string;
}

export const PriceInput = forwardRef<HTMLInputElement, PriceInputProps>(({image, title, price, ...props}: PriceInputProps, ref) => {
  const {watch ,getValues} = useFormContext();
  const [isChecked, setChecked] = useState(false);

  function setWhereIsChecked() {
    const variavel = getValues('plan');

    if(title === variavel){
      setChecked(true);
    } else {
      setChecked(false);
    }
  }

  useEffect(() => {
    setWhereIsChecked();
  }, [watch('plan')]);

  return (
    <Styled.PriceInputContainer checked={isChecked}>
      <input
        type="radio"
        name="plano"
        ref={ref}
        value={title}
        {...props}
      />

      <img src={image} />

      <footer>
        <strong>{title}</strong>
        <span className='price'>${price}/mo</span>
      </footer>

    </Styled.PriceInputContainer>
  );
});
