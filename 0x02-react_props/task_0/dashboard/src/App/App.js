import React from "react";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../../../../task_2/dashboard/src/Notifications/Notifications";

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
