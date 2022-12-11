
import {useFormContext} from 'react-hook-form';
import { forwardRef, InputHTMLAttributes, useEffect, useState } from 'react';
import * as Styled from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  image: string;
  title: string;
  price: string;
}

export const PlanInput = forwardRef<HTMLInputElement, Props>(({
  image,
  title,
  price,
  ...props
}: Props,
ref) => {
  const [isChecked, setChecked] = useState(false);

  const {watch, getValues} = useFormContext();

  function setWhichInputIsChecked() {
    const variavel = getValues('plan');
    if(title === variavel){
      setChecked(true);
    } else {
      setChecked(false);
    }
  }

  useEffect(() => {
    setWhichInputIsChecked();
  }, [watch('plan')]);

  return (
    <Styled.PriceInputContainer checked={isChecked}>
      <input
        ref={ref}
        type="radio"
        name="plano"
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

