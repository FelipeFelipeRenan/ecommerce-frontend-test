import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <h1>Equipamentos Loja</h1>
      <div className="buttons">
        <Link to="/">
          <button>Home <i class="ri-home-2-line"></i></button>
        </Link>
        <Link to="/cart">
          <button>Carrinho <i className="ri-shopping-cart-line"></i></button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
