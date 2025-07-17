import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const newSkills: {
  [key: string]: Array<string>;
} = {
  Languages: ["TypeScript", "JavaScript", "Node.js", "C#", "HTML", "CSS"],
  Libaries: [
    "React",
    "React Native",
    "React Query",
    "Next.js",
    "Angular",
    "Redux",
    "Tailwind",
    "Express",
    "Prisma",
    "Expo",
    "Jest",
    "Cypress",
  ],
  Databases: ["MySQL", "PostgreSQL", "Redis", "Clickhouse"],
  Infrastructure: [
    "AWS",
    "Cloudflare",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Sentry",
  ],
} as const;

const personalSkills = [
  "Leadership",
  "Mentoring",
  "Problem Solving",
  "Collaboration",
  "Communication",
  "Attention To Detail",
  "Time Management",
  "Continous Learning",
];

export const TechnicalSkills = () => (
  <div>
    <h1 className="font-bold text-2xl">Technical Skills</h1>
    <Separator className="h-[3px] bg-slate-700 mb-4" />
    <div className="flex flex-col gap-4">
      {Object.keys(newSkills).map((category) => (
        <div className="font-bold" key={category}>
          <h2>{category}</h2>
          <div className="flex flex-wrap gap-2">
            {newSkills[category].map((skill, index) => (
              <Badge variant={"outline"} key={index}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const PersonalSkills = () => (
  <div>
    <h1 className="font-bold text-2xl">Personal Skills</h1>
    <Separator className="h-[3px] bg-slate-700 mb-4" />
    <ul className="flex flex-wrap gap-2">
      {personalSkills.map((skill, index) => (
        <Badge variant={"outline"} key={index}>
          {skill}
        </Badge>
      ))}
    </ul>
  </div>
);
