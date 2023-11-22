import React, { useState } from "react";
import "./LoginAttemptList.css";

const LoginAttempt = (props) => <li {...props}>{props.children}</li>;

const LoginAttemptList = (props) => {
  const [filterText, setFilterText] = useState("");

  const filteredAttempts = props.attempts.filter((loginData) =>
    loginData.login.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="Attempt-List-Main">
      <p>Recent activity</p>
      <input
        type="input"
        placeholder="Filter..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="Attempt-List">
        {filteredAttempts.map((loginData, index) => (
          <LoginAttempt key={index}>{`${loginData.login} logged in`}</LoginAttempt>
        ))}
      </ul>
    </div>
  );
};

export default LoginAttemptList;
