import axios from "axios";
import React, { useEffect, useState } from "react";
import { TECHNOLOGIES_API_ENDPOINT } from "@/lib/constants";
import { TechnologySchema } from "@/lib/types/technology.type";
import { z } from "zod";
import TechnologyCard from "./TechnologyCard";
import { AddTechnologyDialog } from "./AddTechnologyDialog";
import ResponsiveH3 from "@/components/customUIs/ResponsiveH3";
import ResponsiveGrid from "@/components/customUIs/ResponsiveGrid";
import { Skeleton } from "@/components/ui/skeleton";

const TechnologyManager: React.FC = () => {
  type Technology = z.infer<typeof TechnologySchema>;
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
        <ResponsiveGrid>
          <Skeleton className="w-full min-h-[150px] h-full rounded-lg" />
          <Skeleton className="w-full min-h-[150px] h-full rounded-lg" />
          <Skeleton className="w-full min-h-[150px] h-full rounded-lg" />
          <Skeleton className="w-full min-h-[150px] h-full rounded-lg" />
        </ResponsiveGrid>
      ) : (
        <ResponsiveGrid>
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.technologyId}
              technology={technology}
              setTechnologies={setTechnologies}
            />
          ))}
          <AddTechnologyDialog setTechnologies={setTechnologies} />
        </ResponsiveGrid>
      )}
    </div>
  );
};

export default TechnologyManager;
