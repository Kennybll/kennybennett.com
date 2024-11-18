import { Separator } from "@/components/ui/separator";
import { IconAward, IconMap, IconSchool } from "@tabler/icons-react";

const education = [
  {
    school: "Davenport University",
    location: "Grand Rapids, MI",
    degree: "Bachelor of Science in Computer Science",
  },
];

export const Education = () => (
  <div>
    <h1 className="font-bold text-2xl">Education</h1>
    <Separator className="h-[3px] bg-slate-700 mb-4" />
    <div className="grid grid-cols-1 gap-4">
      {education.map((item, index) => (
        <div key={index} className="flex flex-col space-y-2">
          <div className="flex items-center">
            <IconSchool size={24} className="mr-2" />
            <span>{item.school}</span>
          </div>
          <div className="flex items-center">
            <IconMap size={24} className="mr-2" />
            <span>{item.location}</span>
          </div>
          <div className="flex items-center">
            <IconAward size={24} className="mr-2" />
            <span>{item.degree}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
