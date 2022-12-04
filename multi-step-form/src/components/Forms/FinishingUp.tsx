import { Button } from '../Button/styles';
import { FormHeader } from '../FormHeader';
import * as Styled from './styles';

interface Form {
  onNext: () => void;
  onPrev: () => void;
}

export function FormFinishingUp({onNext, onPrev}: Form) {
  return (
    <Styled.Container>
      <FormHeader title='Finishing up' subtitle='Double-check everthing looks OK before confirming.' />

      <Styled.CartContent>
        <Styled.CartProducts>
          <Styled.Product>
            <div>
              <strong>Acarde (Monthly)</strong>
              <span>Change</span>
            </div>

            <div className="price">
            $9/mo
            </div>
          </Styled.Product>

          <Styled.Line />

          <Styled.OptionalProduct>
            <p>Online service</p>
            <span>+1/mo</span>
          </Styled.OptionalProduct>

          <Styled.OptionalProduct>
            <p>Larger Storage</p>
            <span>+2/mo</span>
          </Styled.OptionalProduct>
        </Styled.CartProducts>

        <Styled.Amount>
          <p>Total (per mounth)</p>
          <span>+12/mo</span>
        </Styled.Amount>
      </Styled.CartContent>


      <Styled.Footer>
        <Button onClick={onPrev} variant="SECONDARY">Go Back</Button>
        <Button variant="PRIMARY" type="submit">Confirm</Button>
      </Styled.Footer>
    </Styled.Container>
  );
}
