import { useState } from "react";
import "./Form.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  error: "",
};

const Form = () => {
  const [state, setState] = useState(initialState);

  const PHONE_REGEX = /\([0-9]{3}\)-[0-9]{3}-[0-9]{4}/;
  const EMAIL_REGEX =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const validateForm = () => {
    /**
     * What is the error message going to be?
     * Let's start it as an empty string.
     */
    let error = "";
    const { firstName, lastName, email, phone, message } = state;

    if (!firstName) error = "First name is required.";
    else if (firstName.length < 2)
      error = "First name must be at least 2 characters.";
    else if (firstName.length > 30)
      error = "First name cannot be longer than 30 characters.";

    if (!lastName) error = "Last name is required.";
    else if (lastName.length < 2)
      error = "Last name must be at least 2 characters.";
    else if (lastName.length > 30)
      error = "Last name cannot be longer than 30 characters.";

    if (!email) error = "Email is required.";
    else if (!EMAIL_REGEX.test(email)) error = "Invalid email address format.";

    if (!phone) error = "Phone number is required.";
    else if (!PHONE_REGEX.test(phone))
      error = "Phone number must be in (123)-123-1234 format.";

    if (!message) error = "Message is required.";
    else if (message.length < 10)
      error = "Message must be at least 10 characters.";
    else if (message.length > 200)
      error = "Message cannot be longer than 200 characters.";

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm();
    setState({ ...state, error });
    if (error) return;

    alert(`
    First Name: ${state.firstName}
    Last Name: ${state.lastName}
    Email: ${state.email}
    Phone: ${state.phone}
    Message: ${state.message}
    `);

    setState(initialState);
  };

  const handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label>
        First Name:
        <input
          placeholder="First Name"
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          placeholder="you@provider.com"
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          placeholder="(XXX)-XXX-XXXX"
          type="tel"
          name="phone"
          value={state.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        Message:
        <textarea
          placeholder="Message"
          type="text"
          name="message"
          value={state.message}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
      {state.error && <span className="error">{state.error}</span>}
    </form>
  );
};

export default Form;
