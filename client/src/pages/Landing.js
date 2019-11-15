import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
//import "./App.css";

function Landing(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 align-items-center centerText1 m-5">FeeLog</div>
        <div className="row">
          <div className="col-12 centerText2 m-5">
            FeeLog is a canvas for you to learn about yourself through your own
            thoughts and occurrences!
            <div>
              <div className="row">
                <div className="col">
                  <Button href="/login" type="button" className="buttonRef">
                    Login
                  </Button>

                  <Button href="/signup" type="button" className="buttonRef">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
