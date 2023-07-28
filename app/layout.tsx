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

export const metadata: Metadata = {
  title: { default: "Yunus Emre Bagca", template: "%s | Yunus Emre Bagca" },

  description: "my personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
