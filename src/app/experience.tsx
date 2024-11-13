import { Separator } from "@/components/ui/separator";
import { IconBuildingEstate, IconCalendar } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";

type Experience = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
};

const experiences: Array<Experience> = [
  {
    title: "Senior Full Stack Developer",
    company: "F & B Wholesale",
    startDate: "05/2022",
    endDate: "Present",
    description: [
      "Developed and deployed a real time auction website using React and TypeScript with millions in sales, 10k+ users, and over 1250 daily active users",
      "Integrated real-time data updates using WebSockets and React Query, enabling users to view live auction bids without refreshing the page",
      "Built scalable backend services using Golang and Node.js/TypeScript/Express, improving system performance and reducing API response times by 20%",
      "Enforced strict type checking in the build process using TypeScript and ESLint, ensuring zero type-related errors in production and improving code quality",
      "Integrated Square as a payment processor with batch payments which reduced payment fees by 50%",
      "Implemented in-app, email, and text notifications using AWS SES and SNS that increased user engagement by 25%",
      "Monitored and optimized app performance and infrastructure using Datadog and Sentry, integrating error tracking and logs for quicker resolution of production issues",
      "Built the infrastructure for production, staging, and development environments on AWS and Cloudflare using Docker and Kubernetes",
      "Leveraged Doppler to securely manage and automate the storage of API keys, environment variables, and secrets, ensuring seamless integration across development, staging, and production environments",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwindcss",
      "MySQL",
      "Redis",
      "Clickhouse",
      "Express",
      "Golang",
      "AWS",
      "Docker",
      "Kubernetes",
      "WebSockets",
      "React Query",
      "Square",
      "Sentry",
      "Doppler",
    ],
  },
  {
    title: "Lead Full Stack Developer",
    company: "Instra.AI",
    startDate: "05/2021",
    endDate: "09/2022",
    description: [
      "Developed a HIPAA-compliant healthcare CMS using React, Next.js, Prisma, Next Auth, and TypeScript",
      "Built a robust appointment scheduling system, including a calendar view for tracking doctor availability and scheduled appointments",
      "Wrote and maintained unit tests using Jest to ensure application reliability and catch potential issues",
      "Enhanced security by deploying the CMS on AWS with BAA compliance, ensuring 100% adherence to HIPAA standards",
      "Setup authentication and authorization in React Native using AWS Cognito",
      "Created a workflow where photos taken in React Native were uploaded to AWS S3 and using AWS Lambda analyzed the images and extracted data on items presence and coordinates",
      "Integrated a feedback mechanism in the app allowing users to report false positives, negatives, or missing items, using this data to progressively train and improve the AI model",
      "Compiled and built the mobile app using React Native and Xcode, set up App Store credentials for deployment, and managed beta releases on TestFlight, enabling user testing and gathering feedback",
      "Mentored 5 web developer interns in gaining experience and improving their skills in React, TypeScript, and modern development practices, leading to their successful contributions to production projects",
      "Led sprint planning and execution, assigning tasks to team members, tracking progress, and facilitating sprint retrospectives to continuously improve team performance and project outcomes",
      "Collaborated with management to understand business requirements, translating them into actionable tasks and detailed project plans for the development team",
      "Developed and maintained Terraform modules to standardize infrastructure deployment, including VPCs, EC2 instances, RDS databases, and S3 buckets, ensuring repeatability and reducing setup time",
    ],
    technologies: [
      "React",
      "Next.js",
      "Prisma",
      "Next Auth",
      "TypeScript",
      "Tailwindcss",
      "PostgreSQL",
      "Expo",
      "React Native",
      "AWS",
      "HIPAA",
      "Jest",
      "AWS Cognito",
      "AWS S3",
      "AWS Lambda",
      "Terraform",
      "Xcode",
      "TestFlight",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Whaleshares",
    startDate: "10/2018",
    endDate: "09/2019",
    description: [
      "Implemented features for friends and communities, boosting user engagement by 20%",
      "Developed and optimized search functionality, enabling users to efficiently find their friends, posts they like, and other relevant content, enhancing overall user engagement and satisfaction",
    ],
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "Docker",
      "Blockchain",
      "Gitlab",
    ],
  },
];

export const Experiences = () => (
  <div className="w-full">
    <h2 className="font-bold text-2xl">Professional Experience</h2>
    <Separator className="h-[3px] bg-slate-700 mb-4" />
    <div className="space-y-8">
      {experiences.map((experience) => (
        <div key={experience.company} className="space-y-2">
          <h3 className="font-bold text-lg">{experience.title}</h3>
          <div className="flex items-center">
            <IconBuildingEstate size={24} className="mr-2" />
            <span>{experience.company}</span>
          </div>
          <div className="flex items-center">
            <IconCalendar size={24} className="mr-2" />
            {experience.startDate} - {experience.endDate}
          </div>
          <ul>
            {experience.description.map((desc) => (
              <li className="list-disc list-inside" key={desc}>
                {desc}
              </li>
            ))}
          </ul>
          <p className="font-bold">Technologies used:</p>
          <ul className="flex flex-wrap gap-1">
            {experience.technologies.map((tech) => (
              <Badge variant={"secondary"} key={tech}>
                {tech}
              </Badge>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);
