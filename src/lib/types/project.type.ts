import { z } from "zod";
import {TechnologySchema} from "@/lib/types/technology.type";

const ProjectSchema = z.object({
    projectId: z.string(),
    projectPosition: z.number(),
    projectName: z.string().min(2,{message:"Project name should be atleast 2 characters long"}).max(255,{message:"Project name should be atmost 255 characters long"}).transform((data)=>data.trim()),
    projectDescription: z.string().min(2,{message:"Project description should be atleast 2 characters long"}).max(255,{message:"Project description should be atmost 255 characters long"}).transform((data)=>data.trim()),
    projectLiveLink: z.string().url(),
    frontendCodeLink: z.string().url(),
    backendCodeLink: z.string().url(),
    projectImageLink: z.string().url(),
    projectMockupImageLink: z.string().url(),
    // createdAt: z.date(),
    // updatedAt: z.date(),
    technologies: z.array(TechnologySchema), // Assuming you have a TechnologySchema defined
});

type Project  = z.infer<typeof ProjectSchema>;

export {ProjectSchema};
export type {Project};