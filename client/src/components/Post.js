import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Sadness_png from "../assets/sadness.png";
import Joy_png from "../assets/joy.png";
import Disgust from "../assets/disgust.png";
import Fear from "../assets/fear.png";

function Post({ content, tones, createdAt, id, onDelete }) {
  let message = " ";
  const regexSad = "\\bSadness\\b";
  const regexJoy = "\\bJoy\\b";
  const regexAnger = "\\bAnger\\b";
  const regexTent = "\\bTentative\\b";
  const regexDisgust = "\\bDisgust\\b";

  let foundSad = tones.match(regexSad);
  let foundJoy = tones.match(regexJoy);
  let foundAnger = tones.match(regexAnger);
  let foundTent = tones.match(regexTent);
  let foundDisgust = tones.match(regexDisgust);

  let prob = Math.floor(Math.random() * (4 - 0)) + 0;
  let img_arr = [Joy_png, Sadness_png, Disgust, Fear];

  const img_selected = img_arr[prob];

  console.log(tones);
  if (!foundAnger && !foundDisgust && !foundJoy && !foundSad && !foundTent)
    message = "You seem to have no overwhelming emotion right now.";
  else if (foundAnger && foundSad && foundJoy && foundTent)
    message =
      "There seems to be a lot of things to unpack. Are you feeling sad? It's okay to be sad at times. \
      Spend some time with your friends. You also seem angry, perhaps it's a good idea to try the new thing that you've always wanted to do";
  else if (foundAnger && foundSad)
    message =
      "It's quite okay to feel down. Don't let your emotions run your action. Be patient.";
  else if (foundJoy && foundSad)
    message =
      "You seem to feel happy but I also see that there is some sadness in you... stay postive and you will do great";
  else if (foundJoy && foundAnger)
    message =
      "You seem to feel happy!!! Keep rocking!! It also seems that you might be angry. Perhaps speak to a friend or someone you trust.";
  else if (foundSad && foundAnger)
    message =
      "You seem to be down. I am also sensing anger in you. Perhaps it is best if you spoke with a loved one or someone you trust.";
  else if (foundSad && foundDisgust)
    message =
      "Are you feeling down? Remember to breathe. Don't let your feelings control your thoughts.";
  else if (foundSad && foundTent)
    message =
      "Remember to breathe. Don't let sadness cloud your judgement. Do the next right thing and keep going!!!";
  else if (foundAnger)
    message +=
      "Woah, you seem a bit angry there !!! Let's count backwards to 10.";
  else if (foundSad)
    message =
      "You seem down. Take your next steps slowly and do the next right thing. Remember: Emotions are just clouds passing through your mind, let it be.";
  else if (foundJoy) message = "You seem to feel happy!!! Keep rocking!!";
  else if (foundTent)
    message =
      "It appears as though you are not sure of something. Take a break and try new things, perhaps watch a movie.";
  else if (foundDisgust)
    message =
      "It's okay to feel negatively sometimes - the key is to pick youself up.";

  /*====================================================================================================================*/

  return (
    <div className="col-12 py-5">
      <div className="paper-pattern">
        <div className="pattern">
          <div className="content">
            <Link to={"/posts/" + id}></Link>
            <h3 className="log-text">{content}</h3>
          </div>
        </div>
        <h3 className="text-right m-3 px-5 bg-transparent text-muted">
          {createdAt.substr(0, 10)}
        </h3>
      </div>
      <Popup
        trigger={
          <button
            type="button"
            className="btn shadow mx-5 px-5 btn-outline-warning"
          >
            Delete
          </button>
        }
        modal
        closeOnDocumentClick
      >
        <h3 className="border ">Are you sure you want to delete this Log?</h3>
        <button
          className="btn shadow px-5 mx-5 btn-outline-danger"
          onClick={onDelete}
        >
          Yes
        </button>
      </Popup>

      <Popup
        trigger={
          <button className="btn shadow mx-5 px-5 btn-outline-dark">
            {" "}
            Analysis{" "}
          </button>
        }
        modal
        closeOnDocumentClick
      >
        <div className="container">
          <div className="col-12">
            <img className="inside-out-img" src={img_selected}></img>
          </div>
          <span className="h1 modal-content quote-text">{message}</span>
          <div className="col-2"></div>
        </div>
      </Popup>
    </div>
  );
}

export default Post;
