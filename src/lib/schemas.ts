import {z} from "zod";

const jwtTokenSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    userRoll: z.string(),
    userId: z.string(),
    email: z.string(),
});

const userSchema = jwtTokenSchema.extend({
    jwtToken: z.string(),
});


const TechnologySchema = z.object({
    technologyName: z.string().min(2,{message:"Technology name should be atleast 2 characters long"}).max(255,{message:"Technology name should be atmost 255 characters long"}).transform((data)=>data.trim()),
    technologyId: z.string(),
    technologyDescription: z.string().min(2,{message:"Technology description should be atleast 2 characters long"}).max(255,{message:"Technology description should be atmost 255 characters long"}).transform((data)=>data.trim()),
});

const ProjectSchema = z.object({
    projectId: z.string(),
    projectPosition: z.number(),
    projectName: z.string().min(2,{message:"Project name should be atleast 2 characters long"}).max(255,{message:"Project name should be atmost 255 characters long"}).transform((data)=>data.trim()),
    projectDescription: z.string(),
    projectLiveLink: z.string(),
    frontendCodeLink: z.string(),
    backendCodeLink: z.string(),
    projectImageLink: z.string(),
    projectMockupImageLink: z.string(),
    // createdAt: z.date(),
    // updatedAt: z.date(),
    technologies: z.array(TechnologySchema), // Assuming you have a TechnologySchema defined
  });

export {jwtTokenSchema, userSchema,TechnologySchema,ProjectSchema};