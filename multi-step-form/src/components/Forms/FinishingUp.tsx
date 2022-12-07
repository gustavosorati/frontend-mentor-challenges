import { useCart } from '../../hooks/useCart';
import { Button } from './Button/styles';
import { FormHeader } from './FormHeader';
import * as Styled from './styles';

interface Form {
  onNext: () => void;
  onPrev: () => void;
}

export function FormFinishingUp({onNext, onPrev}: Form) {
  const {data} = useCart();

  return (
    <Styled.Container>
      <FormHeader title='Finishing up' subtitle='Double-check everthing looks OK before confirming.' />

      <Styled.CartContent>
        <Styled.CartProducts>
          <Styled.Product>
            <div>
              <strong>{data.plan?.type} (Monthly)</strong>
              <span>Change</span>
            </div>

            <div className="price">
            ${data.plan?.price}/mo
            </div>
          </Styled.Product>

          <Styled.Line />

          {data.addons?.map((addon) => (
            <Styled.OptionalProduct key={addon.type}>
              <p>{addon.type}</p>
              <span>+{addon.price}/mo</span>
            </Styled.OptionalProduct>
          ))}
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
