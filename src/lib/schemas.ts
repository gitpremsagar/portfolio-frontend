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
    technologyName: z.string().min(2,{message:"Technology name should be atleast 2 characters long"}),
    technologyId: z.string(),
    technologyDescription: z.string().min(2,{message:"Technology description should be atleast 2 characters long"})
});

export {jwtTokenSchema, userSchema,TechonologySchema};