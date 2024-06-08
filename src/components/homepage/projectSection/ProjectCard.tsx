import { z } from "zod";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardHeaderContent,
} from "@/components/ui/card";
import { ProjectSchema } from "@/lib/schemas";
import { BASE_API_URL } from "@/lib/constants";

type ProjectType = z.infer<typeof ProjectSchema>;

const ProjectCard = ({
  project,
  setProjects,
}: {
  project: ProjectType;
  setProjects: React.Dispatch<React.SetStateAction<ProjectType[]>>;
}) => {
  return (
    <Card>
      <CardHeader>
        <Image
          src={`${BASE_API_URL}/${project.projectImageLink.replace(
            /\\/g,
            "/"
          )}`}
          alt="Project image"
          width={500}
          height={400}
        />
        <CardHeaderContent>
          <CardTitle>{project.projectName}</CardTitle>
          <CardDescription>{project.projectDescription}</CardDescription>
        </CardHeaderContent>
      </CardHeader>
      <CardContent>
        <p>{project.frontendCodeLink}</p>
      </CardContent>
      <CardContent>
        <p>{project.backendCodeLink}</p>
      </CardContent>
      <CardContent>
        <p>{project.projectLiveLink}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
