import React from "react";
import logo from "./images/holberton-logo.jpg";
import { getFullYear, getFooterCopy } from "./utils.js";
import "./App.css";

const App = () => {
  return (
    <>
      <header className="App-header">
        <img src={logo} alt="logo"></img>
        <h1>School dashboard</h1>
      </header>
      <hr />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <button>OK</button>
        </form>
      </div>
      <hr />
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </footer>
    </>
  );
};

export default App;
