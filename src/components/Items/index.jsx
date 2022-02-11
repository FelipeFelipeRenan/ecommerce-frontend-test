import { useEffect, useState } from "react";
import Card from "../Card";
import "./index.scss";

const Items = () => {
  const [itemState, setItems] = useState([]);
  useEffect(() => {
    fetch("https://ecommerce-teste.herokuapp.com/items", {mode:"cors"})
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
      });
  }, []);
  console.log(itemState)

  return (
    <div className="card-container">
      <li>
        {itemState.map((item) => {
          return (
            <ul key={item.id}>
              <Card name={item.name} price={item.price} />
            </ul>
          );
        })}
      </li>
    </div>
  );
};

export default Items;
