import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Card from "../Card";
import "./index.scss";



const Items = () => {

  const{cart, handleCart} = useContext(CartContext)

  const [itemState, setItems] = useState([]);
  useEffect(() => {
    fetch("https://ecommerce-teste.herokuapp.com/items", { mode: "cors" })
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
      });
  }, []);




  return (
    <div className="card-container">
      <li>
        {itemState.map((item) => {
          return (
            <ul key={item.id}>
              <div className="card-div">
                <Card name={item.name} price={item.price} />
                
                <button onClick={
                  () => {
                    handleCart(item.name, item.price)
                    console.log(cart)
                    window.alert(`Item ${item.name} adicionado com sucesso!`);
                    
                  }
                }
                >ADD</button>
              </div>
            </ul>
          );
        })}
      </li>
    </div>
  );
};

export default Items;
