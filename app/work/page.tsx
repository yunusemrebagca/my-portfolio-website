import { Container } from "../styled-components/reusable";
import { AllWorks } from "../components/AllWorks";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Works",
    description:
      "My Works - I am a self-taught frontend developer with a passion for creating responsive and dynamic user interfaces using React and other web technologies",
  };
};

export default function Works() {
  return <AllWorks></AllWorks>;
}
