import {useContext, createContext, ReactNode} from 'react';

type ShoppingCartProviderProps = {
  children: ReactNode
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  IncreaseCartQuantity: (id: number) => void
  DecreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart () {
  return (
    useContext(ShoppingCartContext)
  )
}

export function ShoppingCartContextProvider ({children}: ShoppingCartProviderProps) {
  return (
    <ShoppingCartContext.Provider value={{}}>
    {children}
    </ShoppingCartContext.Provider>
  )
}

