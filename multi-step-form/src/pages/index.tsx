import { useState } from 'react';
import * as Styled from './styles';


const steps = [
  {
    id: 1,
    title: 'your info'
  },
  {
    id: 2,
    title: 'select plan'
  },
  {
    id: 3,
    title: 'add-ons'
  },
  {
    id: 4,
    title: 'summary'
  },
];


export function Home() {
  const [slideIndex, setSlideIndex] = useState(1);

  function handleChangeSlideIndex(id: number) {
    setSlideIndex(id);
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.StepController>
          {steps.map(step => (
            <Styled.Step key={step.id} isActive={slideIndex === step.id} onClick={() => handleChangeSlideIndex(step.id)}>
              <div className='circle'>{step.id}</div>
              <div>
                <strong>Step {step.id}</strong>
                <p>{step.title}</p>
              </div>
            </Styled.Step>
          ))}

          <form>

          </form>

        </Styled.StepController>


      </Styled.Content>
    </Styled.Container>
  );
}
