import {useForm, FormProvider} from 'react-hook-form';
import { useCart } from '../../hooks/useCart';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from './Button/styles';
import { FormHeader } from './FormHeader';
import { PlanInput } from './Input/PlanInput';
import { RenovationInput } from './Input/RenovationInput';

import * as Styled from './styles';

import schema from '../../../schema.json';

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

const schemaValidation = yup.object({
  plan: yup.string().required(),
  typeRenovation: yup.boolean()
});

export function FormSelectPlan({onNext, onPrev}: Props) {
  const {data, update} = useCart();
  const methods = useForm({
    resolver: yupResolver(schemaValidation),
    defaultValues: {
      plan: data.plan?.type ? data.plan.type : 'Arcade',
      typeRenovation: data.typeRenovation ? data.typeRenovation : false,
    }
  });
  const selectedTypeRenovation = methods.watch('typeRenovation');

  function handleChangePlan(data: any) {
    const selectedData = data.typeRenovation === true
      ? schema.planos.anual.find(bd => {
        if(bd.title === data.plan) {
          return bd;
        }
      }) : schema.planos.mensal.find(bd => {
        if(bd.title === data.plan) {
          return bd;
        }
      });

    update({
      plan: {
        type: data.plan,
        price: selectedData?.price
      },
      typeRenovation: data.typeRenovation,
    });
    onNext();
  }

  return (
    <FormProvider {...methods}>
      <Styled.Container onSubmit={methods.handleSubmit(handleChangePlan)}>
        <FormHeader title='Select your plan' subtitle='You have the option of monthly or yearly billing.' />

        {/* Tipo de Plano */}
        <Styled.InputPriceContainer>
          {selectedTypeRenovation && (
            <>
              {schema.planos.anual.map(el => (
                <PlanInput
                  key={el.title}
                  image={el.image_path}
                  title={el.title}
                  price={el.price}
                  {...methods.register('plan')}
                />
              ))}
            </>
          )}
          {!selectedTypeRenovation && (
            <>
              {schema.planos.mensal.map(el => (
                <PlanInput
                  key={el.title}
                  image={el.image_path}
                  title={el.title}
                  price={el.price}
                  {...methods.register('plan')}
                />
              ))}
            </>
          )}
        </Styled.InputPriceContainer>

        {/* Tipo de Renovação */}
        <Styled.MonthlyPayment>
          <span>Monthly</span>
          <RenovationInput
            {...methods.register('typeRenovation')}
          />
          <span>Yearly</span>
        </Styled.MonthlyPayment>

        <Styled.Footer>
          <Button onClick={onPrev} variant="SECONDARY">Go Back</Button>
          <Button type="submit" variant="PRIMARY">Next Step</Button>
        </Styled.Footer>
      </Styled.Container>
    </FormProvider>
  );
}
