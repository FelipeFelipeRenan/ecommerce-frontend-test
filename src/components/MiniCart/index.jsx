import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./index.scss";

const MiniCart = () => {
  const { cart, handleDeleteItemFromCart, handleClearCart } =
    useContext(CartContext);

  if (cart.length !== 0) {
    return (
      <div className="minicart">
        Carrinho
        <li>
          {cart.map((item) => {
            return (
              <ul key={item.id}>
                <div className="minicart-items">
                  Item: {item.name}
                  Valor: {item.price}
                  <button
                    onClick={(item) => {
                      handleDeleteItemFromCart(item);
                    }}
                  >
                    Excluir<i className="ri-close-fill"></i>
                  </button>
                </div>
              </ul>
            );
          })}
        </li>
        <div className="minicart-buttons">
          <button onClick={() =>{
              window.alert("Um de nossos profisionais entrará em contato para confirmação de dados")
              window.location.href = '/'
              
          }}>
            Confirmar compra <i className="ri-money-dollar-box-fill"></i>
          </button>
          <button onClick={handleClearCart}>Limpar carrinho</button>
        </div>
      </div>
    );
  }
  return <></>;
};

export default MiniCart;
