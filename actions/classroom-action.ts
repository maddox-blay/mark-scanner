"use server"
import { createClassroom } from "@/services/classroom-service";
import { ClassroomSchema, ClassroomValues } from "@/schemas/classroom-schema";
import { auth } from "@/auth";
import { z } from "zod";

export default async function createClass(formData: ClassroomValues) {
    const parsedData = ClassroomSchema.safeParse(formData);
    const slugTransform = z.string().slugify();
    const session = await auth();
    if (!session?.user?.id) {
        return { success: false, error: "Not authenticated" };
    }

    const userId = session.user.id;

    if (!parsedData.success) {
        return {
        success: false as const,
        errors: parsedData.error.flatten().fieldErrors,
        };
    }

    const { name, } = parsedData.data;

    const slug = slugTransform.parse(name)
    const result = await createClassroom(name, userId, slug)

    if (!result.success) {
        return {
            success: false as const,
            errors: { name: [result.error] },
        }
    }

    return {
        success: true as const,
        data: result.classroom,
    }
}