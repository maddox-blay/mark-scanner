"use server"
import { ClassCard } from "@/components/ui/class-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ClassDialog } from "@/components/classroom-dialog";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getUserClassrooms } from "@/services/classroom-service";
import EmptyPage from "@/components/empty-page";

export default async function Page() {
    const session = await auth();
    if (!session?.user) {
        redirect("/login")
    }
    const classes = await getUserClassrooms(session.user.id)
    return (
        <div className=" p-4 md:p-12">

            <div className="flex w-full flex-row justify-between">
                <h1 className="text-4xl font-bold">
                    Your Classrooms
                </h1>
                <ClassDialog className="w-fit hidden md:flex md:w-fit" />

            </div>
            <ScrollArea className="flex-1 py-8">
                <div className=" flex flex-col md:flex-row flex-wrap w-full gap-4 pb-20 md:pb-0">
                    {classes.length === 0 ? (
                        <EmptyPage />
                    ) : (
                        classes.map((classroom) => (
                            <ClassCard key={classroom.id} name={classroom.name} slug={classroom.slug} />
                        ))
                    )}
                </div>
            </ScrollArea>
            <ClassDialog className="fixed bottom-8 left-4 right-4 w-auto h-12.5 md:hidden" />
        </div>
    )
}