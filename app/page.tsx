import Image from "next/image";
import { Hero } from "./components/Hero";
import { SelectedWorks } from "./components/SelectedWorks";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <SelectedWorks></SelectedWorks>
    </main>
  );
}
