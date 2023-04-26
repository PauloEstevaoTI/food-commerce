import { createContext, ReactNode, useEffect, useState} from 'react'

import { toast } from 'react-toastify'
import { snackEmoji } from '../helpers/snackEmoji'

import { SnackData } from '../interfaces/SnackData'

export interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface UpdateCartProps {
  id: number
  snack: string
  newQuantity: number
}

interface RemoveSnackFromCart {
  id: number
  snack: string
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (snack: Snack) =>void
  snackCartIncrement: (snack: Snack) => void;
  snackCartDecrement: (snack: Snack) => void;
  confirmOrder: () => void;
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({children}: CartProviderProps ) {
  //
  const [cart, setCart] = useState<Snack[]>([]);

  function addSnackIntoCart(snack: SnackData): void {

    //buscar

    const snackExistentInCart = cart.find(
      (item) => item.snack === snack.snack && item.id === snack.id,
    )

    console.log(snackExistentInCart);

    // atualizar

    if(snackExistentInCart){
      //console.log('existe');
      const newCart = cart.map((item)=>{
        if(item.id === snack.id) {
          const quantity = item.quantity + 1
          const subtotal = item.price * quantity

          return {...item, quantity, subtotal }
        }

        return item;

      })

      //console.log(`newCart atualização`, newCart)
      toast.success(`Outro(a) ${snackEmoji(snack.snack)} ${snack.name} adicionado com sucesso`);
      setCart(newCart);
      return
    }

    // adição
    const newSnack = { ...snack, quantity: 1, subtotal: snack.price}
    const newCart = [...cart, newSnack] // push de um array

    //console.log('newCart adição', newCart)
    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado com sucesso`);
    setCart(newCart);
  }

  function removeSnackFromCart(snack: Snack){

    const newCart = cart.filter((item)=> !(item.id === snack.id && item.snack === snack.snack))
    setCart(newCart);

  }

  function updateSnackQuantity(snack: Snack, newQuantity: number){
    //buscar

    const snackExistentInCart = cart.find(
      (item) => item.snack === snack.snack && item.id === snack.id,
    )

    if(snackExistentInCart){

      const newCart = cart.map((item)=>{
        if(item.id === snack.id) {

          const quantity = newQuantity;
          const subtotal = item.price * quantity

          return {...item, quantity, subtotal }
        }

        return item;

      })

      setCart(newCart);
      return
    }

  }

  function snackCartIncrement(snack: Snack){
    console.log('increment');
    updateSnackQuantity(snack, snack.quantity + 1)
    toast.success(`Outro(a) ${snackEmoji(snack.snack)} ${snack.name} adicionado com sucesso`);
  }


  function snackCartDecrement(snack: Snack){
    console.log('decrement')

    if(snack.quantity === 1){
      console.log('entrou');
      return
    }else {
      updateSnackQuantity(snack, snack.quantity - 1)
    }

  }


  function confirmOrder() {
    return
  }

  return(
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        snackCartIncrement,
        snackCartDecrement,
        confirmOrder

        }}>
      {children}
    </CartContext.Provider>
  )
}
