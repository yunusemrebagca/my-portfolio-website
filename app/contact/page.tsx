import { Container } from "../styled-components/reusable";
import ContactForm from "./ContactForm";
import styles from "./page.module.scss";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Contact",
    description:
      "Contact - I am a self-taught frontend developer with a passion for creating responsive and dynamic user interfaces using React and other web technologies",
  };
};
export default function Contact() {
  return (
    <Container mt="12rem">
      <div className={styles.div}>
        <h1 className={styles.h1}>Contact</h1>
        <ContactForm />
      </div>
    </Container>
  );
}
