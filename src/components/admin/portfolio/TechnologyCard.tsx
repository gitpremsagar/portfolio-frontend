"use client";
import { z } from "zod";
import { TechonologySchema } from "@/lib/schemas";
import TechnologyName from "./TechnologyName";
import { EditTechnologyDialog } from "@/components/admin/portfolio/EditTechnologyDialog";
import axios from "axios";
import { TECHNOLOGIES_API_ENDPOINT } from "@/lib/constants";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type technologyType = z.infer<typeof TechonologySchema>;

const TechnologyCard = ({
  technology,
  setTechnologies,
}: {
  technology: technologyType;
  setTechnologies: React.Dispatch<React.SetStateAction<technologyType[]>>;
}) => {
  async function handleDeleteTechnology() {
    try {
      await axios.delete(
        `${TECHNOLOGIES_API_ENDPOINT}/${technology.technologyId}`
      );
      setTechnologies((prevTechnologies) =>
        prevTechnologies.filter(
          (tech) => tech.technologyId !== technology.technologyId
        )
      );
    } catch (error) {
      console.error("error in deleting technology ", error);
    }
  }

  return (
    <article className="bg-white shadow-md rounded-md p-4 border border-1 border-gray-300">
      <h2 className="text-gray-800 cursor-default mb-2">
        <TechnologyName>{technology.technologyName}</TechnologyName>
      </h2>

      <div className="flex justify-between items-center">
        <p className="text-gray-600">{technology.technologyDescription}</p>
        <div className="flex items-center">
          <EditTechnologyDialog
            technology={technology}
            setTechnologies={setTechnologies}
          />
          <AlertDialog>
            <AlertDialogTrigger className="text-red-200 hover:text-red-500 border border-1 border-red-200 hover:border-red-500 rounded-lg px-2 py-1 ml-2">
              Remove
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  You are about to delete this technology. This technology will
                  not be visilbe in any project.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteTechnology}>
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </article>
  );
};

export default TechnologyCard;
