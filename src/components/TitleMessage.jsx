import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 20rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
    font-family: 'Source Code Pro', monospace;
  }
  div {
    color: white;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 200;
    letter-spacing: 7px;
    .main {
      font-size: 100px;
    }
    .sub {
      font-size: 50px;
      letter-spacing: 2px;
      font-family: 'Source Code Pro', monospace;
    }
  }
  @media only screen and (max-width: 768px) {
    top: 30rem;
    div {
      font-weight: 500;
      letter-spacing: 7px;
      .main {
        font-size: 30px;
      }
      .sub {
        font-size: 20px;
        letter-spacing: 2px;
        font-family: 'Source Code Pro', monospace;
      }
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          <span>
            <strong>Jorge Chirinos</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Web Developer", "Tech lover", "Learner"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;