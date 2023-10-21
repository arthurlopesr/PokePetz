import { Inter } from "@next/font/google";

import { HeroSection } from "../components/heroSection/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
