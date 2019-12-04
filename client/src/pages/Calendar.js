import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Calendar from "react-calendar";


class CalendarComp extends Component {

  handleClickDay = date =>{
    this.props.history.push(`logs/?year=${date.getFullYear()}&month=${date.getMonth()}&date=${date.getDate()}`)
  }

  render() {
    return (
      <div className="shadow m-5">
        <Calendar
          className="rounded-lg calendar"
          onClickDay={this.handleClickDay}
        />
      </div>
    );
  }
}

export default withRouter(CalendarComp);
