import React, { Component } from "react";
import Quotes from "../components/Quote";

export default class QuoteFeed extends Component {
  state = {
    quotes: "",
    author: "",
    loading: true
  };

  componentDidMount() {
    fetch("http://quotes.rest/qod.json?category=inspire")
      .then(response => response.json())
      .then(data => {
        let quote = data.contents.quotes[0].quote;
        let author = data.contents.quotes[0].author;
        console.log(quote);
        this.setState({ quotes: quote, author: author });
      })
      ;
  }

  render() {
    
    return (
      <div className="container-fluid">
        <div className="quote-feed">
        <Quotes quote={this.state.quotes} author={this.state.author} />
        </div>
      </div>
    );
  }
}
