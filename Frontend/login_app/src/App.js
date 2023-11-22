import React, { useState } from "react";
import './App.css';
import LoginForm from './LoginForm';
import LoginAttemptList from './LoginAttemptList';

const App = () => {
  const [loginAttempts, setLoginAttempts] = useState([]);

  const getUsers = (loginData) => {
    debugger;
    setLoginAttempts((prevAttempts) => [...prevAttempts, loginData]);
  };

  return (
    <div className="App">
      <LoginForm onSubmit={(loginData) => { 
        getUsers(loginData);
        console.log(loginData);
      }} />

      {/* <LoginForm onSubmit={({ login, password }) => { 
        debugger;
        getUsers();
        console.log({ login, password }) }} /> */}
      <LoginAttemptList attempts={loginAttempts} />
    </div>
  );
};

export default App;
