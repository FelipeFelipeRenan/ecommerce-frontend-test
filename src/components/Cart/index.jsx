import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
        {cart.name}
        {cart.price}
    </div>
  );
};

export default Cart;
