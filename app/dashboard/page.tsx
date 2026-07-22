import { Button } from "@/components/ui/button";
import { ClassCard } from "@/components/ui/class-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusIcon } from "lucide-react";

export default async function Page() {
    return (
        <div className=" p-4 md:p-12">

            <div className="flex w-full flex-row justify-between">
                <h1 className="text-4xl font-bold">
                    Your Classrooms
                </h1>
                <Button className="w-fit hidden md:flex md:w-fit"><PlusIcon />create class</Button>

            </div>
            <ScrollArea className="flex-1 py-8">
                <div className=" flex flex-col md:flex-row flex-wrap w-full gap-4 pb-20 md:pb-0">
                    <ClassCard />
                    <ClassCard />
                    <ClassCard />
                    <ClassCard />
                    <ClassCard />
                    <ClassCard />
                    <ClassCard />
                </div>
            </ScrollArea>
            <Button className="fixed bottom-4 left-4 right-4 w-auto h-12.5 md:hidden"> <PlusIcon />create class</Button>
        </div >
    )
}