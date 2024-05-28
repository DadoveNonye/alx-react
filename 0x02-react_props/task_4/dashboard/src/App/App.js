import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../../../../task_2/dashboard/src/Notifications/Notifications";
import CourseList from "../CourseList/CourseList";

const App = ({ isLoggedIn }) => (
  <>
    <Notifications />
    <div className="App">
      <Header />
      <div className="App-body">{isLoggedIn ? <CourseList /> : <Login />}</div>
      <Footer />
    </div>
  </>
);

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
