import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  function handleCart(name, price) {
    const itemobj = { name, price };
    setCart([...cart, itemobj]);
  }

  return (
    <CartContext.Provider value={{ cart, handleCart }}>
      {children}
    </CartContext.Provider>
  );
};
