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

const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  content: z.string(),
  footer: z.string(),
});

interface Project {
  project: z.infer<typeof ProjectSchema>;
}

const ProjectCard: React.FC<Project> = ({ project }) => {
  return (
    <Card>
      <CardHeader>
        <Image
          src="https://via.placeholder.com/500x400"
          alt="Project image"
          width={500}
          height={400}
        />
        <CardHeaderContent>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeaderContent>
      </CardHeader>
      <CardContent>
        <p>{project.content}</p>
      </CardContent>
      <CardContent>
        <p>{project.content}</p>
      </CardContent>
      <CardContent>
        <p>{project.content}</p>
      </CardContent>
      <CardFooter>
        <p>{project.footer}</p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
