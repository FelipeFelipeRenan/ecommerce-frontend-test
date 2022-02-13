import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <h1>Equipamentos Loja</h1>
      <div className="buttons">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/cart">
          <button>Carrinho</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
