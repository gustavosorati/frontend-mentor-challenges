import { useCart } from '../../hooks/useCart';
import { Button } from './Button/styles';
import { FormHeader } from './FormHeader';
import * as Styled from './styles';

interface Form {
  slideIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export function FormFinishingUp({slideIndex, onNext, onPrev}: Form) {
  const {data} = useCart();

  const totalAddons = data.addons?.reduce((total, addon) => {
    total += Number(addon.price);
    return total;
  }, 0);

  const totalCost = totalAddons ? totalAddons + Number(data.plan?.price) :  Number(data.plan?.price);

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
            ${data.plan?.price}/{data.typeRenovation ? 'ye' : 'mo'}
            </div>
          </Styled.Product>

          <Styled.Line />

          {data.addons?.map((addon) => (
            <Styled.OptionalProduct key={addon.type}>
              <p>{addon.type}</p>
              <span>+{addon.price}/{data.typeRenovation ? 'ye' : 'mo'}</span>
            </Styled.OptionalProduct>
          ))}
        </Styled.CartProducts>

        <Styled.Amount>
          <p>Total (per {data.typeRenovation ? 'yearly' : 'monthly'})</p>
          <span>+{totalCost}/{data.typeRenovation ? 'ye' : 'mo'}</span>
        </Styled.Amount>
      </Styled.CartContent>


      <Styled.Footer slideIndex={slideIndex}>
        <Button onClick={onPrev} variant="SECONDARY">Go Back</Button>
        <Button variant="PRIMARY" onClick={onNext}>Confirm</Button>
      </Styled.Footer>
    </Styled.Container>
  );
}
