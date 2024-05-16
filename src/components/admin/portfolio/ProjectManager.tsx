"use client";
import ResponsiveGrid from "@/components/customUIs/ResponsiveGrid";
import ResponsiveH3 from "@/components/customUIs/ResponsiveH3";
import { Skeleton } from "@/components/ui/skeleton";
import { ProjectSchema } from "@/lib/schemas";
import { set, z } from "zod";
import { useEffect, useState } from "react";
import ProjectCard from "@/components/homepage/projectSection/ProjectCard";
import { AddProjectDialog } from "@/components/admin/portfolio/AddProjectDialog";
import axios from "axios";
import { PROJECTS_API_ENDPOINT } from "@/lib/constants";

const ProjectManager: React.FC = () => {
  type ProjectType = z.infer<typeof ProjectSchema>;
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loadingProject, setLoadingProject] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // fetch projects
  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get(PROJECTS_API_ENDPOINT);
        console.log("fetched projects = ", response.data);
        setProjects(response.data);
        setLoadingProject(false);
        setError(null);
      } catch (error) {
        console.error("error in fetching projects ", error);
        setLoadingProject(false);
        setError("Error in fetching projects");
      }
    }
    fetchProjects();
  }, []);

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <div>
      <ResponsiveH3>Project Manager</ResponsiveH3>
      {loadingProject ? (
        <ResponsiveGrid>
          <Skeleton className="w-full min-h-[150px] h-full rounded-lg" />
          <Skeleton className="w-full min-h-[150px] h-full rounded-lg" />
          <Skeleton className="w-full min-h-[150px] h-full rounded-lg" />
          <Skeleton className="w-full min-h-[150px] h-full rounded-lg" />
        </ResponsiveGrid>
      ) : (
        <ResponsiveGrid>
          {projects.map((project) => (
            <ProjectCard
              key={project.projectId}
              project={project}
              setProjects={setProjects}
            />
          ))}
          <AddProjectDialog setProjects={setProjects} />
        </ResponsiveGrid>
      )}
    </div>
  );
};

export default ProjectManager;
