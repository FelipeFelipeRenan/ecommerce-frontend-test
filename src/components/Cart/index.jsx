import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, handleClearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="nada">
        <h1>Nenhum item adicionado ao Carrinho</h1>
      </div>
      
    );
  }
  return (
    <div className="cart-container">
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
      <button>Confirmar compra</button><button onClick={handleClearCart}>Limpar carrinho</button>
    </div>
  );
};

export default Cart;
