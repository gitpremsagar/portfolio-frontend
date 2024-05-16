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


const TechonologySchema = z.object({
    technologyName: z.string().min(2,{message:"Technology name should be atleast 2 characters long"}).max(255,{message:"Technology name should be atmost 255 characters long"}).transform((data)=>data.trim()),
    technologyId: z.string(),
    technologyDescription: z.string().min(2,{message:"Technology description should be atleast 2 characters long"}).max(255,{message:"Technology description should be atmost 255 characters long"}).transform((data)=>data.trim()),
});

export {jwtTokenSchema, userSchema,TechonologySchema};