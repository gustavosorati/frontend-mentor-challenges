import { forwardRef, useImperativeHandle, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { useCart } from '../../../hooks/useCart';
import * as Styled from './styles';

// type Renovation = 'monthly' | 'yearly';

export const  RenovationInput = forwardRef<HTMLInputElement>(({...props }, ref) => {
  const {data, update} = useCart();
  const {watch ,setValue} = useFormContext();
  const innerRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => innerRef.current!);

  function handleTypeRenovation() {
    const input = innerRef.current;

    update({typeRenovation: input?.checked});
  }

  return (
    <Styled.RenovationInput>
      <input
        type="checkbox"
        ref={innerRef}
        {...props}
        // defaultChecked={data.typeRenovation}
        onClick={handleTypeRenovation}
      />
      <span className="slider round"></span>
    </Styled.RenovationInput>
  );
});
