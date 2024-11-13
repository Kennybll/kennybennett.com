import { Contact } from "./contact";
import { Education } from "./education";
import { Experiences } from "./experience";
import { PersonalSkills, TechnicalSkills } from "./tech-skills";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Contact />
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="space-y-8 flex-[3]">
          <Experiences />
        </div>
        <div className="space-y-8 flex-1 flex-[2]">
          <TechnicalSkills />
          <PersonalSkills />
          <Education />
        </div>
      </div>
    </div>
  );
}
