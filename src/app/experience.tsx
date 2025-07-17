import { Separator } from "@/components/ui/separator";
import { IconBuildingEstate, IconCalendar, IconMap } from "@tabler/icons-react";

type Experience = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
  technologies: string[];
};

const experiences: Array<Experience> = [
  {
    title: "Senior Front End Developer",
    company: "Addison Group",
    startDate: "12/2024",
    endDate: "07/2025",
    location: "Grand Rapids, MI (Remote)",
    description: [
      "Led development of image management tools for the USDA PLANTS admin system, enabling creation, editing, reassociation, metadata tagging, and bulk uploading to address a backlog of thousands of plant images",
      "Increased unit test coverage from ~40% to nearly 90% on a key internal project, significantly improving code reliability and enabling safer deployments",
      "Conducted accessibility enhancements and testing to meet Section 508 compliance, ensuring inclusive design for public-facing and internal applications",
      "Delivered full-stack solutions using Angular (RxJS, SCSS) and ASP.NET on the .NET Framework, supporting both public (plants.usda.gov) and internal platforms",
    ],
    technologies: [
      "TypeScript",
      "Angular",
      "C#",
      "ASP.NET",
      ".NET Framework",
      "SCSS",
      "RxJS",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company: "F & B Wholesale",
    startDate: "05/2022",
    endDate: "03/2025",
    location: "Bronson, MI (Remote)",
    description: [
      "Developed and deployed a real time auction website with millions in sales, 10k+ users, and over 1250 daily active users",
      "Integrated real-time data updates using WebSockets, enabling users to view live auction bids without refreshing the page",
      "Built scalable backend services improving system performance and reducing API response times by 20%",
      "Integrated Square as a payment processor with batch payments which reduced payment fees by 50%",
      "Implemented in-app, email, and text notifications that increased user engagement by 25%",
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
    location: "Chicago, IL (Remote)",
    description: [
      "Created a workflow where photos taken in React Native were uploaded to AWS S3 and using AWS Lambda analyzed the images and extracted data on items presence and coordinates",
      "Integrated a feedback mechanism in the app allowing users to report false positives, negatives, or missing items, using this data to progressively train and improve the AI model using supervised learning",
      "Built an appointment scheduling system, including a calendar view for tracking doctor availability and scheduled appointments",
      "Mentored 5 web developer interns in gaining experience and improving their skills in React, TypeScript, and modern development practices, leading to their successful contributions to production projects",
      "Led sprint planning and execution, assigning tasks to team members, tracking progress, and facilitating sprint retrospectives to continuously improve team performance and project outcomes",
      "Developed and maintained Terraform modules to standardize infrastructure deployment, ensuring repeatability and reducing setup time",
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
    location: "Remote",
    description: [
      "Implemented adding, finding, and removing friends, which increased social interaction",
      "Built comprehensive community functionalities, such as creating communities, joining them, and displaying posts based on user memberships, driving a 20% boost in user engagement",
      "Developed and optimized search functionality, enabling users to find their friends, posts they like, and other relevant content, enhancing overall user satisfaction",
      "Created the front-end functionality for cryptocurrency transfers, enabling users to directly send earnings from social media posts to other users on the platform",
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
          <div className="flex items-center">
            <IconMap size={24} className="mr-2" />
            {experience.location}
          </div>
          <ul>
            {experience.description.map((desc) => (
              <li className="list-disc list-inside" key={desc}>
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);
