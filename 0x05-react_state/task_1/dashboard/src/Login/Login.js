import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import WithLoggingHOC from "../HOC/WithLogging";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    const { password } = this.state;
    this.setState({ email, enableSubmit: email !== "" && password !== "" });
  }

  handleChangePassword(event) {
    const password = event.target.value;
    const { email } = this.state;
    this.setState({ password, enableSubmit: email !== "" && password !== "" });
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <main className={css(loginStyles.appBody)}>
            <p>Login to access the full dashboard</p>
            <form
              className={css(loginStyles.inputs)}
              onSubmit={this.handleLoginSubmit}
            >
              <label className={css(loginStyles.label)} htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                className={css(loginStyles.input)}
              />
              <label className={css(loginStyles.label)} htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
                className={css(loginStyles.input)}
              />
              <input
                type="submit"
                value="OK"
                className={css(loginStyles.button)}
                disabled={!this.state.enableSubmit}
              />
            </form>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

const primaryColor = "#E11D3F";

const loginStyles = StyleSheet.create({
  appBody: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "3rem",
    height: "100%",
  },

  inputs: {
    "@media (min-width: 350px)": {
      display: "flex",
      flexDirection: "column",
      maxWidth: "200px",
    },
    "@media (min-width: 900px)": {
      display: "flex",
      flexDirection: "row",
    },
  },

  input: {
    height: "15px",
    marginLeft: "0.2rem",
    marginTop: "0.5rem",
  },

  label: {
    marginTop: "0.5rem",
  },

  button: {
    height: "21px",
    marginTop: "0.6rem",
    maxWidth: "40px",
    backgroundColor: primaryColor,
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },

  buttonDisabled: {
    backgroundColor: "#d3d3d3",
    color: "#a9a9a9",
    cursor: "not-allowed",
  },
});

export default WithLoggingHOC(Login);
