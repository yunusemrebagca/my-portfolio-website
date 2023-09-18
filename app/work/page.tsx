import { Container } from "../styled-components/reusable";
import { AllWorks } from "../components/AllWorks";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Works",
  };
};
export default function Works() {
  return <AllWorks></AllWorks>;
}
