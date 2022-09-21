import {useState, useContext, createContext, ReactNode} from 'react';

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

const [cartItems,setCartItems] = useState()

const getItemQuantity = (id) => cartItems.find(item => item.id === id)?.quantity || 0;

const IncreaseCartQuantity = (id) => {
  setCartItems(currItems => {

   if(currItems.find(item => item.id === id) == null){
    return([...currItems, id: id, quantity: 1])
  } else {
    return([...currItems, item: id, quantity: quantity + 1])
  }
 }
)
}   

const DecreaseCartQuantity = (id) => {
  setCartItems(currItems => {

   if(currItems.find(item => item.id === id)?.quantity == 1){
    return(currItems.filter(item => item.id !== id))
  } else {
    return([...currItems, item: id, quantity: quantity - 1])
  }
 }
)
}

const removeFromCart = (id) => {
  setCartItems(currItems => return(currItems.filter(item => item.id !== id)))
}



export function useShoppingCart () {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartContextProvider ({children}: ShoppingCartProviderProps) {
  return (
    <ShoppingCartContext.Provider value={{
      removeFromCart, 
      DecreaseCartQuantity, 
      getItemQuantity
      IncreaseCartQuantity }}>

    {children}
    
    </ShoppingCartContext.Provider>
  )
}

