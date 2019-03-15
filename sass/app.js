import React from "react";
import ReactDOM from "react-dom";
import Image from "./images/300.jpg";
import User from "./images/user.jpg";
import Heart from "./images/heart-solid.svg";
import Share from "./images/share-solid.svg";
import Retweet from "./images/retweet-solid.svg";
import "./sass/app.scss";

const SocialCard = () => (
  <div className="social_card">
    <img src={Image} alt="Sample image" />
    <div className="social_card_body">
      <div>
        <p>
          @some_lego_guy
          <br />
          <span>Mar 14</span>
        </p>
        <img src={User} alt="@some_lego_guy" />
      </div>
      <p>Here is a custom status with some text and stuff...</p>
      <div className="social_interactions">
        <p>
          <img src={Share} alt="Shares" /> 492
        </p>
        <p>
          <img src={Retweet} alt="Retweets" /> 3,843
        </p>
        <p>
          <img src={Heart} alt="Likes" /> 1,336
        </p>
      </div>
    </div>
  </div>
);

const App = () => (
  <div>
    <SocialCard />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
