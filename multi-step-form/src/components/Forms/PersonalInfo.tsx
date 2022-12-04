import {useFormContext} from 'react-hook-form';
import { Button } from '../Button/styles';
import { FormHeader } from '../FormHeader';
import { BaseInput } from '../Input/BaseInput';
import * as Styled from './styles';

interface Form {
  onNext: () => void;
  onPrev: () => void;
}


export function FormPersonalInfo({onNext, onPrev}: Form) {
  const {register} = useFormContext();

  return (
    <Styled.Container>
      <FormHeader title='Personal Info' subtitle='Please provide your name, email address, and phone number.' />

      <BaseInput placeholder='john doe' title='Name' type="text" {...register('name')} />
      <BaseInput placeholder='john-doe@email.com' title='E-mail Address' type="email" {...register('email')}  />
      <BaseInput placeholder='e.g. +1 234 567 890' title='Phone Number' type="tel" {...register('phone')}/>

      <Styled.Footer>
        <div />
        <Button onClick={onNext} variant="PRIMARY">Next Step</Button>
      </Styled.Footer>
    </Styled.Container>
  );
}
