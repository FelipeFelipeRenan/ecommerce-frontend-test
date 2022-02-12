import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarPage from "./pages/CarPage/car";
import Main from "./pages/Main/main";

const RoutesPage = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<CarPage />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RoutesPage;