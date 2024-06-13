import TechName from "@/components/homepage/projectSection/TechnologyName";
import { Project } from "@/lib/types/project.type";
import Image from "next/image";
import LiveLink from "@/components/homepage/projectSection/LiveLink";
import FrontendLink from "@/components/homepage/projectSection/FrontendLink";
import BackendLink from "@/components/homepage/projectSection/BackendLink";

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
  <div className="col-span-3 p-4  border-r-[3px] border-gray-800 ">
    {children}
  </div>
);

const LeftContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="col-span-3 py-20">{children}</div>
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
  <div className="col-span-1 w-full flex flex-col items-center justify-center translate-x-[-8px]">
    <div className="w-full flex items-center">
      <div className=" border-[3px] border-gray-800 rounded-full p-1 bg-white"></div>
      <div className=" border-2 border-gray-800 w-full"></div>
      <div className=" border-[3px] border-gray-800 rounded-full p-1"></div>
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
      <LiveLink link={project.projectLiveLink} />
      <FrontendLink link={project.frontendCodeLink} />
      <BackendLink link={project.backendCodeLink} />
    </div>
    <ul className="mt-4">
      {project.technologies.map((technology) => (
        <TechName key={technology.technologyId} technology={technology} />
      ))}
    </ul>
  </div>
);

export default ProjectCardRight;
