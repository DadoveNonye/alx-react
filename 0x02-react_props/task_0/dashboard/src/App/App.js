import React from "react";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Footer from "./Footer/Footer";
import Notifications from "./Notifications/Notifications";
import "./App.css";

const App = () => (
  <>
    <Notifications />
    <div className="App">
      <Header />
      <div className="App-body">
        <Login />
      </div>
      <Footer />
    </div>
  </>
);

export default App;