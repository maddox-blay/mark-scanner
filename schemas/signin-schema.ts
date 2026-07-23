import * as z from "zod";
 
export const signInSchema = z.object({
  email: z
    .email("invalid email")
    .min(1, "Email is required")
    .toLowerCase(),
    
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
})

export type signinValues = z.infer<typeof signInSchema>;