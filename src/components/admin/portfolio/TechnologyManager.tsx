import axios from "axios";
import React, { useEffect, useState } from "react";
import { TECHNOLOGIES_API_ENDPOINT } from "@/lib/constants";
import { TechonologySchema } from "@/lib/schemas";
import { z } from "zod";
import TechnologyCard from "./TechnologyCard";
import { AddTechnologyDialog } from "./AddTechnologyDialog";
import ResponsiveH3 from "@/components/customUIs/ResponsiveH3";

const TechnologyManager: React.FC = () => {
  type Technology = z.infer<typeof TechonologySchema>;
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loadingTechnologies, setLoadingTechnologies] = useState(true);

  // fetch technologies
  useEffect(() => {
    async function fetchTechnologies() {
      try {
        const response = await axios.get(TECHNOLOGIES_API_ENDPOINT);
        // console.log("fetched technologies = ", response.data);
        setTechnologies(response.data);
        setLoadingTechnologies(false);
      } catch (error) {
        console.error("error in fetching technologies ", error);
      }
    }
    fetchTechnologies();
  }, []);
  return (
    <div>
      <ResponsiveH3>Technology Manager</ResponsiveH3>
      {loadingTechnologies ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.technologyId}
              technology={technology}
              setTechnologies={setTechnologies}
            />
          ))}
          <AddTechnologyDialog setTechnologies={setTechnologies} />
        </div>
      )}
    </div>
  );
};

export default TechnologyManager;
