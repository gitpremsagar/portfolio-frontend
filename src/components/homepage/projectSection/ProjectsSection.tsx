import axios from "axios";
import { PROJECTS_API_ENDPOINT } from "@/lib/constants";
import { ProjectSchema } from "@/lib/schemas";
import { z } from "zod";
import ResponsiveSection from "@/components/customUIs/ResponsiveSection";
import ProjectCardHorizontal from "@/components/homepage/projectSection/ProjectCardHorizontal";
import ResponsiveH2 from "@/components/customUIs/ResponsiveH2";

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
      <ResponsiveH2>Projects</ResponsiveH2>

      {projects.map((project) => (
        <ProjectCardHorizontal key={project.projectId} project={project} />
      ))}
    </ResponsiveSection>
  );
};

export default ProjectsSection;
