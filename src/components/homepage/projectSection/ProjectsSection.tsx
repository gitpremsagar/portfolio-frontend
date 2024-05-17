import axios from "axios";
import { PROJECTS_API_ENDPOINT } from "@/lib/constants";
import { ProjectSchema } from "@/lib/schemas";
import { z } from "zod";
import ResponsiveSection from "@/components/customUIs/ResponsiveSection";

type ProjectType = z.infer<typeof ProjectSchema>;
async function fetchProjects(): Promise<ProjectType[]> {
  try {
    const response = await axios.get(PROJECTS_API_ENDPOINT);
    // console.log("fetched projects = ", response.data);
    return response.data;
  } catch (error) {
    console.error("error in fetching projects ", error);
    return [];
  }
}

const ProjectsSection: React.FC = async () => {
  const projects = await fetchProjects(); //as unknown as ResponseType;
  return (
    <ResponsiveSection>
      <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.projectId}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src="https://source.unsplash.com/random"
              alt="random"
              className="w-full h-56 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">
                {project.projectName}
              </h2>
              <p className="text-md font-normal text-gray-600">
                {project.projectDescription}
              </p>
              <a
                href={project.projectLiveLink}
                className="block text-md font-semibold text-blue-600"
              >
                Live Link
              </a>
              <a
                href={project.frontendCodeLink}
                className="block text-md font-semibold text-blue-600"
              >
                Frontend Code
              </a>
              <a
                href={project.backendCodeLink}
                className="block text-md font-semibold text-blue-600"
              >
                Backend Code
              </a>
              <ul className="flex flex-wrap mt-4">
                {project.technologies.map((technology) => (
                  <li
                    key={technology.technologyId}
                    className="text-xs font-semibold text-gray-600 bg-gray-200 rounded-full p-2 mr-1 mb-1"
                  >
                    {technology.technologyName}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </ResponsiveSection>
  );
};

export default ProjectsSection;
