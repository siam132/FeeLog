import React from 'react';
import { Link } from 'react-router-dom';


function Post({ content, createdAt, id, onDelete }) {
  return (
    <div className="col-10 col-md-8 col-lg-7 m-5">
      <div className="card mb-4 shadow">
        <div className="card-body m-5 h2 card-text">
          <Link to={"/posts/"+id}>{ content }</Link>
        </div>
        <div className="card-footer small text-muted text-right">
        </div>
        <button type="button" className="btn shadow btn-outline-danger" onClick={onDelete}>delete</button>
          

      </div>
    </div>
  );
}

export default Post;