"use server"
import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function SignInAction(email: string, password: string) {
    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: "/"
        });
        return { success: true as const };
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }
        return {
            success: false as const,
            error: 'invalid credentials'
        };
    }
}