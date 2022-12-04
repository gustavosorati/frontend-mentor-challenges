import * as Styled from './styles';

interface Props {
  title: string;
  subtitle:string;
}

export function FormHeader({title, subtitle}: Props) {
  return (
    <Styled.Container>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </Styled.Container>
  );
}
