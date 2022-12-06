import {useForm} from 'react-hook-form';
import { useCart } from '../../hooks/useCart';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from './Button/styles';
import { FormHeader } from './FormHeader';
import { BaseInput } from './Input/BaseInput';

import * as Styled from './styles';

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const schema = yup.object({
  name: yup.string().required('This field is Required'),
  email: yup.string().email().required('This field is Required'),
  phone: yup.string().required('This field is Required'),
});

export function FormPersonalInfo({onNext, onPrev}: Props) {
  const {update} = useCart();

  const {register, formState: { errors, isValid }, handleSubmit, watch} = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  function handleNextSlide(data: FormData) {
    update(data);
    onNext();
  }

  // console.log(watch('name'));
  return (
    <Styled.Container onSubmit={handleSubmit(handleNextSlide)}>
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
        <Button type="submit" variant="PRIMARY">Next Step</Button>
      </Styled.Footer>
    </Styled.Container>
  );
}
