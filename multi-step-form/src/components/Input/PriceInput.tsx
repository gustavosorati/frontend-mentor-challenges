
import * as Styled from './styles';

interface PriceInputProps {
  image: string;
  title: string;
  price: string;
}

export function PriceInput({image,title, price}: PriceInputProps) {
  return (
    <Styled.PriceInputContainer>
      <img src={image} />

      <footer>
        <strong>{title}</strong>
        <span className='price'>${price}/mo</span>
      </footer>
    </Styled.PriceInputContainer>
  );
}
