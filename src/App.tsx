import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import Admin from "./Page/Admin";
import ListProduct from "./Page/Admin/components/Products/List";
import AddProductPage from "./Page/Admin/components/Products/Add";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route path="products" element={<ListProduct />} />
        <Route path="products/add" element={<AddProductPage />} />
        <Route path="products/:id/edit" element={<AddProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
