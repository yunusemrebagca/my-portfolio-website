import React from "react";
import { Container } from "../styled-components/reusable";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "About",
  };
};
export default function About() {
  return (
    <Container mt="12rem">
      <div>About</div>
    </Container>
  );
}
