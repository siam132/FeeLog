import React, { Component } from "react";
import Quotes from "../components/Quote";
import Quote_json from "../assets/Quote_file.js";

export default class QuoteFeed extends Component {
  state = {
    quotes: [],
    author: [],
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
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="">
          <h1 className="header-text">Daily Quote</h1>
        </div>

        <div className="quote-feed">
          {Quote_json.reverse().map(e => {
            const prob = Math.random(5) * 10;
            
            if (prob < 2) return <Quotes quote={e.quote} author={e.author} />;
          })}
          <Quotes quote={this.state.quotes} author={this.state.author} />
        </div>
      </div>
    );
  }
}
