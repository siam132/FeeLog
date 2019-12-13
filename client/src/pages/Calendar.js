import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Calendar from "react-calendar";


class CalendarComp extends Component {

  handleClickDay = date =>{
    this.props.history.push(`logs/?year=${date.getFullYear()}&month=${date.getMonth()}&date=${date.getDate()}`)
  }

  render() {
    return (
      <div className="conatiner">
        <div className="col-12">
          <h1 className="header-text m-3">Calender</h1>
        </div>
        <Calendar
          className="rounded-lg calendar"
          onClickDay={this.handleClickDay}
          //TODO Add color rendering hard code
          tileClassName="shadow"
        />
      </div>
    );
  }
}

export default withRouter(CalendarComp);
