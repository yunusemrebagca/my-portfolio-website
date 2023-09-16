"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.scss";

export const sendContactForm = async (data: any) =>
  fetch("/api/contactForm", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });

const initValues = { name: "", email: "", subject: "", message: "" };

const initTouched = {
  name: false,
  email: false,
  subject: false,
  message: false,
};

const initState = { isLoading: false, error: "", values: initValues };

export default function ContactForm() {
  const [state, setState] = useState(initState);

  const [touched, setTouched] = useState(initTouched);

  const { values, isLoading, error } = state;

  const onBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setTouched((prev) => ({ ...prev, [event.target.name]: true }));

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [event.target.name]: event.target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched(initTouched);
      setState(initState);
    } catch (error: string | any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <form className={styles.contact__form}>
      <label
        htmlFor="name"
        className={!values.name && touched.name ? styles.onBlurLabel : ""}
      >
        Name*
      </label>
      <input
        className={!values.name && touched.name ? styles.onBlur : ""}
        value={values.name}
        onChange={handleChange}
        onBlur={onBlur}
        type="text"
        name="name"
        id=""
      />
      <label
        htmlFor="email"
        className={!values.email && touched.email ? styles.onBlurLabel : ""}
      >
        Email*
      </label>
      <input
        className={!values.email && touched.email ? styles.onBlur : ""}
        value={values.email}
        onChange={handleChange}
        onBlur={onBlur}
        type="email"
        name="email"
        id=""
      />
      <label
        htmlFor="subject"
        className={!values.subject && touched.subject ? styles.onBlurLabel : ""}
      >
        Subject*
      </label>
      <input
        className={!values.subject && touched.subject ? styles.onBlur : ""}
        value={values.subject}
        onChange={handleChange}
        onBlur={onBlur}
        type="text"
        name="subject"
        id=""
      />
      <label
        htmlFor="message"
        className={!values.message && touched.message ? styles.onBlurLabel : ""}
      >
        Message*
      </label>
      <textarea
        className={!values.message && touched.message ? styles.onBlur : ""}
        value={values.message}
        onChange={handleChange}
        onBlur={onBlur}
        name="message"
        id=""
        cols={30}
        rows={10}
      />
      <input
        disabled={
          !values.name ||
          !values.email ||
          !values.subject ||
          !values.message ||
          isLoading
        }
        onClick={onSubmit}
        type="button"
        value={`${isLoading ? "Sending..." : "Send Message"}`}
      />
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
}
