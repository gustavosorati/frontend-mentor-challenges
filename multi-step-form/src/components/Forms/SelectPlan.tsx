import {useFormContext} from 'react-hook-form';

import { Button } from '../Button/styles';
import { FormHeader } from '../FormHeader';
import { PriceInput } from '../Input/PriceInput';
import * as Styled from './styles';
import arcade from '../../assets/images/icon-arcade.svg';
import advanced from '../../assets/images/icon-advanced.svg';
import pro from '../../assets/images/icon-pro.svg';


const inputs = [
  {
    image_path: arcade,
    title: 'Arcade',
    price: '9'
  },
  {
    image_path: advanced,
    title: 'Advanced',
    price: '9'
  },
  {
    image_path: pro,
    title: 'Pro',
    price: '15'
  },
];

interface Form {
  onNext: () => void;
  onPrev: () => void;
}


export function FormSelectPlan({onNext, onPrev}: Form) {
  const {register,watch} = useFormContext();

  console.log(watch('plan'));
  return (
    <Styled.Container>
      <FormHeader title='Select your plan' subtitle='You have the option of monthly or yearly billing.' />

      <Styled.InputPriceContainer>
        {inputs.map(el => (
          <PriceInput key={el.title} image={el.image_path} title={el.title} price={el.price} {...register('plan')} />
        ))}
      </Styled.InputPriceContainer>

      <Styled.MonthlyPayment>
        <span>Monthly</span>
      </Styled.MonthlyPayment>

      <Styled.Footer>
        <Button onClick={onPrev} variant="SECONDARY">Go Back</Button>
        <Button onClick={onNext} variant="PRIMARY">Next Step</Button>
      </Styled.Footer>
    </Styled.Container>
  );
}
