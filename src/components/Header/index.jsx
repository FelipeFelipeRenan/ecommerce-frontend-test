import { Link } from "react-router-dom";
import "./index.scss";


const Header = () =>{
    return(
        <header>
            <Link to="/cart">CARRINHO</Link>
            <h1>Ola</h1>
        </header>
        
    )
}

export default Header;