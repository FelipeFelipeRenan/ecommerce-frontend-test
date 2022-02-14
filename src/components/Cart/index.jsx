import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./index.scss";

const Cart = () => {
  const { cart, handleClearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="empty-card">
        <h1>Nenhum item adicionado ao Carrinho</h1>
      </div>
    );
  } else {
    return (
      <div className="cart-container">
        <li>
          {cart.map((item) => {
            return (
              <ul key={item.id}>
                <div className="cart-items">
                  <div>Produto: {item.name}</div>
                  <div>Preço: {item.price}</div>
                </div>
              </ul>
            );
          })}
        </li>
        <button onClick={() =>{
          window.alert("Um de nossos profisionais entrará em contato para confirmação de dados")
          window.location.href = '/'

        
        } }>Confirmar compra</button>
        <button onClick={handleClearCart}>Limpar carrinho</button>
      </div>
    );
  }
};

export default Cart;
