import { useEffect, useRef, useState } from 'react';
import * as Styled from './styles';

type Renovation = 'monthly' | 'yearly';

export function RenovationInput() {
  const [renovation, setRenovation] = useState<Renovation>('monthly');
  const innerRef = useRef<HTMLInputElement>(null);

  function handleTypeRenovation() {
    const input = innerRef.current;
    if(input){
      if(input.checked) {
        setRenovation('yearly');
      } else {
        setRenovation('monthly');
      }
    }
  }

  return (
    <Styled.RenovationInput>
      <input
        type="checkbox"
        value="yearly"
        onChange={handleTypeRenovation}
        ref={innerRef}
      />
      <span className="slider round"></span>
    </Styled.RenovationInput>
  );
}
