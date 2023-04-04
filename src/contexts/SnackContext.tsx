import { createContext, useState, useEffect, ReactNode } from 'react';

import { SnackData } from '../interfaces/SnackData';
import { getBebidas, getBurguers, getPizzas, getSorvetes } from '../services/api'


interface SnackContextProps {
  burgers: SnackData[];
  pizzas: SnackData[];
  drinks: SnackData[];
  iceCreams: SnackData[];
}
interface SnackProviderProps{
  children: ReactNode;
}

export const SnackContext = createContext({} as SnackContextProps);

export function SnackProvider( {children}: SnackProviderProps ){

  const [burgers, setBurguers] = useState<SnackData[]>([]);
  const [pizzas, setPizzas] = useState<SnackData[]>([]);
  const [drinks, setDrinks] = useState<SnackData[]>([]);
  const [iceCreams, setIceCreams] = useState<SnackData[]>([]);

  useEffect(() => {
    (async () => {

      try{

        const burguerRequest = await getBurguers();
        const pizzaRequest = await getPizzas();
        const drinksRequest = await getBebidas();
        const iceCreamRequest = await getSorvetes();

        const requests = [burguerRequest, pizzaRequest, drinksRequest, iceCreamRequest]

        const  [
          {data: burgerResponse},
          {data: pizzaResponse},
          {data: drinksResponse},
          {data: iceCreamResponse},
        ] = await Promise.all(requests)

        setBurguers(burgerResponse)
        setPizzas(pizzaResponse)
        setDrinks(drinksResponse)
        setIceCreams(iceCreamResponse)
      }catch (error){
        console.error(error)
      }
    })()


  },[])

  return (
    <SnackContext.Provider value={{burgers, pizzas, drinks, iceCreams}}>
      {children}
    </SnackContext.Provider>
  )

}
