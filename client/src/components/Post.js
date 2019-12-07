import React from "react";
import { Link } from "react-router-dom";

function Post({ content, createdAt, id, onDelete }) {
  return (
    <div className="col-10 col-md-8 col-lg-7 m-5">
      <div className="paper-pattern">
        <div className="pattern">
          <div className="content">
            <Link to={"/posts/" + id}>{content}</Link>
           
          </div>
        </div>
        <h3 className="text-right px-5 bg-transparent text-muted">{createdAt.substr(0,10)}</h3>

      </div>
      <button
        type="button"
        className="btn shadow m-5 btn-outline-danger"
        onClick={onDelete}
      >
        Delete
      </button>
      <button
        type="button"
        className="btn shadow m-5 btn-outline-dark"
        // onClick={onDelete}
      >
        Analayze
      </button>
    </div>
  );
}

export default Post;
