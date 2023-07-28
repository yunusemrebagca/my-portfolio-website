"use client";

import React, { useState } from "react";
import { Container } from "../styled-components/reusable";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import clsx from "clsx";

export const Navbar = () => {
  const [style, setStyle] = useState(false);

  const isScrolling = function () {
    if (window.scrollY > 50) {
      setStyle(true);
    } else {
      setStyle(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", isScrolling);
  }

  return (
    <div className={clsx(styles.sticky, { [styles.scroll]: style })}>
      <Container>
        <div className={styles.div}>
          <Link href={"/"}>
            <div className={styles.logo}>
              <p className={styles.p}>
                Y<span id={styles.hide}>unus</span> E
                <span id={styles.hide}>mre</span> B
                <span id={styles.hide}>agca</span>
              </p>
            </div>
          </Link>
          <div className={styles.links}>
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/work"}>Work</Link>
              </li>
              <li>
                <Link href={"/about"}>About Me</Link>
              </li>
              <button className={styles.button}>
                <Link href={"/contact"}>Contact</Link>
              </button>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
