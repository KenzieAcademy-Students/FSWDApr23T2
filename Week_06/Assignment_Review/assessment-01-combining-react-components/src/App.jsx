import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";

import "./App.css";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Confirmation from "./pages/Confirmation";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [cart, setCart] = useState([]);

  const handleRegister = (name, email) => {
    setUser({ name, email });
  };

  return (
    <Routes>
      <Route path="" element={<Welcome />} />
      <Route
        path="register"
        element={<Register handleRegister={handleRegister} />}
      />
      <Route
        path="dashboard"
        element={
          <Dashboard userName={user.name} cart={cart} setCart={setCart} />
        }
      />
      <Route
        path="confirmation"
        element={<Confirmation user={user} cart={cart} />}
      />
    </Routes>
  );
};

export default App;
