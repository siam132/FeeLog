import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

function Post({ content, tones, createdAt, id, onDelete }) {
  let message = " ";
  const regexSad = "\\bSadness\\b";
  const regexJoy = "\\bJoy\\b";
  const regexAnger = "\\bAnger\\b";
  const regexTent = "\\bTentative\\b";
  const regexDisgust = "\\bDisguist\\b";

  let foundSad = tones.match(regexSad);
  let foundJoy = tones.match(regexJoy);
  let foundAnger = tones.match(regexAnger);
  let foundTent = tones.match(regexTent);
  let foundDisgust = tones.match(regexDisgust);

  console.log(tones);
  if (foundJoy) message = "You seem to feel happy!!! keep it up!!";
  if (foundSad) message += "You seem down feel better.";
  if (foundAnger)
    message +=
      "Woah you seem a bit angry there !!! lets count backwards to 10.";
  if (foundTent)
    message +=
      "You seem to be not sure about things .... talk to a friend :). ";
  if (foundDisgust)
    message +=
      "It's okay to feel bad about yourself, the key is to pick youself up.";

  if (!foundAnger && !foundDisgust && !foundJoy && !foundSad && !foundTent)
    message = " You seem to have no over whelming emotion right now";

  return (
    <div className="col-10 col-md-8 col-lg-7 m-5">
      <div className="paper-pattern">
        <div className="pattern">
          <div className="content">
            <Link to={"/posts/" + id}>{content}</Link>
          </div>
        </div>
        <h3 className="text-right px-5 bg-transparent text-muted">
          {createdAt.substr(0, 10)}
        </h3>
      </div>
      <Popup
        trigger={
          <button type="button" className="btn shadow m-5 btn-outline-warning">
            Delete
          </button>
         
        }
        closeOnDocumentClick
      >
        <h3>Are you sure you want to delete this Log?</h3>
        <button
          className="btn shadow m-5 btn-outline-danger"
          onClick={onDelete}
        >
          Yes
        </button>
      </Popup>

      <Popup
        trigger={
          <button className="btn shadow m-5 btn-outline-dark"> Analyze </button>
        }
        modal
        closeOnDocumentClick
      >
        <span className="h1 modal-content">{message}</span>
      </Popup>
    </div>
  );
}

export default Post;
