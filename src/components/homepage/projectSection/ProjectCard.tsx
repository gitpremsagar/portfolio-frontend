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
import { Separator } from "@/components/ui/separator";
import { ProjectSchema } from "@/lib/schemas";
import { BASE_API_URL } from "@/lib/constants";
import LiveLink from "@/components/homepage/projectSection/LiveLink";
import BackendLink from "@/components/homepage/projectSection/BackendLink";
import FrontendLink from "@/components/homepage/projectSection/FrontendLink";
import TechName from "./TechnologyName";

type ProjectType = z.infer<typeof ProjectSchema>;

const ProjectCard = ({
  project,
  setProjects,
}: {
  project: ProjectType;
  setProjects?: React.Dispatch<React.SetStateAction<ProjectType[]>>;
}) => {
  return (
    <Card className="rounded-lg overflow-hidden">
      <CardHeader>
        <Image
          src={`${BASE_API_URL}/${project.projectImageLink.replace(
            /\\/g,
            "/"
          )}`}
          alt="Project image"
          width={500}
          height={400}
          className="object-cover w-full"
        />
        <CardHeaderContent>
          <CardTitle>{project.projectName}</CardTitle>
          <CardDescription>{project.projectDescription}</CardDescription>
        </CardHeaderContent>
      </CardHeader>
      <CardContent>
        <LiveLink link={project.projectLiveLink} />
      </CardContent>
      <CardContent>
        <BackendLink link={project.backendCodeLink} />
      </CardContent>
      <CardContent>
        <FrontendLink link={project.frontendCodeLink} />
      </CardContent>
      <Separator />
      <CardContent>
        <h6 className="text-sm font-semibold text-gray-500 my-5">
          Technologies Used:
        </h6>
        <ul className="flex flex-wrap mt-4">
          {project.technologies.map((tech) => (
            <TechName key={tech.technologyId} technology={tech} />
          ))}
        </ul>
      </CardContent>
      {/* <CardFooter>
        <button
          className="bg-red-600 rounded text-white text-xs px-3 py-1 font-semibold"
          onClick={() => {
            console.log("delete project");
          }}
        >
          Delete
        </button>
      </CardFooter> */}
    </Card>
  );
};

export default ProjectCard;
