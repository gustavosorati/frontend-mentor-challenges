import {useFormContext} from 'react-hook-form';
import { Button } from './Button/styles';
import { FormHeader } from './FormHeader';
import { BaseInput } from './Input/BaseInput';
import * as Styled from './styles';

interface Form {
  onNext: () => void;
  onPrev: () => void;
}


export function FormPersonalInfo({onNext, onPrev}: Form) {
  const {register, formState: { errors, isValid }} = useFormContext();

  function handleNextSlide() {
    if(errors){
      console.log(isValid);

    }
  }

  return (
    <Styled.Container>
      <FormHeader title='Personal Info' subtitle='Please provide your name, email address, and phone number.' />

      <BaseInput
        placeholder='john doe'
        title='Name'
        type="text"
        {...register('name')}
        error={(errors.name?.message as string)}
      />
      <BaseInput
        placeholder='john-doe@email.com'
        title='E-mail Address'
        type="email"
        {...register('email')}
        error={(errors.email?.message as string)}
      />
      <BaseInput
        placeholder='e.g. +1 234 567 890'
        title='Phone Number'
        type="tel"
        {...register('phone')}
        error={(errors.phone?.message as string)}
      />

      <Styled.Footer>
        <div />
        <Button onClick={handleNextSlide} variant="PRIMARY">Next Step</Button>
      </Styled.Footer>
    </Styled.Container>
  );
}
