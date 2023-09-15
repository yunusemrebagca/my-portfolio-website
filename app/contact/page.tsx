import { Container } from "../styled-components/reusable";
import ContactForm from "./ContactForm";
import styles from "./page.module.scss";

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
