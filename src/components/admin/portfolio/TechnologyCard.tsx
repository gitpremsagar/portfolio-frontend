"use client";
import { z } from "zod";
import { TechonologySchema } from "@/lib/schemas";
import TechnologyName from "./TechnologyName";
import { EditTechnologyDialog } from "@/components/admin/portfolio/EditTechnologyDialog";

type technologyType = z.infer<typeof TechonologySchema>;

const TechnologyCard = ({
  technology,
  setTechnologies,
}: {
  technology: technologyType;
  setTechnologies: React.Dispatch<React.SetStateAction<technologyType[]>>;
}) => {
  return (
    <article className="bg-white shadow-md rounded-md p-4 m-4 border border-1 border-gray-300">
      <h2 className="text-gray-800 cursor-default mb-2">
        <TechnologyName>{technology.technologyName}</TechnologyName>
      </h2>
      <div className="flex justify-between items-center">
        <p className="text-gray-600">{technology.technologyDescription}</p>
        <EditTechnologyDialog
          technology={technology}
          setTechnologies={setTechnologies}
        />
      </div>
    </article>
  );
};

export default TechnologyCard;
