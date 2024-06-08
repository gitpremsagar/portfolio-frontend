"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const TechnologiesCheckboxes = () => {
    
  const technologies = useSelector((state: RootState) => state.technologies);
  return (
    <div className="grid grid-cols-3 gap-2">
      {technologies.length === 0 && (
        <p className="text-red-600">No technologies found</p>
      )}
      {technologies.map((technology) => (
        <div key={technology.technologyId} className="mt-2">
          <Checkbox
            id={`tech-${technology.technologyId}`}
            name="techList"
            value={technology.technologyId}
            className="mr-2"
          />
          <label htmlFor={`tech-${technology.technologyId}`}>
            {technology.technologyName}
          </label>
        </div>
      ))}
    </div>
  );
};
