import { Project } from "contentlayer/generated";
import React from "react";
import Image from "next/image";
import styles from "./SelectedWorksCard.module.scss";
import clsx from "clsx";
import Link from "next/link";

export const SelectedWorksCard = ({
  project,
  reverse,
}: {
  project: Project;
  reverse: boolean;
}) => {
  return (
    <div className={clsx(styles.div, { [styles.reverse]: reverse })}>
      <Image
        className={styles.img}
        src={project.imageUrl}
        alt=""
        height={400}
        width={400}
      ></Image>
      <div className={styles.card__right}>
        <h3>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <p className={styles.category}>
          {project.tags?.map((tag, idx) => (
            <button key={idx}>{tag}</button>
          ))}
        </p>
        <div className={styles.bottom}>
          <Link href={`/work/${project._raw.flattenedPath.split("/").pop()}`}>
            <button className={styles.button}>
              <p>View Work</p> <img src="/images/icon.svg" alt="" />
            </button>
          </Link>
          <Link href={`${project.githubRepo}`}>
            <img className={styles.icon} src="/images/github.png" alt="" />
          </Link>
          <Link
            className={styles.preview__button}
            href={`${project.livePreview}`}
          >
            <img className={styles.icon} src="/images/web.png" alt="" />
            <p>Live Preview</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
