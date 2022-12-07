import { useState } from 'react';
import { FormFinishingUp } from '../components/Forms/FinishingUp';
import { FormPersonalInfo } from '../components/Forms/PersonalInfo';
import { FormPickAddons } from '../components/Forms/PickAddons';
import { FormSelectPlan } from '../components/Forms/SelectPlan';
import * as yup from 'yup';

import * as Styled from './styles';
import { Button } from '../components/Forms/Button/styles';

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

interface FormProps {
  name: string;
  email: string;
  phone: string;
  plan: 'arcade' | 'advanced' | 'pro';
  renovation: 'm' | 'a';
  addons: 'online-service' | 'larger-storage' | 'custom-profile';
}

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
            <Styled.Step key={step.id} isActive={slideIndex === step.id}>
              <div className='circle'>{step.id}</div>
              <div>
                <strong>Step {step.id}</strong>
                <p>{step.title}</p>
              </div>
            </Styled.Step>
          ))}
        </Styled.StepController>

        <Styled.MultiStepForm>
          {slideIndex === 1 && <FormPersonalInfo slideIndex={1} onNext={nextSlideIndex} onPrev={prevSlideIndex} />}
          {slideIndex === 2 && <FormSelectPlan slideIndex={2} onNext={nextSlideIndex} onPrev={prevSlideIndex}/> }
          {slideIndex === 3 && <FormPickAddons slideIndex={3} onNext={nextSlideIndex} onPrev={prevSlideIndex}/> }
          {slideIndex === 4 && <FormFinishingUp slideIndex={4} onNext={nextSlideIndex} onPrev={prevSlideIndex}/> }
        </Styled.MultiStepForm>

      </Styled.Content>
    </Styled.Container>
  );
}
