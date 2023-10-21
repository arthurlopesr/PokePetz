import { AboutSection } from "../components/aboutSection/AboutSection";
import { PagesHeader } from "../components/pagesHeader/PagesHeader";

export default function AboutPage() {
  return (
    <>
      <PagesHeader
        navigation="Quem Somos"
        title="Quem Somos"
        description="A maior rede de tratamento pokémon."
      />

      <AboutSection />
    </>
  );
}
