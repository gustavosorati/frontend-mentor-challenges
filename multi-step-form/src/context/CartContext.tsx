import { useState, createContext, useContext, ReactNode } from 'react';

interface ICart {
  name?: string;
  email?: string;
  phone?: string;
  plan?: {
    type: string;
    price: string | undefined;
  }
  typeRenovation?: boolean;
}

interface CartContextProps {
  data: ICart;
  update(values: ICart): void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
  children: ReactNode;
}

export default function CartProvider({ children }: CartProviderProps) {
  const [data, setData] = useState<ICart>({
    name: '',
    email: '',
    phone: '',
    plan: {
      type: 'Pro',
      price: ''
    },
    typeRenovation: false
  } as ICart);

  const update = (values: ICart) => {

    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  console.log(data);
  return (
    <CartContext.Provider value={{data, update}}>
      {children}
    </CartContext.Provider>
  );
}
