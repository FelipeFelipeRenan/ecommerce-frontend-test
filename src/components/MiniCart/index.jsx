import { useContext, useEffect} from "react";
import { CartContext } from "../../context/CartContext";
import "./index.scss";

const MiniCart = () => {
  const { cart, handleDeleteItemFromCart, handleClearCart } = useContext(CartContext);

  
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
                <button onClick={() =>{
                    
                    handleDeleteItemFromCart(item)
                }}>Excluir</button>
              </div>
            </ul>
          );
        })}
      </li>
      <button>Confirmar compra</button><button onClick={handleClearCart}>Limpar carrinho</button>
    </div>
  );
};

export default MiniCart;
