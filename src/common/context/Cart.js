import { createContext, useState } from "react";

export const CartContext = createContext();
CartContext.displayName = "Cart";

export const CartProvider = ({children}) => {
  const [cartContent, setCartContent] = useState([]);

  return(
    <CartContext.Provider value={{
      cartContent, setCartContent
    }}>
      {children}
    </CartContext.Provider>
  )
}

