import TechName from "@/components/homepage/projectSection/TechnologyName";
import { Project } from "@/lib/types/project.type";
import Image from "next/image";
import LiveLink from "@/components/homepage/projectSection/LiveLink";
import FrontendLink from "@/components/homepage/projectSection/FrontendLink";
import BackendLink from "@/components/homepage/projectSection/BackendLink";

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
  <div className="col-span-3 py-20">{children}</div>
);

const LeftContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="col-span-3 border-r-[3px] border-gray-800 py-20">
    {children}
  </div>
);

const ProjectThumbnail = ({ project }: { project: Project }) => (
  <div className="col-span-3">
    <Image
      src={project.projectMockupImageLink}
      alt={project.projectName}
      className="w-full lg:h-[400px] object-cover object-center"
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
  <div className="flex flex-col pl-8 h-full justify-center space-y-10">
    <h2 className="text-xl font-bold text-gray-800">{project.projectName}</h2>
    <p className="text-md font-normal text-gray-600">
      {project.projectDescription}
    </p>

    <div className="flex w-full text-right justify-start space-x-10">
      <LiveLink link={project.projectLiveLink} />
      <FrontendLink link={project.frontendCodeLink} />
      <BackendLink link={project.backendCodeLink} />
    </div>
    <div className="mt-4 bg-gray-100 rounded-lg p-5 w-full">
      <h6 className="text-sm font-semibold text-gray-500 mb-5">
        Technologies Used:
      </h6>
      <ul className="flex flex-wrap mt-4">
        {project.technologies.map((technology) => (
          <TechName key={technology.technologyId} technology={technology} />
        ))}
      </ul>
    </div>
  </div>
);

export default ProjectCardLeft;
