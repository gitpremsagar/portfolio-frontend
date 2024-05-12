import Section from "@/components/customUIs/Section";
import ProjectCard from "@/components/homepage/projectSection/ProjectCard";

// dummy projects
const dummyProjects = [
  {
    title: "Project 1",
    description: "Project 1 description",
    content: "Project 1 content",
    footer: "Project 1 footer",
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

export default ProjectsSection;
