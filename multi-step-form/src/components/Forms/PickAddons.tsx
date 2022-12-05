import {useFormContext} from 'react-hook-form';

import { Button } from '../Button/styles';
import { FormHeader } from '../FormHeader';
import { AddonsInput } from '../Input/AddonsInput';
import * as Styled from './styles';

interface Form {
  onNext: () => void;
  onPrev: () => void;
}

export function FormPickAddons({onNext, onPrev}: Form) {
  const {register} = useFormContext();

  return (
    <Styled.Container>
      <FormHeader title='Pick add-ons' subtitle='Add-ons help enhance your gaming experience.' />

      <AddonsInput
        title='Online service'
        description='Access to multiplayer games'
        price='1'
        {...register('addons.onlineService')}
      />
      <AddonsInput
        title='Larger storage'
        description='Extra 1TB of cloud save'
        price='2'
        {...register('addons.largerStorage')}
      />
      <AddonsInput
        title='Customizable Profile'
        description='Custom theme on your profile'
        price='2'
        {...register('addons.customProfile')}
      />


      <Styled.Footer>
        <Button onClick={onPrev} variant="SECONDARY">Go Back</Button>
        <Button onClick={onNext} variant="PRIMARY">Next Step</Button>
      </Styled.Footer>
    </Styled.Container>
  );
}
