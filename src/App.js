import { CartProvider } from "./context/CartContext";
import RoutesPage from "./routes";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <RoutesPage />
      </CartProvider>
    </div>
  );
}

export default App;
