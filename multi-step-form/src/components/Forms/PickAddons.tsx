/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {FormProvider, useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCart } from '../../hooks/useCart';

import { Button } from './Button/styles';
import { FormHeader } from './FormHeader';
import { AddonsInput } from './Input/AddonsInput';

import * as Styled from './styles';

import schema from '../../../schema.json';


interface Form {
  onNext: () => void;
  onPrev: () => void;
}

const shemaValidation = yup.object({
  addons: yup.object().shape({
    onlineService: yup.boolean(),
    largerStorage: yup.boolean(),
    customProfile: yup.boolean(),
  }),
});

export function FormPickAddons({onNext, onPrev}: Form) {
  const {data, update} = useCart();

  const addonsSchema = data.typeRenovation ? schema.addons.anual : schema.addons.mensal;

  const onlineServiceSelected = data.addons?.find(addon => addon.type === 'Online Service');
  const largerStorageSelected = data.addons?.find(addon => addon.type === 'Larger storage');
  const customProfileSelected = data.addons?.find(addon => addon.type === 'Customizable Profile');

  const methods = useForm({
    resolver: yupResolver(shemaValidation),
    defaultValues: {
      addons: {
        onlineService: onlineServiceSelected ? true : false,
        largerStorage: largerStorageSelected ? true : false,
        customProfile: customProfileSelected ? true : false,
      }
    }
  });

  function handleUpdateCart(dataAddons: any){
    const products = [];

    if(dataAddons.addons.onlineService) {
      console.log('1');
      products.push({
        type: addonsSchema[0].head!,
        price: addonsSchema[0].price
      });
    }

    if(dataAddons.addons.largerStorage) {
      console.log('2');

      products.push({
        type: addonsSchema[1].head!,
        price: addonsSchema[1].price
      });
    }

    if(dataAddons.addons.customProfile) {
      console.log('3');

      products.push({
        type: addonsSchema[2].head!,
        price: addonsSchema[2].price
      });
    }

    update({ addons: products });
    onNext();
  }

  return (
    <FormProvider {...methods}>
      <Styled.Container onSubmit={methods.handleSubmit(handleUpdateCart)}>
        <FormHeader title='Pick add-ons' subtitle='Add-ons help enhance your gaming experience.' />

        <AddonsInput
          title={addonsSchema[0].head!}
          description={addonsSchema[0].description!}
          price={addonsSchema[0].price!}
          {...methods.register('addons.onlineService')}
        />
        <AddonsInput
          title={addonsSchema[1].head!}
          description={addonsSchema[1].description!}
          price={addonsSchema[1].price!}
          {...methods.register('addons.largerStorage')}
        />
        <AddonsInput
          title={addonsSchema[2].head!}
          description={addonsSchema[2].description!}
          price={addonsSchema[2].price!}
          {...methods.register('addons.customProfile')}
        />

        <Styled.Footer>
          <Button onClick={onPrev} variant="SECONDARY">Go Back</Button>
          <Button type='submit' variant="PRIMARY">Next Step</Button>
        </Styled.Footer>

      </Styled.Container>
    </FormProvider>
  );
}
