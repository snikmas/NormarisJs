import { createContext, useState } from "react";
import MainLayout from "../layouts/MainLayout";

// how many things in the cart
// 1. create context
export const CartContext = createContext(0);

// 2. provider component
export function CartProvider({ props }){
  const [cartCount, setCartCount] = useState(0);

  function addProduct() {
    setCartCount(prev => prev + 1)
  }

  return (
    <CartContext.Provider value={{cartCount, addProduct}}>
      <MainLayout />
    </CartContext.Provider>
  )
}


// later just do const num = React.useContext(CartContext)