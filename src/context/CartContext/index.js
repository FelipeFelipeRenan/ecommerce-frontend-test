import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  function handleCart(name, price) {
    const itemobj = { name, price };
    setCart([...cart, itemobj]);
  }

  function handleDeleteItemFromCart(clickedItemIndex){
      const filteredCart = cart.filter((cartItem) => 
        cart.indexOf(cartItem) !== clickedItemIndex
      )
      setCart(filteredCart)
  }

  function handleClearCart(){
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, handleCart, handleDeleteItemFromCart, handleClearCart }}>
      {children}
    </CartContext.Provider>
  );
};
