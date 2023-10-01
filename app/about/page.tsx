import React from "react";
import { Container } from "../styled-components/reusable";
import { Metadata } from "next";
import styles from "./page.module.scss";
import Image from "next/image";

export const generateMetadata = (): Metadata => {
  return {
    title: "About",
    description:
      "About - I am a self-taught frontend developer with a passion for creating responsive and dynamic user interfaces using React and other web technologies",
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
        <div className={styles.about__text}>
          <p>
            Hello! I&apos;m Yunus Emre Bagca, a passionate and driven Junior
            Frontend Developer with a strong commitment to crafting exceptional
            web experiences. My journey in the world of web development has been
            fueled by a genuine love for creating user-centric interfaces that
            seamlessly blend form and function.
          </p>
          <h2>My Journey</h2>
          <p>
            My adventure in the world of coding began with a fascination for how
            websites worked and a determination to make my mark in the digital
            landscape. Over time, I&apos;ve honed my skills, and today, I
            specialize in using Next.js and TypeScript to build robust,
            efficient, and dynamic web applications.
          </p>
          <h2>Expertise</h2>
          <ul>
            <li>
              <strong>Next.js Enthusiast:</strong> I&apos;m deeply passionate
              about Next.js and its capabilities for building fast,
              SEO-friendly, and highly scalable web applications. I&apos;ve
              harnessed its power to bring ideas to life and create delightful
              online experiences.
            </li>
            <li>
              <strong>TypeScript Aficionado:</strong> TypeScript has become my
              trusted companion in writing clean, error-free code. I embrace its
              static typing and appreciate the safety it brings to large-scale
              projects.
            </li>
            <li>
              <strong>Core Web Technologies:</strong> I&apos;m proficient in
              HTML, CSS, and JavaScript, the fundamental building blocks of the
              web. These languages allow me to translate designs into reality
              and ensure seamless user interactions.
            </li>
          </ul>
          <h2>Philosophy</h2>
          <p>
            I firmly believe that web development is not just about writing
            code; it&apos;s about solving problems and enhancing the lives of
            users. My goal is to bridge the gap between design and
            functionality, creating digital spaces that are not only visually
            appealing but also intuitive and efficient.
          </p>
          <h2>Collaboration</h2>
          <p>
            I&apos;m a firm believer in the power of collaboration. I thrive in
            dynamic team environments where diverse perspectives come together
            to turn ideas into reality. Working together, we can create
            something truly amazing.
          </p>
          <h2>What&apos;s Next?</h2>
          <p>
            I&apos;m excited to continue my journey in the field of frontend
            development, pushing boundaries, and delivering exceptional digital
            experiences. Whether you&apos;re interested in discussing projects,
            exploring collaboration opportunities, or simply geeking out about
            web development, I&apos;d love to connect.
          </p>
        </div>
      </div>
    </Container>
  );
}
