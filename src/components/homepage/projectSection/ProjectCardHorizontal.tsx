import TechName from "@/components/homepage/projectSection/TechnologyName";
import { Project } from "@/lib/types/project.type";
import Image from "next/image";

const ProjectCardHorizontal = ({ project }: { project: Project }) => {
  return (
    <div className="grid grid-cols-5 my-20 gap-20 border border-1 border-white hover:border-gray-200 hover:shadow-2xl transition ease-in-out duration-200 rounded-2xl p-5">
      <div className="col-span-2 bg-red-400">
        <Image
          src={project.projectImageLink}
          alt={project.projectName}
          className="w-full h-[400px] object-cover object-center"
          width={500}
          height={400}
        />
      </div>
      <div className="col-span-3 p-4 flex flex-col justify-between ">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {project.projectName}
          </h2>
          <p className="text-md font-normal text-gray-600">
            {project.projectDescription}
          </p>
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default ProjectCardHorizontal;
