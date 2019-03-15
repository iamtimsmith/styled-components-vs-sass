import React from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import Image from "./images/300.jpg";
import User from "./images/user.jpg";
import Heart from "./images/heart-solid.svg";
import Share from "./images/share-solid.svg";
import Retweet from "./images/retweet-solid.svg";

const theme = {
  font: "sans-serif",
  primary: "#333",
  secondary: "#999"
};

const Card = styled.div`
  max-width: 350px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  margin: 30px auto;
  img {
    max-width: 100%;
  }
  > div {
    padding: 10px 20px;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-weight: bold;
        span {
          display: block;
          padding: 5px;
          font-weight: 300;
          font-size: 0.8rem;
          color: ${props => props.theme.secondary};
        }
      }
      img {
        max-width: 50px;
        border-radius: 100%;
      }
    }
  }
`;

const SocialSharing = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 20px;
      padding: 5px;
      opacity: 0.3;
    }
  }
`;

const SocialCard = () => (
  <Card>
    <img src={Image} alt="Sample image" />
    <div>
      <div>
        <p>
          @some_lego_guy
          <br />
          <span>Mar 14</span>
        </p>
        <img src={User} alt="@some_lego_guy" />
      </div>
      <p>Here is a custom status with some text and stuff...</p>
      <SocialSharing>
        <p>
          <img src={Share} alt="Shares" /> 492
        </p>
        <p>
          <img src={Retweet} alt="Retweets" /> 3,843
        </p>
        <p>
          <img src={Heart} alt="Likes" /> 1,336
        </p>
      </SocialSharing>
    </div>
  </Card>
);

const GlobalStyles = styled.div`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.primary};
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles>
      <SocialCard />
    </GlobalStyles>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
