import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./index.scss";

const MiniCart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="minicart">
        Carrinho
      <li>
        {cart.map((item) => {
          return (
            <ul key={item.id}>
              <div className="minicart-items">
                {item.name}
                {item.price}
              </div>
            </ul>
          );
        })}
      </li>
      <button>Confirmar compra</button>
    </div>
  );
};

export default MiniCart;
