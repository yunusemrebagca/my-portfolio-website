"use client";

import React, {
  HTMLAttributes,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Container } from "../styled-components/reusable";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMousedown } from "../hooks/useMousedown";

export const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      }
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
  
  const [show, setShow] = useState(false);
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

  const pathname = usePathname();

  const [isReady, setIsReady] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  let menuRef: any = useRef<RefObject<HTMLDivElement>>();

  let handler = (e: any) => {
    if (!menuRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  useMousedown(handler);

  return (
    <>
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
            <div className={clsx(styles.links)}>
              <ul>
                <li>
                  <Link
                    href={"/"}
                    className={pathname == "/" ? styles.active__link : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/work"}
                    className={pathname == "/work" ? styles.active__link : ""}
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/about"}
                    className={pathname == "/about" ? styles.active__link : ""}
                  >
                    About Me
                  </Link>
                </li>
                <Link href={"/contact"}>
                  <button
                    className={clsx(
                      pathname == "/contact" && styles.active__button,
                      styles.button
                    )}
                  >
                    Contact
                  </button>
                </Link>
              </ul>
            </div>

            <Image
              onClick={() => setShowMenu(!showMenu)}
              className={clsx(styles.img, styles.hamburger__img)}
              src="/images/icons8-menu.svg"
              alt="menu hamburger"
              width={30}
              height={30}
            />
          </div>
        </Container>
      </div>
      <nav
        className={clsx(styles.nav, styles.side__menu, {
          [styles.active]: !showMenu,
        })}
        ref={menuRef}
      >
        <ul>
          <Image
            onClick={() => setShowMenu(!showMenu)}
            className={clsx(styles.img)}
            src="/images/icons8-close.svg"
            alt="menu hamburger"
            width={30}
            height={30}
          />

          <li>
            <Link
              href={"/"}
              className={pathname == "/" ? styles.active__link : ""}
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/work"}
              className={pathname == "/work" ? styles.active__link : ""}
              onClick={() => setShowMenu(false)}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className={pathname == "/about" ? styles.active__link : ""}
              onClick={() => setShowMenu(false)}
            >
              About Me
            </Link>
          </li>
          <button
            className={clsx(
              pathname == "/contact" && styles.active__button,
              styles.button
            )}
          >
            <Link href={"/contact"} onClick={() => setShowMenu(false)}>
              Contact
            </Link>
          </button>
        </ul>
      </nav>
    </>
  );
};
