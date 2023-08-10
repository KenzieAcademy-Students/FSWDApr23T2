import { useState } from "react";

/**
 * TODO: Create a form and have all of its fields
 * stored in a singular object in state.
 * - When the form is submitted, add it to an array of objects
 *   in state.
 */
function StateObjects() {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    // user is the new user
    // userList is the list of existing users
    // we want to add the user to the list

    setUserList([...userList, user]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" />
        </div>
      </form>
      <div>
        {userList.map(({ firstName, lastName, email, username }, i) => (
          <li key={`user-${i}`}>
            <p>
              Name: {firstName} {lastName}
            </p>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
          </li>
        ))}
      </div>
    </div>
  );
}

export default StateObjects;
