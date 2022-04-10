//General react imports
import React from "react";
//Routes
import { Routes, Route } from "react-router-dom";
//Pages
import Home from "../pages/home/Home";
import SingleProduct from "../pages/singleProduct/SingleProduct";
import Cart from "../pages/cart/Cart";

class NavRoutes extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    );
  }
}

export default NavRoutes;
