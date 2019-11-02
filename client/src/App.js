import React from "react";
import calendar from "./assets/calendar.svg";
import createLog from "./assets/create-log.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import LogPage from "./pages/LogPage";
import ShowPostPage from "./pages/ShowPostPage";
import CalendarComp from './pages/Calendar'

import "./App.scss";



class Navigation extends React.Component {
  constructor() {
    super();

    this.state = {
      brandText: ["F", "L"]
    };
  }

  changeText = (word, brandIndex, increment = true) => {
    setTimeout(() => {
      const currLength = this.state.brandText[0].length;
      const newText = word.slice(0, currLength + (increment ? 1 : -1));

      const brandText =
        brandIndex === 1
          ? [this.state.brandText[0], newText]
          : [newText, this.state.brandText[1]];

      if ((newText !== word && increment) || (newText.length > 1 && !increment)) {
        this.changeText(word, brandIndex, increment);
      }

      this.setState({ brandText });
    }, 80);
  };

  increaseText = () => {
    this.changeText("Fee", 0);
    this.changeText("Log", 1);
  };

  decreaseText = () => {
    this.changeText("Fee", 0, false);
    this.changeText("Log", 1, false);
  };

  render() {
    return (
      <nav onMouseOver={this.increaseText} onMouseLeave={this.decreaseText}>
        <div className="brand">
          <Link to="/">
            <span className="brand">{this.state.brandText[0]}</span>
            <span className="brand">{this.state.brandText[1]}</span>
          </Link>
        </div>

        <div className="nav-routes">
          <NavLink exact to="/posts/new">
            <img src={createLog} alt="create log logo" />
            <span className="h3">Create Log</span>
          </NavLink>

          <NavLink exact to="/calendar">
            <img src={calendar} alt="calendar logo" />
            <span className="h3">Calendar</span>
          </NavLink>
        </div>
      </nav>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="page-container bg-color">
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/posts/new" component={LogPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route className="justify-content-right" path="/calendar" component={CalendarComp} />
                <Route path="/" component={PostsListPage} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
