import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import Admin from "./Page/Admin";
import ListProduct from "./Page/Admin/components/Products/List";
import AddProductPage from "./Page/Admin/components/Products/Add";
import Signin from "./components/layouts/signin";
import Signup from "./components/layouts/signup";
import PrivateRouter from "./components/PrivateRouter";
import ProductDetail from "./components/Product/ProductDetail";
import Cart from "./components/Cart";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart/>}/>
      </Route>
      <Route
        path="/admin"
        element={
          <PrivateRouter>
            <Admin />
          </PrivateRouter>
        }
      >
        <Route path="products" element={<ListProduct />} />
        <Route path="products/add" element={<AddProductPage />} />
        <Route path="products/:id/edit" element={<AddProductPage />} />
      </Route>
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
