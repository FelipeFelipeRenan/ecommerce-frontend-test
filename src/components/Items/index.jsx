import { useEffect, useState } from "react";
import AddButton from "../AddButton";
import Card from "../Card";
import "./index.scss";



const Items = () => {
  const [cart, setCart] = useState([])

  const [itemState, setItems] = useState([]);
  useEffect(() => {
    fetch("https://ecommerce-teste.herokuapp.com/items", { mode: "cors" })
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
      });
  }, []);


  function handleCart(name, price){
    const itemobj = {name, price}
    setCart([...cart, itemobj]) 

  }


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
                >ADD 2</button>
              </div>
            </ul>
          );
        })}
      </li>
    </div>
  );
};

export default Items;
