import * as Styled from './styles';

interface AddonsInputProps {
  name: string;
  title: string;
  description: string;
  price: string;
}

export function AddonsInput({name, title, description, price}: AddonsInputProps) {
  return (
    <Styled.AddonsInputContainer>

      <input type="checkbox" name="addons" id="addons" checked />

      <div className="services">
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

      <span className='price'>${price}/mo</span>
    </Styled.AddonsInputContainer>
  );
}
