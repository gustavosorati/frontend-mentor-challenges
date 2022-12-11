
import {useFormContext} from 'react-hook-form';
import { forwardRef, InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import * as Styled from './styles';
import { useCart } from '../../../hooks/useCart';

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
  const {data, update} = useCart();
  const [isChecked, setChecked] = useState(false);

  const {register, watch, getValues} = useFormContext();

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

      <object id={title} data={image} type="image/svg+xml" />
      {/* <img src={image} /> */}

      <footer>
        <strong>{title}</strong>
        <span className='price'>${price}/mo</span>
      </footer>

    </Styled.PriceInputContainer>
  );
});

