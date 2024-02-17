import React from "react";
import style from "./GetInTouch.module.scss";
import { Container } from "../styled-components/reusable";

export const GetInTouch = () => {
  return (
    <Container>
      <div className={style.div}>
        <h4>
          {" "}
          Get <b>in Touch</b>
        </h4>
        <p>So that we can talk more about...</p>
        <div>
          <a href="mailto: yunusemrebagca@gmail.com">
            <img src="/images/Mail.svg" alt="mail logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/yunus-emre-bagca/"
            target="_blank"
          >
            <img src="/images/Linkedin.svg" alt="linkedin logo" />
          </a>
        </div>
      </div>
    </Container>
  );
};
