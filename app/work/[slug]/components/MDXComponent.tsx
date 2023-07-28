"use client";

import React from "react";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Project } from "contentlayer/generated";
import Link from "next/link";
import s from "./page.module.scss";

const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  p: ({ children }) => <p className={s.paragraph}>{children}</p>,
  h2: ({ children }) => <h2 className={s.h2}>{children}</h2>,
  h3: ({ children }) => <h3 className={s.h3}>{children}</h3>,
  img: (props) => <img className={s.img} {...props}></img>,
  li: (props) => (
    <li className={s.li} {...props}>
      {props.children}
    </li>
  ),
  ul: (props) => (
    <ul className={s.ul} {...props}>
      {props.children}
    </ul>
  ),
  ol: (props) => (
    <ul className={s.ol} {...props}>
      {props.children}
    </ul>
  ),
  pre: (props) => (
    <pre className={s.pre} {...props}>
      {props.children}
    </pre>
  ),
  hr: (props) => <hr className={s.hr} {...props} />,
  br: (props) => (
    <>
      <br />
      <br />
    </>
  ),
  strong: (props) => (
    <strong className={s.strong} {...props}>
      {props.children}
    </strong>
  ),
  // Add a custom component.
  MyComponent: () => <div>Hello World!</div>,
};

export default function MDXComponent({ project }: { project: Project }) {
  const MdxContent = useMDXComponent(project.body.code);

  return (
    <div>
      <MdxContent components={mdxComponents} />
    </div>
  );
}
