import z from "zod";

export const signUpSchema = z.object({
    name:z
        .string()
        .min(1, "enter name"),
    email: z
        .email("invalid email"),
    password: z
        .string()
        .min(8, "password must be at least 8 characters long"),
    confirmPassword:z
        .string()
}).refine((f) =>
    f.password === f.confirmPassword,{
        message: "passwords do not match",
        path: ["confirmPassword"]
    }
);

export type signUpValues = z.infer<typeof signUpSchema>;