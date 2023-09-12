"use client";

import React, { useEffect, useState } from "react";
import { Container } from "../styled-components/reusable";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import clsx from "clsx";

export const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (window.scrollY > 50) {
      setIsScrolling(true);
    }
    const isScrollingFunction = function () {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", isScrollingFunction);

    return () => {
      window.removeEventListener("scroll", isScrollingFunction);
    };
  }, []);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        // if scroll up show the navbar
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={clsx(styles.sticky, {
        [styles.scroll]: isScrolling,
        [styles.goingDown]: show,
      })}
    >
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
