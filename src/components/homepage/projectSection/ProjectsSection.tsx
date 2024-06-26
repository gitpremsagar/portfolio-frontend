import { PROJECTS_API_ENDPOINT } from "@/lib/constants";
import { ProjectSchema } from "@/lib/schemas";
import { z } from "zod";
import ResponsiveSection from "@/components/customUIs/ResponsiveSection";
import ProjectCardLeft from "@/components/homepage/projectSection/ProjectCardLeft";
import ResponsiveH2 from "@/components/customUIs/ResponsiveH2";
import ProjectCardRight from "./ProjectCardRight";
import ProjectCard from "@/components/homepage/projectSection/ProjectCard";

type ProjectType = z.infer<typeof ProjectSchema>;
async function fetchProjects(): Promise<ProjectType[]> {
  try {
    const response = await fetch(PROJECTS_API_ENDPOINT, {
      next: { revalidate: 60 },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error in fetching projects ", error);
    return [];
  }
}

const ProjectsSection: React.FC = async () => {
  const projects = await fetchProjects();

  let flipper = false;
  return (
    <>
      <section className="hidden md:block">
        <ResponsiveH2>Projects</ResponsiveH2>

        {projects.map((project) => {
          flipper = !flipper;
          return flipper ? (
            <ProjectCardLeft key={project.projectId} project={project} />
          ) : (
            <ProjectCardRight key={project.projectId} project={project} />
          );
        })}
      </section>
      <section className="md:hidden flex flex-col space-y-10">
        <ResponsiveH2>Projects</ResponsiveH2>
        {projects.map((project) => (
          <ProjectCard key={project.projectId} project={project} />
        ))}
      </section>
    </>
  );
};

export default ProjectsSection;
