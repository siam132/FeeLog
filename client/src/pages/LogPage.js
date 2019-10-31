import React from "react";
import { Redirect } from "react-router-dom";

class LogPage extends React.Component {
  state = {
    error: false,
    success: false,
    content: ""
  };

  contentChanged = event => {
    this.setState({
      content: event.target.value
    });
  };

  savePost = event => {
    fetch("/api/posts/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content: this.state.content })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error("Content validation");
      })
      .then(post => {
        this.setState({
          success: true
        });
      })
      .catch(err => {
        this.setState({
          error: true
        });
      });
  };

  render() {
    if (this.state.success) return <Redirect to="/" />;

    let errorMessage = null;
    if (this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error saving this post."
        </div>
      );
    }

    return (
      <div className="col-10 col-md-8 col-lg-7 m-5">
        {errorMessage}
        <div className="input-group">
          <textarea
            type="text"
            placeholder="Tell me about your day "
            value={this.state.content}
            className="form-control mr-3 rounded"
            onChange={this.contentChanged}
          />
        </div>
        <button className="btn btn-outline-warning btn-lg m-4" onClick={this.savePost}>
            Log your toughts
          </button>
      </div>
    );
  }
}

export default LogPage;
