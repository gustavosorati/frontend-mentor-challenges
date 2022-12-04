import { Button } from '../Button/styles';
import { FormHeader } from '../FormHeader';
import { BaseInput } from '../Input';
import * as Styled from './styles';

export function FormPersonalInfo() {
  return (
    <Styled.Container>
      <FormHeader title='Personal Info' subtitle='Please provide your name, email address, and phone number.' />

      <BaseInput placeholder='john doe' title='Name' type="text" />
      <BaseInput placeholder='john-doe@email.com' title='E-mail Address' type="email" />
      <BaseInput placeholder='e.g. +1 234 567 890' title='Phone Number' type="tel" />

      <Styled.Footer>
        <div />
        <Button>Next Step</Button>
      </Styled.Footer>
    </Styled.Container>
  );
}
