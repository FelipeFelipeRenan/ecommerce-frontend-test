import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/cart";
import Main from "./pages/main";

const RoutesPage = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RoutesPage;