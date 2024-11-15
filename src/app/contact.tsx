import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileTypePdf,
  IconMapPin,
} from "@tabler/icons-react";

const links = [
  {
    label: "PDF Version",
    url: "/Kenneth Bennett Resume Web.pdf",
    icon: <IconFileTypePdf size={24} className="mr-2" />,
    download: true,
  },
  {
    label: "in/kennybll",
    url: "https://www.linkedin.com/in/kennybll/",
    icon: <IconBrandLinkedin size={24} className="mr-2" />,
  },
  {
    label: "kennybll",
    url: "https://www.github.com/kennybll",
    icon: <IconBrandGithub size={24} className="mr-2" />,
  },
  {
    label: "Grand Rapids, MI",
    icon: <IconMapPin size={24} className="mr-2" />,
  },
];

export const Contact = () => (
  <div className="flex gap-4">
    <div className="space-y-2 flex-[3]">
      <h1 className="font-bold text-3xl">Kenny Bennett</h1>
      <p className="italic">
        Full Stack Developer with 5 years of experience in web and mobile
        development using React, TypeScript, and AWS. Proven track record of
        delivering high-performance solutions, managing projects from concept to
        production, and leading development teams. Seeking a challenging role to
        leverage my skills to create innovative and impactful products.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {links.map((link) => {
          if (!link.url) {
            return (
              <div className="flex items-center" key={link.label}>
                {link.icon}
                <span>{link.label}</span>
              </div>
            );
          }

          return (
            <div className="flex items-center" key={link.label}>
              {link.icon}
              <a
                className="underline"
                href={link.url}
                target="_blank"
                rel="noreferrer"
                download={link?.download ?? false}
              >
                {link.label}
              </a>
            </div>
          );
        })}
      </div>
    </div>
    <div className="flex-[2] place-content-end flex h-fit">
      <img
        src="/photo.jpeg"
        alt="Kenny Bennett"
        className="rounded-full w-32"
      />
    </div>
  </div>
);
