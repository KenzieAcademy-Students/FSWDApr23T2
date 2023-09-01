import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
};

function Register({ handleRegister }) {
  const [user, setUser] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(user.name, user.email);
    navigate("/dashboard");
  };

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <label htmlFor="name" className="form-group">
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email" className="form-group">
          Email
          <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
