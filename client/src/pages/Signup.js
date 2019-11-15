import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1 id="feelog-header" className="text-center">
          <Link to={{ pathname: "/" }}>
            <Button href="/" type="button" className="buttonRef">
              Home
            </Button>
          </Link>
        </h1>
        <form onSubmit={this.handleSubmit} id="login-form">
          <div className="container">
            <h1 className="text-center">Sign Up</h1>
            <div className="row">
              <input
                className="form-control col-12 mb-3"
                id="email-login"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                required
              />
              <input
                className="form-control col-12 mb-3"
                id="pass-input"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                required
              />
              <button className="btn btn-success">Create Account</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
