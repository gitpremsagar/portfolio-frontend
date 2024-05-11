import Section from "@/components/customUIs/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// dummy projects
const dummyProjects = [
  {
    title: "Project 1",
    description: "Project 1 description",
    content: "Project 1 content",
    footer: "Project 1 footer",
  },
  {
    title: "Project 2",
    description: "Project 2 description",
    content: "Project 2 content",
    footer: "Project 2 footer",
  },
  {
    title: "Project 3",
    description: "Project 3 description",
    content: "Project 3 content",
    footer: "Project 3 footer",
  },
  {
    title: "Project 4",
    description: "Project 4 description",
    content: "Project 4 content",
    footer: "Project 4 footer",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <Section className="p-5 sm:p-10 md:p-20">
      <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dummyProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

interface Project {
  project: {
    title: string;
    description: string;
    content: string;
    footer: string;
  };
}
const ProjectCard: React.FC<Project> = ({ project }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{project.content}</p>
      </CardContent>
      <CardFooter>
        <p>{project.footer}</p>
      </CardFooter>
    </Card>
  );
};

export default ProjectsSection;
