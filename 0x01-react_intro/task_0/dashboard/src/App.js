import React from "react";
import logo from "./holberton-logo.jpg";
import { getFullYear, getFooterCopy } from "./utils.js";

const App = () => {
  return (
    <>
      <header className="App-header">
        <img src={logo}></img>
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear} - {getFooterCopy(isIndex)}
        </p>
      </footer>
    </>
  );
};

export default App;
