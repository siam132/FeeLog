import React from "react";
import { Link } from "react-router-dom";

function Quotes({ quote, author }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col align-self-end m-5">
          <div className="card rounded-pill mb-4 shadow">
            <div className="card-body m-5 h2 card-text">
              <Link to={"/" + quote}>{`" ${quote} "`}</Link>
            </div>
            <div className="card-footer text-uppercase rounded-pill m-5 text-center">
              {`- ${author}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;