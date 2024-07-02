import React, { useState } from "react";
import Navbar from "./commponets/Nabar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOder from "./pages/PlaceOder/PlaceOder";
import Footer from "./commponets/Footer/Footer";
import LoginPopup from "./commponets/LoginPopup/LoginPopup";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
