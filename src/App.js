import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
