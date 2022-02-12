import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  if (cart.length === 0) {
    return (
      <>
        <div>AOBA</div>
        <div>AOBA</div>
        <div>AOBA</div>
        <div>AOBA</div>
        <div>AOBA</div>
        <div>AOBA</div>
        <div>AOBA</div>
        <div>AOBA</div>
        <div>AOBA</div>
        <div>AOBA</div>
        <div>AOBA</div>
        <div>AOBA</div>
        <div>AOBA</div>
        <div>AOBA</div>
        <div>AOBA</div>
      </>
    );
  }
  return (
    <div>
      <li>
        {cart.map((item) => {
          return (
            <ul key={item.id}>
              <div className="cart-items">
                {item.name}
                {item.price}
              </div>
            </ul>
          );
        })}
      </li>
    </div>
  );
};

export default Cart;
