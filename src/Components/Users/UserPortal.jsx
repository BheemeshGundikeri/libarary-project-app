import { Route, Routes } from "react-router-dom";
import Books from "../Books";
import Home from "../Home";
import Navbar from "../Navbar";
import ReadBooks from "../ReadBooks";
import Users from "../Users";
import Cart from "./Cart";
import { useState } from "react"; // 🧠 You need this

const UserPortal = () => {
  const [cart, setCart] = useState([]); // ✅ central cart state

  const removeFromCart = (bookId) => {
    setCart(cart.filter((item) => item.id !== bookId)); // Remove item by id
  };

  return (
    <div className="userportal">
      <Navbar cart={cart} /> {/* Optional: to show cart count */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books cart={cart} setCart={setCart} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/readbooks/:id" element={<ReadBooks />} />
        <Route path="/cart" element={<Cart cart={cart}  removeFromCart={removeFromCart}/>} />
      </Routes>
    </div>
  );
};

export default UserPortal;
