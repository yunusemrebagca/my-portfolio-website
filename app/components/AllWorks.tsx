import React from "react";
import { Container } from "../styled-components/reusable";
import styles from "./SelectedWorks.module.scss";
import { allProjects, Project } from "contentlayer/generated";
import { SelectedWorksCard } from "./SelectedWorksCard";

export const AllWorks = () => {
  return (
    <Container mt="12rem">
      <div className={styles.div}>
        <h2>
          All <b>Works</b>
        </h2>
        {allProjects.map((project: Project, idx: number) => (
          <SelectedWorksCard
            key={idx}
            reverse={idx % 2 == 0 ? false : true}
            project={project}
          />
        ))}
      </div>
    </Container>
  );
};
