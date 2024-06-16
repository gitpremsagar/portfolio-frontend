import ResponsiveH2 from "@/components/customUIs/ResponsiveH2";
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
    <section className="">
      <div className="py-20">
        <ResponsiveH2>Skills</ResponsiveH2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {technologies.map((technology) => (
            <div key={technology.technologyId} className="">
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {technology.technologyName}
              </h3>
              <p className="text-gray-600 mt-2">
                {technology.technologyDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
