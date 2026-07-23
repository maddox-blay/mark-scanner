import { getClassByslugs } from "@/services/classroom-service";
import { redirect, notFound } from "next/navigation";
import { auth } from "@/auth";

export default async function ClassroomPage({
    params,
}: {
    params: Promise<{ teacherSlug: string; slug: string }>;
}) {
    const { teacherSlug, slug } = await params;
    const decodedTeacherSlug = decodeURIComponent(teacherSlug);

    if (decodedTeacherSlug !== "@me") {
        notFound();
    }

    const session = await auth();
    if (!session?.user?.id) {
        redirect("/login");
    }

    const classroom = await getClassByslugs(slug, session.user.id);
    if (!classroom) notFound();

    return (
        <>
            <h1>{classroom.name}</h1>
        </>
    );
}