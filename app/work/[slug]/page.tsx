import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";
import MDXComponent from "./components/MDXComponent";
import { Container } from "@/app/styled-components/reusable";
import { Metadata } from "next";
import styles from "./page.module.scss";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project._raw.flattenedPath.split("/").pop(),
  }));
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params.slug}`,
  };
};

export default function Page({ params }: Props) {
  const currentProject = allProjects.find(
    (project) => project._raw.flattenedPath.split("/").pop() === params.slug
  );

  // 404 if the post does not exist.
  if (!currentProject) notFound();

  return (
    <Container>
      <div className={styles.div}>
        <MDXComponent project={currentProject} />
      </div>
    </Container>
  );
}
