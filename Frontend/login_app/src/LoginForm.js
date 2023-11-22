import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ onSubmit }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check login logic (you might want to validate against a backend)
    if (login && password) {
      // Call the onSubmit callback with login and password data
      onSubmit({ login, password });

      // Clear the input fields
      setLogin("");
      setPassword("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default LoginForm;