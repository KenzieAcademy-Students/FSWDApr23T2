import React from "react";
import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thank you for your submission, ${state.name}!`);
    console.log(state);
    setState(initialState);
  };

  const handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-group">
          Name:
          <input
            type="text"
            name="name"
            id="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email" className="form-group">
          Email:
          <input
            type="text"
            name="email"
            id="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="message" className="form-group">
          Reason for Contacting Us:
          <textarea
            name="message"
            id="message"
            rows="4"
            value={state.message}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
