import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

import StyledComponentsRegistry from "./lib/registry";
import { Navbar } from "./components/Navbar";
import { GetInTouch } from "./components/GetInTouch";
import styled from "styled-components";

const font = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yunus Emre Bagca",
  url: "https://yunusemrebagca.com",
};

export const metadata: Metadata = {
  title: { default: "Yunus Emre Bagca", template: "%s | Yunus Emre Bagca" },

  description:
    "I am a frontend developer with a passion for creating responsive and dynamic user interfaces using React and other web technologies",
  verification: {
    google: "zWne5ULETfErpQuBYsnvJQ-ngJ0QCI5w6Zlbb6mwZuI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={font.className}>
        <StyledComponentsRegistry>
          <Navbar></Navbar>

          {children}
          <GetInTouch></GetInTouch>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
