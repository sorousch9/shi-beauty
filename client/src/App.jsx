import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Success } from "./pages/Success";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { ProductList } from "./pages/ProductList";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route>
          {user ? (
            <Route path="/login" element={<Navigate to="/" />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </Route>
        <Route>
          {user ? (
            <Route path="/register" element={<Navigate to="/" />} />
          ) : (
            <Route path="/register" element={<Register />} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
