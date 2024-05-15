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

export {jwtTokenSchema, userSchema};