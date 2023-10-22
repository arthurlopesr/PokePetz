import { PagesHeader } from "../components/pagesHeader/PagesHeader";
import { SchedulingSection } from "../components/schedulingSection/SchedulingSection";

export default function Scheduling() {
  return (
    <>
      <PagesHeader
        navigation="Agendar Consulta"
        title="Agendar Consulta"
        description="Recupere seus pokémons em 5 segundos"
      />
      <SchedulingSection />
    </>
  );
}
