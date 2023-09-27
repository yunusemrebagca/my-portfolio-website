import React from "react";
import { Container } from "../styled-components/reusable";
import { Metadata } from "next";
import styles from "./page.module.scss";
import Image from "next/image";

export const generateMetadata = (): Metadata => {
  return {
    title: "About",
  };
};
export default function About() {
  return (
    <Container mt="12rem">
      <div className={styles.about}>
        <h1>About me</h1>
        <div className={styles.about__content}>
          <Image
            src={"/desktop__illustration.png"}
            alt="desktop illustration"
            height={400}
            width={500}
          ></Image>
          <p>
            I am a self-taught <strong>frontend developer</strong> with a
            passion for creating <strong>responsive</strong> and dynamic user
            interfaces using <strong>React</strong> and other web technologies
          </p>
        </div>
      </div>
    </Container>
  );
}
