import { Technology } from "@/lib/types/technology.type";
const TechName = ({ technology }: { technology: Technology }) => {
  return (
    <li
      key={technology.technologyId}
      className="text-sm border border-blue-600 rounded-full px-3 py-1 mr-4 mb-2 hover:scale-125 transition duration-200 ease-in-out cursor-default"
    >
      {technology.technologyName}
    </li>
  );
};

export default TechName;
