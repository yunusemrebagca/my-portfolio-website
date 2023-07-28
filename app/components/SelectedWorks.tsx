import React from "react";
import { Container } from "../styled-components/reusable";
import styles from "./SelectedWorks.module.scss";
import { allProjects, Project } from "contentlayer/generated";
import { SelectedWorksCard } from "./SelectedWorksCard";

export const SelectedWorks = () => {
  return (
    <Container>
      <div className={styles.div}>
        <h2>
          Selected <b>Works</b>
        </h2>
        {allProjects.slice(0, 3).map((project: Project, idx: number) => (
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
