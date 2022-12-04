import { useState } from 'react';
import { FormPersonalInfo } from '../components/Forms/PersonalInfo';
import { FormPickAddons } from '../components/Forms/PickAddons';
import { FormSelectPlan } from '../components/Forms/SelectPlan';
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

  function nextSlideIndex() {
    setSlideIndex(prevState => prevState <= 4 ? prevState + 1 : 0);
  }

  function prevSlideIndex() {
    setSlideIndex(prevState => prevState >= 1 ? prevState + -1 : 0);
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
        </Styled.StepController>

        <Styled.MultiStepForm>
          {slideIndex === 1 && <FormPersonalInfo onNext={nextSlideIndex} onPrev={prevSlideIndex} />}
          {slideIndex === 2 && <FormSelectPlan onNext={nextSlideIndex} onPrev={prevSlideIndex}/> }
          {slideIndex === 3 && <FormPickAddons onNext={nextSlideIndex} onPrev={prevSlideIndex}/> }
          {slideIndex === 4 && <FormPersonalInfo onNext={nextSlideIndex} onPrev={prevSlideIndex}/> }

        </Styled.MultiStepForm>
      </Styled.Content>
    </Styled.Container>
  );
}
