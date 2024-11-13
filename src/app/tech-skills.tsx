import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React",
  "React Native",
  "React Query",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Redux",
  "HTML",
  "CSS",
  "Next Auth",
  "Tailwindcss",
  "Expo",
  "Jest",
  "Cypress",

  "MySQL",
  "PostgreSQL",
  "Redis",
  "Clickhouse",
  "Prisma",

  "Go",
  "Golang",
  "Express",
  "WebSockets",

  "AWS",
  "Cloudflare",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Square",
  "Sentry",
  "Doppler",
  "Gitlab",
  "Github",
  "AWS S3",
  "AWS Lambda",
  "AWS Cognito",
  "Blockchain",
  "Xcode",
  "TestFlight",
];

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
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <Badge variant={"outline"} key={index}>
          {skill}
        </Badge>
      ))}
    </ul>
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
