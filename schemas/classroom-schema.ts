import * as z from "zod";
 
export const ClassroomSchema = z.object({
    name: z
        .string()
        .min(3, "name is required"),

})

export type ClassroomValues = z.infer<typeof ClassroomSchema>;