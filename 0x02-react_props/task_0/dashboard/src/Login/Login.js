import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="button" onClick={() => console.log("OK button clicked")}>
          OK
        </button>
      </form>
    </>
  );
}

export default Login;
