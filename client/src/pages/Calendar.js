import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Calendar from "react-calendar";

class CalendarComp extends Component {
  handleClickDay = date => {
    this.props.history.push(
      `logs/?year=${date.getFullYear()}&month=${date.getMonth()}&date=${date.getDate()}`
    );
  };

  render() {
    return (
      <div className="conatiner">
        <div className="col-12">
          <h1 className="header-text my-0 mx-3">Calendar</h1>
        </div>
        <Calendar
          className="rounded-lg calendar"
          onClickDay={this.handleClickDay}
          //TODO Add color rendering hard code
          tileClassName="shadow"
        />
        <footer>
          <small>
            If you are in distress and are experiencing suicidal thoughts,
            confidential help is always available 24/7. Please call the National
            Suicide Prevention Lifeline at 1-800-273-8255.
          </small>
        </footer>
      </div>
    );
  }
}

export default withRouter(CalendarComp);
