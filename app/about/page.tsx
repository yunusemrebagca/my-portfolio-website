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
          <div>
            <p>
              I am a <strong>frontend developer</strong> with a passion for
              creating <strong>responsive</strong> and dynamic user interfaces
              using <strong>React</strong> and other web technologies
            </p>
            <a href="/cv.pdf">
              <button>Download CV</button>
            </a>
          </div>
        </div>
        <div className={styles.about__text}>
          <p>
            Hello! I&apos;m Yunus Emre Bagca, a passionate and driven Frontend
            Developer with a strong commitment to crafting exceptional web
            experiences. My journey in the world of web development has been
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
          <h2>Technical Skillset</h2>
          <ul>
            <li>
              <strong>Next.js :</strong> Possess a deep understanding of Next.js
              and its capabilities for crafting high-performance, SEO-optimized,
              and highly scalable web applications. Leverage its power to
              deliver exceptional user experiences and bring innovative ideas to
              life.
            </li>
            <li>
              <strong>TypeScript :</strong> Utilize TypeScript extensively to
              write clean, maintainable, and error-free code. Appreciate the
              enhanced accuracy and security it brings to large-scale projects.
            </li>
            <li>
              <strong>Core Web Technologies:</strong> Demonstrate strong
              proficiency in the fundamental building blocks of the web: HTML,
              CSS, and JavaScript. Utilize these languages to seamlessly
              translate design concepts into functional and interactive user
              experiences.
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
