import TechName from "@/components/homepage/projectSection/TechnologyName";
import { Project } from "@/lib/types/project.type";
import Image from "next/image";

const ProjectCardLeft = ({ project }: { project: Project }) => {
  return (
    <CardContainer>
      <LeftContainer>
        <div className="grid grid-cols-4">
          <ProjectThumbnail project={project} />
          <PointingLine />
        </div>
      </LeftContainer>
      <RightContainer>
        <CardBody project={project} />
      </RightContainer>
    </CardContainer>
  );
};

const CardContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-6">{children}</div>
);

const RightContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="col-span-3">{children}</div>
);

const LeftContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="col-span-3 border-r-[3px] border-gray-800 py-20">
    {children}
  </div>
);

const ProjectThumbnail = ({ project }: { project: Project }) => (
  <div className="col-span-3">
    <Image
      src={`http://localhost:4600/public/images/projectMockupImage/laptopMockupImage.png`}
      alt={project.projectName}
      className="w-full h-[400px] object-cover object-center"
      width={500}
      height={400}
    />
  </div>
);

const PointingLine = () => (
  <div className="col-span-1 w-full flex flex-col items-center justify-center translate-x-[7px]">
    <div className="w-full flex items-center">
      <div className=" border-[3px] border-gray-800 rounded-full p-1"></div>
      <div className="  border-2 border-gray-800 w-full"></div>
      <div className=" border-[3px] border-gray-800 rounded-full p-1 bg-white"></div>
    </div>
  </div>
);

const CardBody = ({ project }: { project: Project }) => (
  <div className="flex flex-col p-8 h-full justify-center">
    <h2 className="text-xl font-bold text-gray-800">{project.projectName}</h2>
    <p className="text-md font-normal text-gray-600">
      {project.projectDescription}
    </p>

    <div className="grid grid-cols-3">
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

export default ProjectCardLeft;
