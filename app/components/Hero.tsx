import React from "react";
import { Container } from "../styled-components/reusable";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <Container>
      <div className={styles.div}>
        <h1>
          I am a <strong>frontend developer</strong> with a passion for creating{" "}
          <strong>responsive</strong> and dynamic user interfaces using{" "}
          <strong>React</strong> and other web technologies
        </h1>
      </div>
    </Container>
  );
};
