import { z } from "zod";

const TechnologySchema = z.object({
    technologyName: z.string().min(2,{message:"Technology name should be atleast 2 characters long"}).max(255,{message:"Technology name should be atmost 255 characters long"}).transform((data)=>data.trim()),
    technologyId: z.string(),
    technologyDescription: z.string().min(2,{message:"Technology description should be atleast 2 characters long"}).max(255,{message:"Technology description should be atmost 255 characters long"}).transform((data)=>data.trim()),
});

type Technology = z.infer<typeof TechnologySchema>;

export {TechnologySchema};

export type {Technology};

