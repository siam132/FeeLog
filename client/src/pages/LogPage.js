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
    if (this.state.success) return <Redirect to="/logs" />;

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
        <div className="col-12">
          <h1 className="header-text py-1">Create a Log</h1>
        </div>
        <div className="input-group log-outer">
          <textarea
            type="text"
            placeholder="Tell me about your day "
            value={this.state.content}
            className="form-control m-3 rounded log-inner"
            onChange={this.contentChanged}
          />
        </div>
        <button
          className="btn btn-outline-danger btn-lg m-4"
          onClick={this.savePost}
        >
          Log Thoughts
        </button>

        <footer>
        <p className="fine-print text-muted">
            If you are in distress and are experiencing suicidal thoughts,
            confidential help is always available 24/7. Please call the National
            Suicide Prevention Lifeline at <a target="blank" href="https://suicidepreventionlifeline.org/">1-800-273-8255.</a> 
          </p>
        </footer>
      </div>
    );
  }
}

export default LogPage;
