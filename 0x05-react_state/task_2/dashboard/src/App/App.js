import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { UserContext } from "../App/AppContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
        logOut: this.logOut.bind(this),
      },
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.keyDownHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyDownHandler);
  }

  keyDownHandler = (e) => {
    if (e.keyCode === 72 && e.ctrlKey) {
      alert("Logging you out");
      this.state.user.logOut();
    }
  };

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  handleLogIn(email, password) {
    this.setState({
      user: {
        ...this.state.user,
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: {
        ...this.state.user,
        email: "",
        password: "",
        isLoggedIn: false,
      },
    });
  }

  render() {
    const { displayDrawer, user } = this.state;

    const listCourses = [
      { id: 1, name: "ES6", credit: "60" },
      { id: 2, name: "Webpack", credit: "20" },
      { id: 3, name: "React", credit: "40" },
    ];

    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
    ];

    return (
      <UserContext.Provider value={{ user }}>
        <div className={css(bodyStyles.App)}>
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <Header />
          <div className="App-body">
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Login in to continue">
                <Login logIn={this.handleLogIn.bind(this)} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Boring random text</p>
            </BodySection>
          </div>
          <div className={css(footerStyles.Footer)}>
            <Footer />
          </div>
        </div>
      </UserContext.Provider>
    );
  }
}

const primaryColor = "#E11D3F";

const bodyStyles = StyleSheet.create({
  App: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
  },
});

const footerStyles = StyleSheet.create({
  Footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTop: `3px solid ${primaryColor}`,
    padding: "1rem",
    fontStyle: "italic",
  },
});

export default App;
