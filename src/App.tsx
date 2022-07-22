import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import Admin from "./Page/Admin";
import ListProduct from "./Page/Admin/components/Products/List";
import AddProductPage from "./Page/Admin/components/Products/Add";
import EditProduct from "./Page/Admin/components/Products/Edit";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route path="phone" element={<ListProduct />} />
        <Route path="phone/add" element={<AddProductPage />} />
        <Route path="phone/:id/edit" element={<EditProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
