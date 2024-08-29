import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/productlist" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;
