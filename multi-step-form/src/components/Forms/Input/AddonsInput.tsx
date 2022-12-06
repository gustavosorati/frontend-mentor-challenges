import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import {useFormContext} from 'react-hook-form';

import * as Styled from './styles';
import { useRef } from 'react';

interface AddonsInputProps {
  title: string;
  description: string;
  price: string;
}

export const AddonsInput = forwardRef<HTMLInputElement, AddonsInputProps>(({title, description, price, ...props}: AddonsInputProps, ref) => {
  const {watch, getValues} = useFormContext();
  const innerRef = useRef<HTMLInputElement>(null);
  const [isChecked, setChecked] = useState(innerRef.current?.checked);

  useImperativeHandle(ref, () => innerRef.current!);

  function setWhereIsChecked() {
    setChecked(innerRef.current?.checked);
  }

  useEffect(() => {
    setWhereIsChecked();
  }, [watch('addons')]);

  return (
    <Styled.AddonsInputContainer checked={innerRef.current?.checked}>

      <input
        type="checkbox"
        name="addons"
        id="addons"
        {...props}
        ref={innerRef}
      />

      <div className="services">
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

      <span className='price'>${price}/mo</span>
    </Styled.AddonsInputContainer>
  );
});
