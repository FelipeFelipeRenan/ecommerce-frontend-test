import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <div className="buttons">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/cart">
          <button>Carrinho</button>
        </Link>
      </div>
      <h1>Ola</h1>
    </header>
  );
};

export default Header;
