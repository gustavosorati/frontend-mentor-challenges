import { Button } from '../Button/styles';
import { FormHeader } from '../FormHeader';
import { AddonsInput } from '../Input/AddonsInput';
import * as Styled from './styles';

export function FormPickAddons() {
  return (
    <Styled.Container>
      <FormHeader title='Pick add-ons' subtitle='Add-ons help enhance your gaming experience.' />

      <AddonsInput name="online-service" title='Online serice' description='Acess to multiplayer games' price='1' />
      <AddonsInput name="larger-storage" title='Larger storage' description='Extra 1TB of cloud save' price='2' />
      <AddonsInput name="custom-profile" title='Customizable Profile' description='Custom theme on your profile' price='2' />

      <Styled.Footer>
        <Button>Go Back</Button>
        <Button variant="PRIMARY">Next Step</Button>
      </Styled.Footer>
    </Styled.Container>
  );
}
