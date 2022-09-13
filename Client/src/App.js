import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { ProductList } from "./pages/ProductList";

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/redirect" element={<Navigate to="/" />} />
        <Route>
          {user ? (
            <Route path="/redirect" element={<Home />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </Route>
        <Route>
          {user ? (
            <Route path="/redirect" element={<Home />} />
          ) : (
            <Route path="/register" element={<Register />} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
