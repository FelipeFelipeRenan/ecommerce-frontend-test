import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Card from "../Card";
import MiniCart from "../MiniCart";
import "./index.scss";

const Items = () => {
  const { cart, handleCart } = useContext(CartContext);

  const [itemState, setItems] = useState([]);
  useEffect(() => {
    fetch("https://ecommerce-teste.herokuapp.com/items", { mode: "cors" })
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
      });
  }, []);

  return (
    <div className="body-items">
      <div className="card-container">
        <li>
          {itemState.map((item) => {
            if (item.qtd !== 0) {
              return (
                <ul key={item.id}>
                  <div className="card-div">
                    <Card name={item.name} price={item.price} qtd={item.qtd} />

                    <button
                      onClick={() => {
                        handleCart(item.name, item.price);
                        console.log(cart);
                        window.alert(
                          `Item ${item.name} adicionado com sucesso!`
                        );
                      }}
                    >
                      ADD <i className="fa-solid fa-cart-circle-plus"></i>
                    </button>
                  </div>
                </ul>
              );
            }
            return (
              <ul key={item.id}>
                <div className="card-div">
                  <Card name={item.name} price={item.price} />
                  <h4>Item indisponível</h4>
                </div>
              </ul>
            );
          })}
        </li>
      </div>
      <MiniCart />
    </div>
  );
};

export default Items;
