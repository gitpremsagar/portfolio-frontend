import TechName from "@/components/homepage/projectSection/TechnologyName";
import { Project } from "@/lib/types/project.type";
import Image from "next/image";

const ProjectCardRight = ({ project }: { project: Project }) => {
  return (
    <CardContainer>
      <RightContainer>
        <CardBody project={project} />
      </RightContainer>
      <LeftContainer>
        <div className="grid grid-cols-4">
          <PointingLine />
          <ProjectThumbnail project={project} />
        </div>
      </LeftContainer>
    </CardContainer>
  );
};

const CardContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-6">{children}</div>
);

const RightContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="col-span-3 p-4  border-r-2 border-violet-700 ">
    {children}
  </div>
);

const LeftContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="col-span-3 py-20">{children}</div>
);

const ProjectThumbnail = ({ project }: { project: Project }) => (
  <div className="col-span-3">
    <Image
      src={project.projectImageLink}
      alt={project.projectName}
      className="w-full h-[400px] object-cover object-center"
      width={500}
      height={400}
    />
  </div>
);

const PointingLine = () => (
  <div className="col-span-1 w-full flex flex-col items-center justify-center translate-x-[-11px]">
    <div className="w-full flex items-center">
      <div className=" border-2 border-violet-700 rounded-full p-2 bg-violet-700"></div>
      <div className=" border border-1 border-violet-700 w-full"></div>
      <div className=" border-2 border-violet-700 rounded-full p-2"></div>
    </div>
  </div>
);

const CardBody = ({ project }: { project: Project }) => (
  <div className="p-4 flex flex-col h-full justify-center items-end">
    <h2 className="text-xl font-bold text-gray-800">{project.projectName}</h2>
    <p className="text-md font-normal text-gray-600">
      {project.projectDescription}
    </p>

    <div className="grid grid-cols-3 w-full text-right">
      <a
        target="_blank"
        href={project.projectLiveLink}
        className="block text-md font-semibold text-blue-600"
      >
        Live Link
      </a>
      <a
        target="_blank"
        href={project.frontendCodeLink}
        className="block text-md font-semibold text-blue-600"
      >
        Frontend Code
      </a>
      <a
        target="_blank"
        href={project.backendCodeLink}
        className="block text-md font-semibold text-blue-600"
      >
        Backend Code
      </a>
    </div>
    <ul className="flex flex-wrap mt-4">
      {project.technologies.map((technology) => (
        <TechName key={technology.technologyId} technology={technology} />
      ))}
    </ul>
  </div>
);

export default ProjectCardRight;
