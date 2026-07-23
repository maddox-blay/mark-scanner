"use server"
import { createClassroom } from "@/services/classroom-service";
import { ClassroomSchema, ClassroomValues } from "@/schemas/classroom-schema";
import { auth } from "@/auth";

export default async function createClass(formData: ClassroomValues) {
    const parsedData = ClassroomSchema.safeParse(formData);
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


    const result = await createClassroom(name, userId)

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