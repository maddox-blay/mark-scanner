import { createUser } from "@/services/signup-services";
import { signUpSchema, signUpValues } from "@/schemas/signup-schema";
import bcrypt from "bcryptjs";

export default async function signUp(formData: signUpValues) {
  const parsedData = signUpSchema.safeParse(formData);

  if (!parsedData.success) {
    return {
      success: false as const,
      errors: parsedData.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = parsedData.data;

  const hashedPassword = await bcrypt.hash(password, 5);

  await createUser(name, email, hashedPassword);

  return {
    success: true as const,
  };
}