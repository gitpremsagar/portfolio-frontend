import { TECHNOLOGIES_API_ENDPOINT } from "@/lib/constants";
import { Technology } from "@/lib/types/technology.type";
const fetchTechnologies = async () => {
  try {
    const response = await fetch(TECHNOLOGIES_API_ENDPOINT);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error in fetching technologies ", error);
    return [];
  }
};

const SkillsSection: React.FC = async () => {
  const technologies: Technology[] = await fetchTechnologies();

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">Skills</h2>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {technologies.map((technology) => (
            <div
              key={technology.technologyId}
              className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg"
            >
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {technology.technologyName}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
