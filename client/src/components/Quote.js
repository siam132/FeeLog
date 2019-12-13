import React from "react";
import { Link } from "react-router-dom";

function Quotes({ quote, author }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col align-self-end m-5">
          <div className="card rounded mb-4 shadow">
            <div className="m-5 h2">
              <h2 className="quote-text">{quote}</h2>
            </div>
            <div className="card-footer text-uppercase author-text rounded-pill m-5 text-right">
              {`- ${author}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
