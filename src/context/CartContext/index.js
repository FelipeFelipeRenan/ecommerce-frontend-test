import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function handleCart(name, price) {
    const itemobj = { name, price };
    setCart([...cart, itemobj]);
  }

  function handleDeleteItemFromCart(clickedItemIndex) {
    const filteredCart = cart.filter(
      (cartItem) => cart.indexOf(cartItem) !== clickedItemIndex
    );
    console.log(filteredCart);
    setCart(filteredCart);
    console.log(cart);
  }

  function handleClearCart() {
    setCart([]);
  }

  function handleConfirm() {}

  function handleTotalPrice() {
    let total = cart.reduce((acc, price) => (acc += cart.price));
    console.log(total);
    return total;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        handleCart,
        handleDeleteItemFromCart,
        handleClearCart,
        handleConfirm,
        handleTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
